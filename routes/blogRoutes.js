const express= require('express');
const Blog =require("../models/blog");
const router= express.Router();
router.get('/blogs',(req,res)=>{                  //req taken by create.ejs
    Blog.find().sort({createdAt:-1})             //by this content shows from back
        .then((result)=>{
            res.render('index',{title:"All Blogs",blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        })
});

router.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
});
router.get('/blogs/create',(req,res)=>{
    res.render('create',{title:"Create a new blog"});
});
router.get('/blogs/:id',(req,res)=>{
    const id =req.params.id;
    Blog.findById(id)
         .then((result)=>{
            res.render('details',{blog:result,title: 'Blog details'})
         })
         .catch((err)=>{
            console.log(err);
         })
});

router.delete('/blogs/:id',(req,res)=>{
    const id =req.params.id;
    Blog.findByIdAndDelete(id)
         .then((result)=>{
            res.json({redirect:'/blogs'});
            })
         .catch((err)=>{
             console.log(err);
        })
});
router.get('/blogs/create',(req,res)=>{
    res.render('create',{title:"Create a new blog"});
});
module.exports= router;
