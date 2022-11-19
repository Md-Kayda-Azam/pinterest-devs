import jwt from "jsonwebtoken";

/**
 * Create JWT
 */

export const createToken = (payload, exp) => {
  // create new token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: exp,
  });

  return token;
};

/**
 * JWT Verify
 * @param {*} token
 * @returns
 */
export const tokenVerify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
