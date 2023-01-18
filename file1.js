console.log('hello word')

const fs =require("fs")


   fs.writeFile("exemple.txt","c'est un exemple",err=>{
         if(err){console.log(err)
        }
         else{
             console.log("you did it")
             // ------
              fs.readFile("exempla.txt",(err,file)=>{
                  if(err){
                      console.log(err)
                 }
                 else{
                     console.log(file)
                 }
             })
         } 
      })

      //const fs =require("fs")


   fs.writeFile("welcome.txt","hello node",err=>{
         if(err){console.log(err)
        }
         else{
             console.log("hello.txt")
             // ------
              //fs.readFile("exempla.txt",(err,file)=>{
                //  if(err){
                  //    console.log(err)
                 //}
                 //else{
                   //  console.log(file)
                 //}
             //})
         } 
      })