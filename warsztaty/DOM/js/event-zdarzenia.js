var paragraf = document.getElementById("par2")

////sposób 1
//function obslozZdarzenie(event){
//    //console.log("click");
//    console.log( event.type );
//}
//
//paragraf.onclick = obslozZdarzenie;  //wywołanie funkcji bez () !!
//
//
//// sposób 2
//paragraf.onclick = function(){
//    console.log("Do obsługi zdarzenia przypisania funkcja anonimowa");
//}


var counter = 0;
paragraf.addEventListener("mouseenter", function(event){  //mouseenter - wjazd na element
   counter++
    console.log( event.type );
    console.log( "Zdarzenie wywołanie " + counter + " raz");
});


//var title = document.getElementById("main-header")
//
//title.addEventListener("mouseenter", function(){
//    title.style.fontSize = "70px";
//    title.style.color = "red";
//} );
//
//title.addEventListener("mouseleave", function(){
//    title.style.fontSize = "initial";
//    title.style.color = "initial";
//})


//ustawienie funkcji
function bodyColor(event){
    console.log(event);
    document.body.style.backgroundColor = "red";
}

//podpięcie zdarzenia
var title = document.getElementById("main-header");

title.addEventListener( "click", bodyColor);


// usunięcie zdarzenia
//title.removeEventListener( "click", bodyColor);


////blokowanie domyślnego działania elementów
//document.querySelector('.link1').addEventListener('click', function(event){
//    event.preventDefault();
//    console.log("Kliknąłem link klasy .link1")
//});

//stopPropagation

var 













