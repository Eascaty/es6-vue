const fs = require('fs');


// fs.readFile('es6/resources/为学.md',(err,data)=>{

//     if(err) throw err;
//     console.log(data.toString());
// });



fs.readFile("es6/resources/为学.md",(err,data1)=>{

 
            fs.readFile("es6/resources/插秧诗.md",(err,data2)=>{
              
                
                    fs.readFile("es6/resources/观书有感.md",(err,data3)=>{
                   let result = data1+ '\r\n' +data2+'\r\n' +data3 ;
                console.log(result);                          });
                        
            });      
            });


// 使用promise实现
const p = new Promise((resolve,reject)=>{
fs.readFile('es6/resources/为学.md',(err,data)=>{
            resolve(data);
    });
});

p.then(value => {
   return new Promise((resolve,reject) =>{
       fs.readFile("es6/resources/插秧诗.md",(err,data) =>{
                    resolve([value,data]);
       });
   }).then(value => {
    return new Promise((resolve,reject) =>{
    fs.readFile("es6/resources/观书有感.md",(err,data) =>{
       value.push(data);
        resolve(value);
});
   })
}).then(value => {
    console.log(value.join('\r\n'));
})
});





