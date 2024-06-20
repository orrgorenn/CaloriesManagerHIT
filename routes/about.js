/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require("express");
const { readDevelopersFile } = require("../controllers/about");

const router = express.Router();

// Return all data regarding the developers of this project
router.get("/about", async (req, res) => {
  const developersData = await readDevelopersFile();
  if (!developersData) {
    return res.status(404).json({ error: "Error getting developers data." });
  }

  return res.status(200).json(developersData);
});

module.exports = router;
