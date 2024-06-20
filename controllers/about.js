/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const fs = require("fs").promises;

const readDevelopersFile = async () => {
  const filePath = "developers.json";
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading developers.json:", err);
    throw new Error("Error reading developers.json");
  }
};

module.exports = { readDevelopersFile };
