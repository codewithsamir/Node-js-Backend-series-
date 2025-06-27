const fs = require("fs")


// fs.writeFile("new.txt","hello backend",(err)=>{
//     if(err) console.log(err)
//         else{
//     console.log("succesfully create")
//     }
// })
// fs.rename("new.txt","backend.txt",(err)=>{
//     if(err) console.log(err)
//         else{
//     console.log("succesfully rename")
//     }
// })

// fs.copyFile("backend.txt","./hello/backend.txt",(err)=>{
//     if(err) console.log(err)
//         else{
//     console.log("succesfully copy")
//     }
// })




// fs.appendFile("new.txt","welcome to start ", (err)=>{
//     if(err) console.log(err)
//         else{
//     console.log("succesfully update")
//     }
// })


// fs.readFile("new.txt",'utf-8',(err,data)=>{
//     if(err) console.error(err.message)
//         else{
//     console.log("your data is " , data)
//     }
// })



// fs.unlink("new.txt",(err)=>{
//     if(err) console.log(err)
//         else{
//     console.log("succesfully delete")
//     }
// })



fs.mkdir("backendseries",(err)=>{
    if(err) console.log(err)
        else{
    console.log("succesfully folder created")
    }
})
