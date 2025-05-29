const dashboardAccess = (req, res) => {
  // const alreadyLoggedUser = req.cookies.isLoggedIn; // this is when we are using cookies
  const loggedInUserId = req.session.userId;
  const alreadyLoggedUser = req.session.isLoggedIn;
  console.log("Session User ID:", loggedInUserId); //if cookie present in req body it will show true in logs
  console.log("Already logged user:", alreadyLoggedUser);
  if (alreadyLoggedUser) {
    res.status(200).send(
      `Welcome to the Dashboard! User ID: ${loggedInUserId} - Access granted.`
      //"User is already logged - from dashbord controller - can grant accesss to other routes - can send res to thus route"
    );
  } else {
    res.status(401).send("User is not logged in.");
  }
};

export default dashboardAccess;
