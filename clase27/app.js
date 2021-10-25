const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_CLIENT_ID = '197790385822931';
const FACEBOOK_CLIENT_SECRET = '209580e032c92452a714b4f66cc768aa';

passport.use(new FacebookStrategy({
    clientID : FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL:'/auth/facebook/callback',
    profileFields:['id','displayName','photos','emails'],
    scope:['email']
}, 
 function(accessToken,refreshToken,profile,done){
     console.log(profile)
     let userProfile = profile;
     return done(null,userProfile)
 }
));

passport.serializeUser(function(user,cb){
    cb(null,user);
})

passport.deserializeUser(function(obj,cb){
    cb(null,obj)
})

let usuarios = [];

const app = express();
app.use(cookieParser())
app.use(session({
    secret : 'kdlñskdlñsklñd',
    resave:false,
    saveUninitialized:false,
    cookie:
    {
        maxAge : 60000

    }
}))


app.use(passport.initialize());
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    if (req.isAuthenticated())
     res.send('/datos')
     else
     res.redirect('/login')
})

app.get('/login',(req,res)=>{
res.send('Login')
})

app.get('/auth/facebook',passport.authenticate('facebook'))

app.get('/auth/facebook/callback', passport.authenticate('facebook',{
    successRedirect:'/',
    failureRedirect:'/faillogin'

}))

app.get('/faillogin',(req,res)=>{
    res.send('Error al loguearse')
})

app.get('/datos',(req,res)=>{
    if (req.isAuthenticated()){
        if (!req.user.count) req.user.count  = 0;
        req.user.count++;
        res.send(`Esta auth ${req.user.displayName} ---> foto: ${req.user.photos[0].value}`)
    }else
    res.redirect('/login')
    })
app.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})

app.listen(9099,()=>{
 console.log('listening....')

})


