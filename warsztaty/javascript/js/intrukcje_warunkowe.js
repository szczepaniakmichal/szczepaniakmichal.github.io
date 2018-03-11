// instrukcja if

var zmienna1 = "Kot";
var zmienna2 = "Pies";

//if ( zmienna1 != zmienna2 ){
//    console.log("Spełnia warunek");
//}


//instrukcja if else

//if( zmienna1 == zmienna2 ) {
//    console.log("Spełnia warunek");
//} else {
//    console.log("Nie spełniam warunku")
//}


//intrukcja else if
//var mojaLiczba = 65;
//
//if( mojaLiczba == 5) {
//    console.log("Moja liczba to 5");
//} else if( mojaLiczba == 12 ) {
//    console.log("Moja liczba to 12");
//} else if(mojaLiczba == 65 ) {
//    console.log("Moja liczba to 65");
//} else if(mojaLiczba == 90 ) {
//    console.log("Moja liczba to 90");
//} else {
//    console.log("Moja liczba ma inna wartoość")
//}


// instrukcja switch

var kolor = "zółty";

switch( kolor ) {
    case "czerwony" : 
        console.log( "kolor czerwony" );
    break;    
    case "zielony" :
        console.log("Kolor zielony");
    break;
    default :
        console.log("Nie znalazłem dopasowania koloru");
}