const users = [
  { username: "testuser", password: "testpassword" },
  { username: "admin", password: "adminpass" },
];
const authLoginController = (req, res, next) => {
  const isValidUser = users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  req.session.isLoggedIn = true;
  if (isValidUser) {
    // Set a session property
    req.session.isLoggedIn = true; // just set a boolean flag it's a cookie named isLoggedIn
    req.session.userId = isValidUser.username; // Alternatively, Store the user's ID in the session
    res
      .status(200)
      // .cookie("isLoggedIn", "true") NO need of cookies as we are managing it in the express session cookies
      .send("Login Succesful!"); //cookie sent on user login now we can read this cookie in other routes req object e.g lets use /dashboard route to read this cookie now AND we will send response on these routes like (secret) when we find cookie already in thier requset else not
  } else {
    res.status(401).send("Invalid Credentials!");
  }
  // console.log(req.headers.cookie); this is without using cookie-parser
  console.log("Login request from user:", req.body);
  //res.send("Your login was succesful P.S - This message is from authRoute controller"); //res.send or res.json or res.end will anyway close the req-res cycle so no need to use next();
  // next(); //the request will hang — it won’t move forward to your route like /home, /api
};

export default authLoginController;
