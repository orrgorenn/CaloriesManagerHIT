/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require("express");

const { getUserById } = require("../controllers/users");

const router = express.Router();

// Get a user by id
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const findUser = await getUserById(id);

    if (!findUser) {
      return res.status(404).json({ error: "User id not found." });
    }

    res.status(200).json(findUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
