const fs = require('fs');

//Read the Files
/*
fs.readFile('./doc/blog.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
//write the files
fs.writeFile('./doc/blog.txt','hello world',()=>{
    console.log("File was written");
});                                                 //it create file if not exist

//directories

fs.mkdir('./assets',(err)=>{       //fs.existSync('') check if it exist or not
    if(err){                       //rmdir remove
        console.log(err);       //gives err which dict is already present
    }
    console.log('folder created');
})

//deleting files
if(fs.existsSync('./doc/delet.txt')){
    fs.unlink('./doc/delet.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file deleted");
})
}
*/
