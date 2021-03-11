const db = require('../models/TestModel');
const { setCookie } = require('./Authentication/AuthenticationController');

class CRUDControllerBlueprint {
  async getItems(req, res, next) {//2
    try {
      const queryString = `SELECT * from credential`;
      const result = await db.query(queryString);
      const allUsers = result.rows; //array containing our sql query
      res.locals.allUsers = allUsers;
      next();
    } catch (error) {
      console.log(error);
    }
  }


  async updateItem(req, res, next) {//3
    const name = req.body.username;
    const newName = req.body.new;
    console.log("🚀 ~ file: CRUDController.js ~ line 37 ~ CRUDControllerBlueprint ~ updateItem ~ newName", newName);
    const updateString = `UPDATE credential SET username = $1 WHERE username = $2`;

    await db.query(updateString, [newName, name]);
  }

  createUser(req, res, next) { //1 POST
    //creating dynamic query strings using either/or parametized queries for PSGSQL, or string interpolation.
    // const username = req.body.username;
    const username = req.body.username
    const password = req.body.password
    const queryString = `INSERT into credential(username, password) values ('${username}','${password}')`
    db.query(queryString)
      .then((data) => {
        console.log(data)
        // res.locals.username = data.rows;
        // return next(); 
      })
  }

  deleteItem(req, res, next) {//4
    const username = req.body.username;
    console.log(username)
    const deleteString = `DELETE FROM credential WHERE username = '${username}'`
    db.query(deleteString)
      .then(data => {
        console.log(data)
      })
  }
}

// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

const CrudController = new CRUDControllerBlueprint;
const getItems = CrudController.getItems;
const auntheticateUser = CrudController.auntheticateUser;
const updateItem = CrudController.updateItem;
const createUser = CrudController.createUser;
const deleteItem = CrudController.deleteItem;

module.exports = {
  getItems,
  auntheticateUser,
  updateItem,
  createUser,
  deleteItem,
  CrudController
}