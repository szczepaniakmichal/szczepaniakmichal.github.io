// metoda find wyszukuje potomków selektora. W poniższym //przykładzie poszuka paragrafów znajdujących się w div.
//motoda find może wyszukać po tagu, klasie, id, atrybucie
$("div").find("p").css({fontSize:"60px", color:"deeppink"});


// metoda each
$("p").each( function(index, element ){
    console.log( index, element );
    $(this).addClass("new_class").css
    ({fontSize: "40px", backgroundColor: "yellow"});
});
