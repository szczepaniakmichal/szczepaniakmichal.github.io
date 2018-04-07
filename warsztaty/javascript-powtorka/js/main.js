function sumaWyplat(selektor)
{
    var elementy = document.querySelectorAll(selektor);
    var iloscElementow = elementy.length;
    var suma = 0;
    
    for(var i=0; i<iloscElementow; i++)
        {
            var val = elementy[i].innerHTML;
            suma += parseInt(val);
        }
    console.log(suma);
    return suma;
}

/*function wyswietlWynik(wynikDoWyswietlenia)
{
    var div = document.createElement('div');
    var txt = document.createTextNode(wynikDoWyswietlenia + ' zł');
    div.appendChild(txt);
    
    document.body.appendChild(div);
}

var wynikObliczenia = sumaWyplat('p');

wyswietlWynik(wynikObliczenia);*/


// Mess w jQuerry,ale to jeszcze nie działa. Kod powyzej OK.
function wyswietlWynik(wynikDoWyswietlenia)
{
    var div = $("body").append( "div" );
    var txt = $(document.createTextNode(wynikDoWyswietlenia + ' zł'));
    $("div").appendChild(txt);
    
    $( "body" ).append( "div" );
}

var wynikObliczenia = sumaWyplat('p');

wyswietlWynik(wynikObliczenia);














