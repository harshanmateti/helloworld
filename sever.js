const http =require('http');
const fs=require('fs')
const _ =require('lodash');    //for method of lodash check https://lodash.com/

const server =  http.createServer((req,res)=>{
    
    /*const num= _.random(0,20);
    console.log(num);                 //lodash
    const fun =_.once(()=>{
        console.log("function runs only once even after calling more than once");
    })
    fun();
    fun();
    */
    console.log('req made');               //this code runs in server not browser
    console.log(req.url,req.method);
    //set header content type
    /*res.setHeader('Content-Type','text/plain');
    res.write("hello ninjas");
    res.end();*/
    res.setHeader('Content-Type','text/html');
    let path ='./view/'
    switch(req.url){
        case '/':
            path += 'view.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        case 'about-us':
            res.setHeader('Location','/about');  //redirect
            res.end();
            res.statusCode=301;
        default:
            path += '404.html';
            res.statusCode= 404;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();

    })
}).listen(5000,'localhost',()=>{
    console.log("listening to local host 5000");
})