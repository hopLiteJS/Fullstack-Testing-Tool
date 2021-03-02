const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const apiRouter = require('./routes/ApiRouter');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// creating session;
// const session = require('express-session');
// const { v4: uuid } = require('uuid');

//connecting to api router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../public/src/index.html')));

app.use('/static', express.static(path.resolve(__dirname, "../public/src")));

app.use('/api', apiRouter);






// // check cookie
// function checkSignIn(req, res, next) {
//   console.log('hello world middleware')
//   console.log("these are the cookies", req.cookies)
//   if (req.cookies === { role: "token" }) {
//     next();     //If session exists, proceed to page
//   } else {
//     var err = new Error("Not logged in!");
//     console.log("not logged in with cookie");
//     next(err);  //Error, trying to access unauthorized page!
//   }
// }
// app.get('/protected_page', checkSignIn, function (req, res) {
//   console.log(req.cookies)
//   // res.render('protected_page', { id: req.session.user.id })
// })


//did you guys delete app.listen?
//Don't touch this.
app.listen(port, console.log(`Server listening on Port ${port}`))