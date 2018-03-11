//typ liczbowy - można wykonać działania arytmetyczne
var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
//console.log( typeof wyplata );

//typ łąncuchowy - string ( znak plus łączy stringi, czyli działa nieco inaczej niż w prypadku typu liczbowego)

var strWyplata = "4500\n";
var strPremia = "\"850\"";
var strSuma = strWyplata + strPremia;
//console.log( typeof strSuma );
//console.log( strSuma );

// typ logiczny - przyjmuje jedną z dwóch wartosci true albo false

var czyJestWiosna = true;

if( czyJestWiosna ){
    console.log("Tak, jest już wiosna");
} else {
    console.log("Nie, jeszcze trawa zima");
}

//console.log( typeof czyJestWiosna );

// typy specjalne

var zmiennaTylkoZadeklarowana;
console.log( zmiennaTylkoZadeklarowana );

var zmiennaNull = null;
console.log( zmiennaNull );