/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require("express");
const { addNewCalorieRecord } = require("../controllers/calories");
const router = express.Router();

// Create a new user
router.post("/addcalories", async (req, res) => {
  try {
    const calories = await addNewCalorieRecord(req.body);
    res.send(calories);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
