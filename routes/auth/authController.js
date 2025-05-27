const authLoginController = (req, res, next) => {
  console.log(req.body);
  res.send(
    "Your login was succesful P.S - This message is from authRoute controller"
  ); //res.send or res.json or res.end will anyway close the req-res cycle so no need to use next();
  // next(); //the request will hang — it won’t move forward to your route like /home, /api
};

export default authLoginController;
