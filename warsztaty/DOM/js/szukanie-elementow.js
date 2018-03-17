//pobranie leementu po id - tylko jeden element
//parament w getElementById bez #
var parFirst = document.getElementById("parFirst"); 
//console.log( parFirst );

//pobranie elementu po klasie - kolekcja elementów
//parament w getElementById bez .
var elementLink = document.getElementsByClassName('link'); 
//console.log( elementLink );

//pobranie elementu z tagu
var elementTag = document.getElementsByTagName("p")
//console.log( elementTag );

//pobranie wszystkich elementów po selektorze .superlink - tutaj niezbędne jest podanie selektora klasy, jesli pobieramy klasy lub id 
var elementSuperlink = document.querySelectorAll(".superlink");
//console.log( elementSuperlink );

//pobranie pojedyczego elementu po selektorze id
var parSecond = document.querySelector('#parSecond');
//console.log( parSecond );

//var mojeLinki = document.getElementsByClassName('link');
//console.log( mojeLinki[1] );

/*for(var i=0; i<mojeLinki.length; i++){    //pętla przelatująca po elementach
    console.log("To mój link nr: " + (i +1) );
    console.log( mojeLinki[i] );
    console.log("---------------------------------");
}*/

//pętla forEach działa na kolekcji pobranej za pomocą metody document.querySelectorAll()
var mojeLinki = document.querySelectorAll('.link');
mojeLinki.forEach(function(element,index){
                  console.log( element );
                  });








