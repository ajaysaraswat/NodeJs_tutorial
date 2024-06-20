const fs=require("fs");
const os=require("os");
console.log(os.cpus().length) //to know the how many core are present in cpu
//sync call-blocking request

// fs.writeFileSync("./test.txt","hello duniya");
//async call-Non -Blocking request
//fs.writeFile("./test.txt","hello worls by asyncronus call",(err)=>{});

// const result =fs.readFileSync("./contact.txt","utf-8")
// console.log(result);

// fs.readFile("contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.cpSync("contact.txt","copy.txt");
// fs.appendFileSync("./contact.txt",`ankit : 6397142247\n`);
// console.log(fs.statSync("contact.txt").isDirectory());

