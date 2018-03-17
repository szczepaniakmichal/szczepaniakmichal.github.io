var liczby = [0,1,2,3,4,5];

//funkcja licząca sume kwadratów
function policz(liczby){
var suma = 0;
for (var i=0; i<liczby.length; i++) {
    suma += Math.pow([i],2); 
}
     console.log(suma);
     return suma;
}
policz(liczby);
