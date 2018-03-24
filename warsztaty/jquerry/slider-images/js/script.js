//
//$(function next-slide(){
//    var slideShow = $(".slide-show");
//    var slideCount = $(".single-slide").length;
//    var slideWidth = 100/slideCount.length;
//    var slideIndex = 0;
//});
//
//$(".slide-show").css({width : "400vw"} );
//
////Za pomocą metody .find() znajdź w kontenerze slideShow wszystkie slajdy z klasą .single-slide. Następnie każdemu z tych elementów nadaj szerokość równą szerokości jednego slajdu w prodentach (zmienna slideWidth + ”%”) oraz ustaw lewy margines równy szerokości slajdu w procentach razy index obecnie iterowanego elementu - dla 4 slidów to 100%/5 czyli 25% (do iteracji po elementach wykorzystaj metodę .each() - https://api.jquery.com/each/ ) 
//
//$(".slide-show").find(".single-slide").css({slideWidth + "%", "margin-left":"100vw"});
//
//$( ".slide-show" ).each(function( index ) {
//  ( index + ": " + $( this ).text() );
//});
//
//
//
////Dla nawigacji (elementy z klasami .prev-slide i .next-slide) przypisz obsługę zdarzenia click. Sprawdź, czy obsługa zdarzenia click działa na tej nawigacji. Następnie wewnątrz funkcji obsługującej zdarzenie click wywołaj funkcję slide() (jej definicja jest w kolejnym punkcie), która przyjmuje parametr slideIndex – 1 jeśli przewijamy w lewo i slideIndex + 1 jeśli przewijamy w prawo.
//
//
//function clik(){
//    console.log(kliknięto);
//    function slide(slideIndex);
//}
//
//
//function slide(newSlideIndex){
//    if (index > )
//}




// Kod Piotrka
//defincja zmiennych
    $(function(){
        var slideShow = $(".slide-show");
        var slideCount = $(".single-slide").length;
        var slideWidth = 100/slideCount;
        var slideIndex = 0;

//szerokość "kiszy"
        slideShow.css('width', slideCount*100 + '%');

        slideShow.find('.single-slide').each(function(index){
        $(this).css({'width':slideWidth + '%', 'margin-left': index * slideWidth +'%'});
        });
//przyciski ze strałakmi + podpięcie onclik
        $('.prev-slide').click(function(){
            slide(slideIndex - 1);
        })

        $('.next-slide').click(function(){
            slide(slideIndex + 1);
        })

// funkcja odpowiada za przsunięcie "kliszy"
        function slide(newSlideIndex){
            if(newSlideIndex < 0 || newSlideIndex > slideCount - 1)
            return;
        
            var slideCaption = slideShow.find('.slide-caption').eq(newSlideIndex);
        
            var newMarginLeft = (newSlideIndex * (-100)) + "%";
        
            slideCaption.hide();
        
            slideShow.animate({'margin-left': newMarginLeft}, 800, function(){
                slideIndex = newSlideIndex;
                slideCaption.fadeIn();
        })
    }
    
});










