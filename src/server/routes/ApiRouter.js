const express = require('express');
const ApiRouter = express.Router();
const { CrudController, getItems } = require('../controllers/CRUDController')
const { authenticateUser } = require('../controllers/Authentication/AuthenticationController');

ApiRouter.get('/', CrudController.getItems, (req, res) => {
  console.log(res.locals.allUsers);
  res.status(200).send(res.locals.allUsers);
})

function checkSignIn(req, res, next) {
  console.log('hello world middleware')
  console.log("these are the cookies", req.cookies);
  if (req.cookies) {
    console.log('it works')
    next();     //If session exists, proceed to page
  } else {
    var err = new Error("Not logged in!");
    console.log("not logged in with cookie");
    next(err);  //Error, trying to access unauthorized page!
  }
}

ApiRouter.get('/cookie', checkSignIn, (req, res) => {
  console.log(req.cookies.role)
})

ApiRouter.post('/createuser', CrudController.createUser, (req, res) => {

})

ApiRouter.post('/authenticateuser', CrudController.authenticateUser, (req, res) => {
  res.status(200);
})
ApiRouter.post('/login', (req, res) => {

})

ApiRouter.delete('/', CrudController.deleteItem, (req, res) => {

})

ApiRouter.patch('/', CrudController.updateItem, (req, res) => {

})
module.exports = ApiRouter;