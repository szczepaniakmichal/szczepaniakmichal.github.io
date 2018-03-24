
function pobierzImie( event ) {
    event.preventDefault();
    var inputs = document.getElementsByTagName("input");
    var imie = inputs[0].value;
    var nazwisko = inputs[1].value;
    
    console.log("imie: " + imie + "\nNazwisko: " + nazwisko );
}


//function pobierzImie( event ) {
//    event.preventDefault();
//    alert("AAAAA");
//}
//


