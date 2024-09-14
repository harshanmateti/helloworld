const express = require('express');
const morgan = require('morgan');
const mongoose =require("mongoose");
//const Blog = require("./models/blog");
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');
//express app
const app =express();
//connect to mongo DB
const dbURL ="mongodb+srv://netninja:test1234@nodetuts.hr0cn.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts";

mongoose.connect(dbURL)
    .then((result)=> app.listen(5000))
    .catch((err)=> console.log(err));

//register view engine
app.set('view engine','ejs');
 
//listen the server
//app.listen(5000);
//Midlle ware and static file
app.use(express.static('public')); //we say the file is in public folder
app.use(express.urlencoded({extended: true}));  //use to get data using post
app.use(morgan('dev'));
//mongooes  and mongo db sandbox routes
//make sure the ip adress is given in to network asscess in node-tuts 
/*app.get("/add-blog",(req,res)=>{
    const blog = new Blog({ 
        title: 'nem blog2',
        snippet:'about my new blog2',
        body: 'more  about my new blog2'
    });
    blog.save()                         //It will store the data in the database
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})

app.get("/all-blog",(req,res)=>{
    Blog.find()                      //It shows the all data store in the database 
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})

app.get("/single-blog",(req,res)=>{
    Blog.findById("66d80204c364a9bf47cc16f7")                      //It shows the data by Id(present in cluster,query) stored in the database 
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})
*/

/*
//middle ware used between req,res
app.use((req,res,next)=>{
    console.log('new request made:');
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
 
});*///after this the page reloads continous so we should move on next (express doesnt know)
//before using next
/*
app.use((req,res,next)=>{
    console.log("in the midddle ware 2");
    next();
});
*/
//view
//routes
/*
app.get('/',(req,res)=>{
    const blogs=[
        {title:'Yoshi finds eggs',snippet:'Lorem ipum dolor sit amet consectetur'},  //blog
        {title:'Maroi finds stars',snippet:'Lorem ipum dolor sit amet consectetur'},
        {title:'How to defect Browser',snippet:'Lorem ipum dolor sit amet consectetur'}];
    res.render('index',{title:"Home",blogs:blogs});
});
*/ 
 //if use block middle war2 code here i dont work bec block blogs in res but middle ware in bet req,res
/*app.use((req,res,next)=>{
    console.log("in the midddle ware 2");
    next();
});
*/
/*

app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
    res.sendFile('./views/view.html',{root:__dirname});
});
*/
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});
app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:"About"});
});

//redirect
/*app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});
*/

//blog routes
app.use(blogRoutes);   //connect to router || in this statement if 1 parameter is 'blogs we can remove the ./blog path in blogRoutes.js
//404 page
app.use((req,res)=>{
    //res.sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404',{title:"404"});
});
