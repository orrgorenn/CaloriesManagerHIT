/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require("express");
const CaloriesCollection = require("../schemas/calories");
const { getUserById } = require("../controllers/users");

const router = express.Router();

// Generate a report base on user_id, year and month.
router.get("/report", async (req, res) => {
  const { user_id, year, month } = req.query;

  try {
    const u_id = await getUserById(user_id);

    const data = await CaloriesCollection.find({
      user_id: u_id,
      year,
      month,
    }).lean();

    const formattedData = {
      breakfast: [],
      lunch: [],
      dinner: [],
      other: [],
    };

    data.forEach((item) => {
      formattedData[item.category].push({
        day: item.day,
        description: item.description,
        amount: item.amount,
      });
    });

    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
