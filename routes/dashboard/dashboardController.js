const dashboardAccess = (req, res) => {
  const alreadyLoggedUser = req.cookies.isLoggedIn;
  console.log("Cookie present:", alreadyLoggedUser); //if cookie present in req body it will show true in logs
  if (alreadyLoggedUser) {
    res
      .status(200)
      .send(
        "User is already logged - from dashbord controller - can grant accesss to other routes - can send res to thus route"
      );
  } else {
    res.status(401).send("User is not logged in.");
  }
};

export default dashboardAccess;
