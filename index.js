import express from "express";
import testRouter from "./routes/testRoutes.js";
import userRouter from "./routes/user/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

// app.use("/", (req, res, next) => {
//   res.send("I am app.use");
// });

app.all("/secret", (req, res) => {
  res.send("Hi i am secret");
});

app.get("/test", (req, res) => {
  res.send("<h1>This is the test route</h1>");
});

app.use(testRouter); //this will make /test route available

app.use("/dev", testRouter); ////this will make /dev/test route available

app.use("/users", userRouter);

app.get("/hello", (req, res) => {
  res.send("<h1>Hello from the user</h1>");
});

app.listen(PORT, () => {
  console.log(`App is listening to the port at ${PORT}`);
});
