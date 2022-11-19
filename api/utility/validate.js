/**
 * Email validate
 * @param {*} email
 * @returns
 */
export const isEmail = (email) => {
  return email
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
