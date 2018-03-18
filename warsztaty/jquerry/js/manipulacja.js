$(function(){
    
    // pobieranie tekstu
    var textParagrafuId = $("#paragraf").text();
    console.log(textParagrafuId);
    
    // wstawienie tekstu
    $("#paragraf").text("Nowy text ustawiony metodą text");
    
    //dodawanie HTML
    $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>")
    
    //dodawanie treści na końcu selektora
    $(".paragrafnext").append(" Nowa tereścna końcu selektora")
    
    //dodawanie treści za selektorem
    $(".paragrafnext").after("<h6>nowy element za selektorem</h6>")
    
    //usuwanie elementu wraz z zawartością
    $(".paragrafnext").remove();
    
    //usuwanie tylko zawartości elementu
    $("div").empty();
    
    //dodawanie pojedynczego stylu css
    //$("div").css("background-color", "red");
    
    //dodawanie wielu styli css
    $("div").css({
        width: "600px",
        height: "120px",
        backgroundColor: "lime"
    })
    
    //dodawanie klasy do elementu
    $("h1").addClass("nowa_klasa");
    
    //dodawanie atrybutów do elementu
    $("h1").attr("title", "Główny tytuł ustawiony za pomocą jQurry");
    
});