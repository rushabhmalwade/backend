import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  console.log(
    `This is a middleware that checks all the request that are coming in! and logs the request path`
  );
  console.log(req.path);
  next();
});
app.all("/secret", (req, res) => {
  console.log("This middleware handle all type of requests for /secret path!");
  next();
});
app.get("/test", (req, res) => {
  res.send("<h1>This is the test route</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello from the user</h1>");
});

app.listen(PORT, () => {
  console.log(`App is listening to the port at ${PORT}`);
});
