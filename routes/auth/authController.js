const users = [
  { username: "testuser", password: "testpassword" },
  { username: "admin", password: "adminpass" },
];
const authLoginController = (req, res, next) => {
  const isValidUser = users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  if (isValidUser) {
    res.status(200).send("Login Succesful!");
  } else {
    res.status(401).send("Invalid Credentials!");
  }
  console.log(req.body);
  //res.send("Your login was succesful P.S - This message is from authRoute controller"); //res.send or res.json or res.end will anyway close the req-res cycle so no need to use next();
  // next(); //the request will hang — it won’t move forward to your route like /home, /api
};

export default authLoginController;
