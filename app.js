const express = require("express") 
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')   // session import
const router=require('./router/userRouter')  // router import
const nocache = require("nocache");    // nocache import
app.use(nocache());
const port = 4000

// session use
app.use(session({
    secret: "messi",
    resave: false,
    saveUninitialized: true
}))

// set view engine
app.set('view engine','ejs') 
// Middleware
app.use(bodyParser.urlencoded({extended:true}))

// use router
app.use('/',router)

// port listening
app.listen(port,()=>{
    console.log('Server Running....');
})


