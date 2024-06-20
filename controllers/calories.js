/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const CaloriesCollection = require("../schemas/calories");
const { getUserById } = require("./users");

const addNewCalorieRecord = async ({
  user_id,
  year,
  month,
  day,
  description,
  category,
  amount,
}) => {
  const id = Date.now();
  const u_id = await getUserById(user_id);

  const calories = new CaloriesCollection({
    id,
    user_id: u_id._id,
    year,
    month,
    day,
    description,
    category,
    amount,
  });
  await calories.save();
  return calories;
};

module.exports = { addNewCalorieRecord };
