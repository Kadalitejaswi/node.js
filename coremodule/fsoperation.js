var fs=require('fs');
 console.log("start of the file");


// fs.writeFileSync('text.txt','Hello Fs module')
var user={
    name:"john",
    age:20
}
// fs.writeFile('data.log',JSON.stringify(user),function(error){
//     if (error) throw error;
//     console.log("writing file is completed");
    
// })
fs.appendFile('data.log',"\n"+JSON.stringify(user),function(error){
    if (error) throw error;
    console.log("appending file is completed");
    
})

// console.log(fs);
// console.log("start of the file");
// console.log("Loading a file");
// var data=fs.readFileSync('./op.js')
// fs.readFileSync(path)
// console.log(data);
// console.log(data.tostring());
// console.log("file reading completed");

// console.log("start of the file");
//  console.log("Loading a file");
//  fs.readFileSync('./op.js',function(error,data))

console.log("last statement");
