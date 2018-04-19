$(document).ready(function(){
    $("#btn").click(function(){
        $("#square").fadeIn(3000).animate({
            left: '100px', 
            width: '100px',
            height: '100px'
        },
            3000);
        $("#square").animate({
            backgroundColor: "blue",
        },
            5000);
        $("h2").delay(11000).animate({
            opacity: '1'
        },
            5000);
    });
});














//-------------------------------------------------1
/*$( function() {
    var state = true;
    $( "#btn" ).on( "click", function() {
        if ( state ) {
            $( "#square" ).animate({
                backgroundColor: "#aa0000",
                color: "#fff",
                width: 500
            }, 1000 );
        } else {
            $( "#square" ).animate({
                backgroundColor: "#fff",
                color: "#000",
                width: 240
            }, 1000 );
        }
        state = !state;
    });
} );*/




