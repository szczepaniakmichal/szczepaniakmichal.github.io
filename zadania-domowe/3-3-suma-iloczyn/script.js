

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



//poprawka blednogenna praktyka
/*var liczby = [1,3,6,87,456]; 
  var liczby2 = [456,9,9,54,98];     


function pokazTablice ( arr ) {
    console.log( liczby );
}

pokazTablice( [liczby2] );
pokazTablice( ['a', 'b', 'c'] );*/
