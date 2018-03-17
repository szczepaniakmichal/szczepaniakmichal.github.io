/*var entyElement = "";

function fibo(){

var n = 100;
var fib=1;
var fib=1;

for(var i=2; i<n; i++){
    fib[i] = fib[i-1] + fib[i-2];
}
    console.log(fibo);
}
console.log(fibo);*/


var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}
