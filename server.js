// // // 
// // const http = require("http");
// // const calculate = require("./calculator");

// // const server = http.createServer((req, res) => {
// //   res.writeHead(200, { "Content-Type": "text/html" });
  
// //   const sum = calculate.add(1, 2);
// //   const diff = calculate.sub(3, 2);
// //   const prod = calculate.mul(5, 2);
// //   const div = calculate.div(4, 2);
  
// //   res.end(`
// //     <h1>Sum: ${sum}</h1>
// //     <h1>Difference: ${diff}</h1>
// //     <h1>Product: ${prod}</h1>
// //     <h1>Division: ${div}</h1>
// //   `);
// // });

// // server.listen(3000, () => {
// //   console.log("Server running at http://127.0.0.1:3000/");
// // });

// const fs = require('fs');

// // fs.readFile('sample.txt',"utf8",(err,data)=>{
// //     if(err){
// //         console.error(err)
// //         return
// //     }
// //     console.log(data)
// // })

// // fs.writeFile("sample1.txt","Hello World!",(err)=>{
// //     if(err){
// //         console.error(err);
// //     }
// // });

// const newObj = {
//     "name" : "Suji",
//     "age" : 19 ,
//     "city" : "thudiyalur",
//     "amount" : 3000
// }

// fs.readFile('sample.json' , 'utf8' , (err,data) => {
//     if(err){
//         console.error(err)
//         return 
//     }
//     const json = JSON.parse(data)  

//     // const deletedList= json.filter(data=>data.name!='Viji');
//     const updatedList=json.map(data=>data.name=='Vysh'?updateddata:'Sanjay');
//     // //const newList=[...json,newObj]
//     // if(Array.isArray(json)){
//     //     json.push(newObj);
//     // }
//     // else{
//     //     console.log("Json is not in the Array format");
//     // }
//     // console.log(json)






// fs.writeFile('sample.json',JSON.stringify(deletedList),(err)=>{
//     if(err){
//         console.error(err)
//         return 
//     } 
//     console.log("Deleted");

// });
// });


