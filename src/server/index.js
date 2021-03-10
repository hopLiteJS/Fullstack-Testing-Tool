const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const apiRouter = require('./routes/ApiRouter');
const cookieParser = require('cookie-parser');
const { DefaultHoplite }  = require('hoplitejs');
DefaultHoplite.test('hello people');
const { AuthnController } = DefaultHoplite;
const { AuthzController } = DefaultHoplite;
const {HopliteUserSchema } = HopliteUserSchema;
const authorizationController = require('./controllers/Authorization/AuthorizationController')
//DefaultHoplite properties:
//.AuthnController ==> .testAuthn(str)
//.AuthzController ==> .testAuthz(str)
app.use(cookieParser());
AuthzController.testAuthz("auth works")
AuthnController.testAuthn("authn works")
// creating session;
// const session = require('express-session');
// const { v4: uuid } = require('uuid');


// const library = require('hoplitejs');


// console.log(library.test);

//connecting to api router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../public/src/index.html')));

app.use('/static', express.static(path.resolve(__dirname, "../public/src")));

const queriedInfo = {
username: 'max',
password: '123',
privilege: true
}
const ruleset = {
cookie:true
}

function testMiddleWare(queriedInfo){
 HopliteUserSchema(queriedInfo.username, queriedInfo.password, queriedInfo.privilege)
 next()
}

app.use('/api', apiRouter);
app.post('/testAuthz' , testMiddleWare(queriedInfo) ,AuthnController.authenticate(user,ruleset) ,AuthzController.authorizeCookie,(req,res)=>{
  
})
// // check cookie
// function checkSignIn(req, res, next) {
// console.log("🚀 ~ file: index.js ~ line 35 ~ DefaultHoplite", DefaultHoplite)
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