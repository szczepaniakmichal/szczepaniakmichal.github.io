//operatory arytmetyczne
var liczba1 = 10;
var liczba2 = 5;


// dodawanie
var wynik = liczba1 + liczba2;

//odejmowanie
wynik = liczba1 - liczba2; // nie ma var,bo już wcześniej została zadeklarowana

//mnożenie
wynik = liczba1 * liczba2;

// dzielenie
wynik = liczba1 % liczba2;

// inkrementacja
liczba2 = liczba2 + 1 // liczba2++
liczba2 = liczba2 - 1 // liczba2--

liczba2++;



//console.log( liczba2 );


//operatory przypisania

var liczba3 = 200;
var liczba4 = 100;
var liczba5 = 15;
var liczba6 = 40;
var liczba7 = 7;

liczba3 += 200; // liczba3 = liczba3 + 200;
liczba4 -= 50; // liczba4 = liczba4 - 50;
liczba5 *= 2; // liczba5 = liczba5 * 2;
liczba6 /= 2; // liczba6 = liczba6 / 2;
liczba7 %= 2; // liczba7 = liczba7 % 2;

//console.log (liczba7);

// operatory porównania

//var liczba8 = 42;
//var liczba9 = 10;
//
//if( liczba8 = liczba9 ){
//    console.log( "Warunek spełniony, czyli true");
//} else {
//    console.log( "Warunek nie spełniony, czyli false");
//}


var liczba10 = 20;
var liczba11 = 4;
var czyWiosna = "tak";

if( liczba10 < liczba11 && czyWiosna == "tak") {
    console.log( "Warunek spełniony" );
} else {
    console.log( "Warunek nie spełniony");
}

