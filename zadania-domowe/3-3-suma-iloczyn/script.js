

// Działający kod !!!!!!!!!!!!!!!!!!!!!
/*var liczby = [1,2,3,4,5,6,];

//sumujemy tablicę
var suma = 0;
for (var i=0; i<liczby.length; i++) {
    suma += liczby[i];
}
console.log(suma);*/

var liczby = [1,2,3,4,5,6];

//funkcja licząca sume i iloczyn
function policz(liczby){
var suma = 0;
var iloczyn = 1;
for (var i=0; i<liczby.length; i++) {
    suma += liczby[i];
    iloczyn *= liczby[i];
}
    console.log(suma);
    console.log(iloczyn); 
}
policz(liczby);