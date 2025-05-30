import express from "express";
import testRouter from "./routes/testRoutes.js";
import userRouter from "./routes/user/userRoutes.js";
import authRouter from "./routes/auth/authRoutes.js";
import dashboardRouter from "./routes/dashboard/dashboardRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cookieParser());
app.use(express.json()); //Without it, req.body will be undefined. IT parses JSON
app.use(express.urlencoded({ extended: true })); //Without it, req.body will be undefined. IT parses FORM DATA, ALSO
// extended: true →  uses the qs library (allows nested objects like { user: { name: "John" } })
app.use(
  session({
    // Used to sign the session ID cookie and prevent tampering
    // Only the server knows this secret, like a digital signature
    secret: "supersecret123", // 🔐 Change this to a long, random string in production

    // Don’t save the session to store if nothing is changed during the request
    // Saves performance by avoiding unnecessary writes
    resave: false,

    // Don’t create and save session until something is stored in it
    // Useful to prevent creating empty sessions for anonymous visitors
    saveUninitialized: false,

    // Cookie-related settings
    cookie: {
      // Makes cookie inaccessible to JavaScript (prevents XSS attacks)
      httpOnly: true,

      // Session will expire after 15 minutes of inactivity
      // After this time, the user has to login again
      maxAge: 1000 * 60 * 15, // ⏰ 15 minutes
    },

    // Optional: use secure: true to only send cookie over HTTPS
    // secure: true,  // ❗ Uncomment in production (HTTPS only)

    // Optional: refresh cookie expiry on every request if user is active
    // rolling: true,
  })
);

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

app.use("/auth", authRouter);

app.use("/dev", testRouter); ////this will make /dev/test route available

app.use("/users", userRouter);
app.use("/dashboard", dashboardRouter);

app.get("/hello", (req, res) => {
  res.send("<h1>Hello from the user</h1>");
});

app.listen(PORT, () => {
  console.log(`App is listening to the port at ${PORT}`);
});
