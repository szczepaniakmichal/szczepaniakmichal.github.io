// innerHTML pobieranie
var parFirst = document.getElementById("parFirst");
//console.log( parFirst.innerHTML );
//console.log( parFirst.outerHTML );


//innerHTML - przypisanie wartości
var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartość h1 stawiona w span</span>";


//zmiana styli
mainHeader.style.color = "red";


//przypisanie klacy
mainHeader.className = "headingtext";


//pobranie klas elementu
console.log( mainHeader.className );

//classList
mainHeader.classList.add("nowa-klasa");

//classList usuwanie klasy
mainHeader.classList.remove("headingtext");

