//

$(document).ready(function(){
    
            var buyArrow = $("#buy-arrow");
            var sellArrow = $("#sell-arrow");
                  
                  function pobierzKursBitcoin( url ){
                      
                      $.getJSON( url, function ( data ) {
                          
                          console.log(pobierzKursBitcoin(data))
                      
                      var currentBuyPrice = parseFloat( $("#buy").html() ); 
                      var currentSellPrice = parseFloat( $("#sell").html() ); 
                      
                              
                              $("#buy").html(data.PLN.buy);
                              $("#sell").html(data.PLN.sell);
                      
                          if (currentBuyPrice > parseFloat(data.PLN.buy ) ) {
                              buyArrow.css("color", "red").removeAttr("class").addClass("fas fa-arrow-down")
                          } else if
                              (currentBuyPrice > parseFloat(data.PLN.buy ) ) {
                               buyArrow.css("color", "green").removeAttr("class").addClass("fas fa-arrow-up");
                                  
                          } else {
                              buyArrow.css("color", "black").removeAttr("class").addClass("fas fa-minu-square");
                          }
                          
                         
                          $("#buy").html(data.PLN.buy);
                          $("#sell").html(data.PLN.sell);
                          
                          
                          if (currentSellPrice > parseFloat(data.PLN.buy ) ) {
                              buyArrow.css("color", "red").removeAttr("class").addClass("fas fa-arrow-down")
                          } else if
                              (currentBuyPrice > parseFloat(data.PLN.buy ) ) {
                                  buyArrow.css("color", "green").removeAttr("class").addClass("fas fa-arrow-up");

                              } else {
                                  buyArrow.css("color", "black").removeAttr("class").addClass("fas fa-minu-square");
                              }
                          
                              } );
                    }
    pobierzKursBitcoin('https://blockchain.info/pl/ticker');
    
    $(".control-button").on("click", function(){
        pobierzKursBitcoin('https://blockchain.info/pl/ticker');
    });

                  });