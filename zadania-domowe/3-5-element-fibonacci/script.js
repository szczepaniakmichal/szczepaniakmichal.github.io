var fib = [];

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
fibo(15);



















