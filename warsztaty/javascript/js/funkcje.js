// funkcja bez parametrów
function wyswietlWKonsoli(){
    console.log("Michał Szczepaniak")
}

wyswietlWKonsoli();



//funkcja z parametrami

function wyswietlWKonsoliParam(imie, nazwisko){
    console.log(imie + " " + nazwisko);
}

wyswietlWKonsoliParam("Michał", "Szczepaniak");
wyswietlWKonsoliParam("Jaś", "Kowalski");
wyswietlWKonsoliParam("Ewelina", "Małowska");



//zwracanie wartości przez funkcję
function obliczPodatek( kwota, procentPodatek ){
    var wynik = kwota * (procentPodatek / 100);
    return wynik.toFixed(2);
}

var obliczenia1 = obliczPodatek( 4990, 23 );
console.log( "Wysokość obliczonego podatku wynosi: " + obliczenia1);


var w = obliczPodatek( 1000, 10 );
var x = obliczPodatek( 2500, 30 );
var z = obliczPodatek( 25000, 23 );

console.log (w,x,z);
console.log (w,x,z);

