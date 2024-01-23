const Persons = require('../models/mainModel')

let message ="" 

module.exports={
    getLogincontroller:(req,res)=>{
        if(req.session.name){
            res.redirect('/index')
        }else{
            res.render("login",{message})
        }
    },
    getSignupController: (req,res)=> {
        if(req.session.name){
            res.redirect('/index')
        } else{
            
            res.render("signup",{message})
            message=""
        }
    },
    // destroy the session
    getLogoutController:(req,res)=>{
        req.session.destroy(err => {
            if (err) {
                console.error('Error destroying session:', err);
                res.sendStatus(500);
            } else {
                res.redirect('/login'); // Redirect to the login page or any other page after logout
            }
        })
    },
    getIndexcontroller:(req, res)=>{
        if(req.session.name){
            
            res.render('index',{Persons})
        }
        else{
            res.redirect('/login')
        }
    },
    postSignupController:(req,res)=> {
        const {username , password} = req.body
        console.log(req.body);
        const check = Persons.find((t)=> {
            return t.username === username
            
        })
        console.log(check);
        if(check){
            message = "user is already exist please login"   // already exist go to login page
            res.redirect('/signup')
        }else{
            newuser = {
                username,   
                password
            }
            req.session.name = "ronaldo"
            Persons.push(newuser);
            console.log(newuser);
            res.redirect('/index');
        }
        
    },
    postLoginController:(req,res)=> {
        const {username , password} = req.body
        console.log(req.body);
        const check = Persons.find((t)=> {
            return t.username === username && t.password === password
    
        })
        console.log(check);
        if(check){
            req.session.name = "ronaldo"
            // message = "user is already exist please login"
            res.redirect('/index')
        }else{
            message = "User not found please sign up"
            res.redirect('/login');
        }
        
    }

}


