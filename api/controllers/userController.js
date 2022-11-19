import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hashPassword, varifyPassword } from "../utility/hash.js";
import {
  sendActivationLink,
  sentForgotPasswordLink,
} from "../utility/sendMail.js";
import { createToken, tokenVerify } from "../utility/token.js";
import { isEmail } from "../utility/validate.js";

/**
 * @access public
 * @route /api/user/register
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const register = async (req, res, next) => {
  try {
    // getform data
    const { first_name, sur_name, email, password, age, gender } = req.body;

    // User email axists validate
    const emailUSer = await User.findOne({ email: email });

    // form Validation
    if (!first_name || !sur_name || !email || !password || !gender) {
      next(createError(400, "All fields are requored!"));
    } else if (emailUSer) {
      next(createError(400, "Already user email axists"));
    }

    // Email Validation
    if (!isEmail(email)) {
      next(createError(400, "Invalid email address"));
    } else {
      // Create User
      const user = await User.create({
        first_name,
        sur_name,
        email,
        password: hashPassword(password),
        age,
        gender,
      });

      if (user) {
        // create activation token
        const activationToken = createToken({ id: user._id }, "30d");

        sendActivationLink(user.email, {
          name: user.first_name + " " + user.sur_name,
          link: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT
          }/api/v1/user/activate/${activationToken}`,
        });

        // send respone
        res.status(200).json({
          message: "User Created Successful",
          user: user,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/login
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const login = async (req, res, next) => {
  try {
    // get login form data
    const { email, password } = req.body;

    // User email axists validate
    const loginUser = await User.findOne({ email: email });

    // validation form
    if (!email || !password) {
      next(createError(400, "All fields are requored!"));
    } else if (!loginUser) {
      next(createError(400, "Login user not found"));
    } else if (!isEmail(email)) {
      next(createError(400, "Invalid email address"));
    } else {
      // password verify
      if (!varifyPassword(password, loginUser.password)) {
        next(createError(400, "Wrong password"));
      } else {
        // create token
        const token = createToken({ id: loginUser._id }, "365d");

        res.status(200).cookie("authToken", token).json({
          message: "User Login Successful",
          user: loginUser,
          token: token,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/me
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loggedInUser = async (req, res, next) => {
  try {
    const auth_token = req.headers.authorization;

    if (!auth_token) {
      next(createError(400, "Token not found"));
    } else {
      const token = auth_token.split(" ")[1];
      const user = tokenVerify(token);

      if (!user) {
        next(createError(400, "Invalid Token"));
      } else {
        const loggedInUser = await User.findById(user.id);

        if (!loggedInUser) {
          next(createError(400, "User data not found"));
        } else {
          res.status(200).json({
            message: "User data Stable",
            user: loggedInUser,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by email
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const activateAccount = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;
    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      }

      // now activate account
      if (tokenData) {
        const account = await User.findById(tokenData.id);

        // check account varify
        if (account.isActivate == true) {
          next(createError(400, "Account already activate"));
        } else {
          await User.findByIdAndUpdate(tokenData.id, {
            isActivate: true,
            access_token: "",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by forgot Password
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      next(createError(400, "User not found"));
    } else {
      // create activation token
      const passwordResetToken = createToken({ id: user._id }, "30d");

      sentForgotPasswordLink(user.email, {
        name: user.first_name + " " + user.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/forgot-password/${passwordResetToken}`,
      });

      // send respone
      res.status(200).json({
        message: "A password reset link has send to your password",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/ Password reset action
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const passwordResetAction = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;
    const { password } = req.body;

    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      }

      // now activate account
      if (tokenData) {
        const user = await User.findById(tokenData.id);

        if (!user) {
          next(createError(400, "Invalid User Id"));
        } else {
          await User.findByIdAndUpdate(user._id, {
            password: hashPassword(password),
            access_token: "",
          });

          res.status(200).json({
            message: "Password Changed",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};
