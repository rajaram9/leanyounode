// my code
var argvs = process.argv;
var sum = Number(argvs[2]) + Number(argvs[3]) + Number(argvs[4]);
console.log(sum);

// Answer
var result = 0;
for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}
console.log(result);
