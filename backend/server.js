const express = require("express");
const cors = require("cors");
const app = express();
const { connection } = require("./db");

// Connect to MongoDB
connection();

// middleware
app.use(express.json());
app.use(cors());

// Routes
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const authRouter = require("./routes/auth");

app.use("/api/register", registerRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/auth", authRouter);

app.listen(4200, () => {
  console.log("Server connected to port 4200");
});
