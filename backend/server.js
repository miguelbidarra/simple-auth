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

app.use("/register", registerRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(4200, () => {
  console.log("Server connected to port 4200");
});
