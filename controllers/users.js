/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const UsersCollection = require("../schemas/users");

const getUserById = async (id) => {
  const findUser = await UsersCollection.findOne({ id });

  if (!findUser) {
    return null;
  }

  return findUser;
};

module.exports = { getUserById };
