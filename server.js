require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 8080;
const userRoutes = require("./routes/users/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});

module.exports = app;