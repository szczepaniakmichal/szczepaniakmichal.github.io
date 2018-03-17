var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Sandra'];

//console.log( imiona );
//console.log( imiona[0], imiona[3] );

imiona[6] = 'Mikołaj'; //dadawanie reczne - zadko uzywane
imiona[7] = 'Kinga'; 

imiona.push("Kamil", "Krzysztof", "Anna"); //lepszy sposób na dodanie elementu
imiona.push("Marcin"); //lepszy sposób na dodanie elementu

//usuwanie ostatniego elementu z tablicy
imiona.pop();
imiona.pop();

//dodawanie pierwszego elementu do tablicy
imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

//usuwanie pierwszego elementu z tablicy
imiona.shift();

//console.log( imiona );

//sprawdzenie iloscie elementów(dlugosc tablicy) tablicy
var iloscElementowTablicy = imiona.length;
//console.log( iloscElementowTablicy );
//console.log( imiona );


// rozbijanie tablicy na ciag tekstowy
var elementyTablicyString = imiona.join(", ");
//console.log( elementyTablicyString);


// "odwrócenie tablicy"
//imiona.reverse();
//console.log( imiona );


// sortowanie tablicy
//imiona.sort();
//console.log( imiona );


//sprawdzenie czy wartosc w tablicy instnieje
//console.log( imiona.indexOf( "Sandra") );
//console.log( imiona.indexOf( "Czesław") ); //nie ma elementu w tablicy w consoli wyświetli -1(bo 0 jest zajete!!!)


// usuwanie poszczegolnych elementów
console.log( imiona );

imiona.splice(1,1);
console.log( imiona );