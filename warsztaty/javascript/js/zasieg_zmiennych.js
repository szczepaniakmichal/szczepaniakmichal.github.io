/* var zmiennaGlobalna = "Tak! Jestem zmienna globalną i jestem widoczna w funkcjach";

function wyswietlZmienna(){
    console.log(zmiennaGlobalna);
}
*/

var zmienna = "Zmienna globalna";

function pakazZmienna(){
    zmienna = "Zmienna lokalna";
//    console.log( zmienna );
}

pakazZmienna();

console.log ( zmienna );


