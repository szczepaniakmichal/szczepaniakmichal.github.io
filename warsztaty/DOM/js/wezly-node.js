var parFirst = document.getElementById('parFirst');


//pobieram rodzica dla elementu #parFirst za pomocą włąściwości parentElement
//console.log( parFirst.parentElement );


//console.log pobiera wszystkie węzły w tym także białe znaki między elementami jako "text" oraz komentarze
//console.log( parFirst.childNodes[0] );


//children pobiera tylko te węzły które są elementami html
//console.log( parFirst.children );


//pobieram pierwsze dziecko elementu #parFirst
//var pierwszeDziecko = parFirst.children[0];

// zwraca następny węzeł jaki jest,czyli np. "text"(chodzi o białe znaki)
//console.log(pierwszeDziecko.nextSibling); 

// zwraca następny element html w relacji rodzeństwa
//console.log(pierwszeDziecko.nextElementSibling); 

//zasada jak wyżej
//var ostatnieDziecko = parFirst.lastChild;   --------------- Coś nie śmiga---------------------------------------------------
var ostatnieDziecko = parFirst.lastElementChild;
console.log(ostatnieDziecko);



