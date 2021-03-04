const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// configure the global variable process.env globally.
class AuthenticationControllerBlueprint {
  // async authenticateUser(req, res, next) {
  //   const user = { username, password }
  //   const accessToken = await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  //   //res.json({accessToken});
  // }

  async authenticateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1]; // "Bearer kljahkl34jh4321jh41lkjh23k;l1j2h3lk1j2h31lkuj2j3"

    if (token === null) return res.status(401);
    try {
      await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // (token, secretkey, callback or promise)
    } catch (error) {
      console.log(error);
    }
  }

  setCookie(req, res, next) {
    // user attempts a login (username, password)
    // make sure the user is who they say they are (authenticate them).
    // if the password matches the userName assign them a cookie
    // else {res.sendStatus(401)}
    // console.log(`Cookie Values: 'role' = 'admin'`);

    // , { maxAge: 300000, httpOnly: true }
    next();
  }
}

const AuthenticationController = new AuthenticationControllerBlueprint();
// const authenticateUser = AuthenticationController.authenticateUser;
const { setCookie } = AuthenticationController;
// const authenticateToken = AuthenticationController.authenticateToken;

module.exports = {
  // authenticateUser,
  setCookie
};
