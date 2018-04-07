//------------------Kod Mess----------------

/*var fib = [];

function fibo(n){
    var i;

    fib[0] = 0;
    fib[1] = 1;

    for(var i=2; i<=n; i++)
{
    fib[i] = fib[i-2] + fib[i-1];   
}
    console.log(fib[n]);
    return;
}
fibo(11);*/


//----------------------Kod Adama-----------------

function fibonacci(n)
{
    if(n == 1){
        return 0;
    }
    if(n == 2 ){
        return 1;
    }
    
    var fibPrev = 0;
    var fibNext = 1;
    var fibCurrent = 0;
   
    for (var i = 1; i < n; i++){
        fibCurrent = fibPrev + fibNext;
        fibPrev = fibNext;
        fibNext = fibCurrent;
    }
    return fibCurrent;
}

console.log(fibonacci(8));