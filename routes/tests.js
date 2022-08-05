const express = require("express");
const router = express.Router();

const Tests = require("../schemas/test.js");

router.get('/', (req, res) => {
        

  let objectLiteral = {
    key: 'Value',
    helloWorld: function () {
        return "Hello world";
        
    }
    
};
// console.log(objectLiteral);
// console.log(objectLiteral.helloWorld());

let languageSubject = [
    {name: "Jayce" ,kda:"1"},
    {name: "Ashe",kda:"2"},
    {name: "Zed",kda:"3"},
    {name: "Queen",kda:"1"},

];
//arr.find(callback(element, index, array), thisArg)
//
 let returnValue = languageSubject.find((data,index)=>{
  // console.log(`${index}`);  
  return data.name === "Zed"
 }); 
//  console.log(returnValue);
 
// arr.map(callback(currentValue, index, array), thisArg)
var arr = [1, 2, 3, 4];

var newArr = arr.map(function(data) {
  
  return data * 2;
})

console.log(newArr);//(4) [2,4,6,8]





    res.send("welcome hell")
  });


module.exports = router;