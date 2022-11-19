import bcrypt from "bcryptjs";

/**
 * Create a Hash password
 */

export const hashPassword = (password) => {
  // salt gen
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(password, salt);

  return hashPass;
};

/**
 * password match
 */

export const varifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
