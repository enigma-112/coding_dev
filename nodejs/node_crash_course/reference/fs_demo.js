const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname,"/test"),{},function(err){  // function(err){ }can also be written as err => {}
//     if(err) throw err;
//     console.log("Folder Created.. ");
// });

// Create and Write to file
// fs.writeFile(path.join(__dirname,"/test","hello.txt"),"Hello World",function(err){  // function(err){ }can also be written as err => {}
//     if(err) throw err;
//     console.log("File Written to.. ");
//     // Append to file
//     fs.appendFile(path.join(__dirname,"/test","hello.txt"),"I love Node.js",function(err){  // function(err){ }can also be written as err => {}
//     if(err) throw err;
//     console.log("File Written to.. ");
// });
// });

// Read File
// fs.readFile(path.join(__dirname,"/test","hello.txt"),"utf8",function(err,data){  // function(err){ }can also be written as err => {}
//     if(err) throw err;
//     console.log(data);
// });

// Rename File
fs.rename(path.join(__dirname,"/test","hello.txt"),path.join(__dirname,"/test","hello_new.txt"),function(err){  // function(err){ }can also be written as err => {}
    if(err) throw err;
    console.log("File renamed.....");
});
