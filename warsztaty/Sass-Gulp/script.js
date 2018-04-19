//FUNKCJA UKRYWAJACA ELEMENT

/*$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});*/





$(document).ready(function(){
 
    function silnia(n){
        
//        if(n == 0){
//            return 1;
//        } else {
//            return n * silnia(n-1)
//        }
//       TO SAMO ZA POMOCĄ PĘTLI
        var wynik = 1;
        for(var i=1; i<n; i++){
            wynik *= i; 
        }
        return wynik;
//        var wynik = n * silnia(n-1);
//        return n;
    }
    
    console.log(silnia(5));
    
    
    
// Z1    
//    var divBlock = $("#block");
//    var paragraf = $("paragraf")
//    console.log(divBlock.html());
    });




