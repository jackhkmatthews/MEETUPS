// var sum = process.argv.reduce(function(accumulator, val){
//   if (typeof(val) === 'number') {
//     return accumulator + val;
//   }
// }, 0);
//
// console.log(process.argv);

///////////////////////////////////
//*********BABY STEPS************//
//////////////////////////////////
//
// var sum = process.argv.reduce(function(acc, val) {
//   console.log(val);
//   console.log(acc);
//   if (parseInt(val)) {
//     // console.log(val);
//     // console.log(acc);
//     return acc + parseInt(val);
//   }
// }, 0);
//
// console.log(sum);
//
// var sum = 0;
//
// sum = Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]);
//
// console.log(sum);
//
// var result = 0;
//
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }
//
// console.log(result);
//
// function isNumber(value){
//   return parseInt(value);
// }
//
// var filtered = process.argv.filter(isNumber);
//
// var sum = filtered.reduce(function(acc, val){
//   return acc + parseInt(val);
// }, 0);
//
// console.log(sum);

/////////////////////////////////
//********FIRST I/O************//
/////////////////////////////////
//
// var fs = require('fs');
// var contents = fs.readFileSync(process.argv[2]).toString();
// var split = contents.split('\n');
// var length = split.length - 1;
// console.log(length);

//////////////////////////////////
//******FIRST ASYNC I/O*********//
//////////////////////////////////

var fs = require('fs');
var buffer = fs.readFile(process.argv[2]);
var contents = buffer.toString();
var split = contents.split('\n');
var length = split.length - 1;
console.log(length);
