/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const caloriesRoutes = require("./routes/calories");
const usersRoutes = require("./routes/users");
const reportRoutes = require("./routes/report");
const aboutRoutes = require("./routes/about");
require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/", caloriesRoutes);
app.use("/", usersRoutes);
app.use("/", reportRoutes);
app.use("/", aboutRoutes);

app.listen(PORT, () => {
  console.log(`CaloriesManager is listening on port ${PORT}`);
});
