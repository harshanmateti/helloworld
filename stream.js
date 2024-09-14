const fs=require('fs');
const readstream=fs.createReadStream('./doc/blog1.txt');
const writeStream=fs.createWriteStream('./doc/blog2.txt');
readstream.on('data',(chunk)=>{     //event
    console.log('---New Chuck---');
    console.log(chunk.toString());
    writeStream.write('/n NEW CHUCK ');
    writeStream.write(chunk)
});
//piping ! instead of lines 5-8
readstream.pipe(writeStream);