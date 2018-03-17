//pobieram itniejący wezeł o id output
var istniejacyWezel = document.getElementById("output");

//sprawdzam czy udało się go pobrać
//console.log( istniejacyWezel );

//tworze nowy element html
var newElement = document.createElement("p");


// tworzę treśc do paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę treść pararafu, o!");


//wstawiam nowo utworzony text do nowo utworzonego paragrafu
newElement.appendChild(newElementContent);


//dodaje do paragrafu atrybut class='textpar'
newElement.setAttribute('class', 'textpar');

//console.log(newElement);


//wstawiam nasz element do paragrafu div#ouptput
istniejacyWezel.appendChild( newElement );


//usuwanie elementów z dokumentu
istniejacyWezel.parentElement.removeChild( istniejacyWezel );

// LUB drugie rozwiązanie:

//document.getElementById("parFirst").removeChild( istniejacyWezel );


//insertBefore
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore( br, link );


//usuwanie atrybutu
link.removeAttribute('class')