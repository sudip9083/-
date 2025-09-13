const name = "Hello";
console.log(`Hi my name is ${name}.`);
let age = null; 
process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function(data) { 
    age = Number(data.trim());
    console.log(age + 2);
    process.exit();
});

console.log(`last`);
