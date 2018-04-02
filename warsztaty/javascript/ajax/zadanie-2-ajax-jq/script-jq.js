// MOJE PRÓBY-----------------------------------------------
//$.ajax({
//        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//        wrzucDaneHtml
//        dataType: "json",
//        success: function(resultJSON){
//            console.log(resultJSON);
//        },
//        
//        onerror:function(msg){
//            console.log(msg);
//        }
//});
//
//function wrzucDaneHtml(dane){
//    var pUserId = $("btn").append("p");
//    var pUserName = $("btn").append("p");
//    var pUserUrl = $("btn").append("p");
//    var pUserIdContent = $("btn").append("userId: " + dane.pUserId);
//    var pUserNameContent = $("btn").append("UserName: " + dane.pUserName);
//    var pUserUrlContent = $("btn").append("UserUrl: " + dane.pUserUrl);
//    
//    $( "pUserId" ).append( $( "pUserIdContent" ) );
//    $( "pUserName" ).append( $( "pUserNameContent" ) );
//    $( "pUserUrl" ).append( $( "pUserUrlContent" ) );
//}
//
//// definicja funkcji ajax
//function ajax(method, url, callback){
//        var httpRequest = new XMLHttpRequest();
//        
//        httpRequest.open(method, url);
//        
//        httpRequest.onreadystatechange = function(){
//            if(httpRequest.readyState == 4){
//                if(httpRequest.status == 200){
//                    var returnData = httpRequest.responseText;
//                    
//                    callback(JSON.parse(returnData));
//                    
//                    httpRequest = null;
//                }
//            }
//        }
//        httpRequest.send();
//}
//

//$("btn").on("click", function(){
//    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
//    function a1 (data){(console.log(data));}})



// KOD PIOTRKA---------------------------------------------

function pobierzDane(event){
    event.preventDefault()
    
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        wrzucDaneDoHtml)}
    function wrzucDaneDoHtml(dane)
              {
                $('body').append("<p>userId: " + dane.userId + "</p>");
                $('body').append("<p>userName: " + dane.userId + "</p>");
                $('body').append("<p>userUrl: " + dane.userURL + "</p>");
                $('body').append("<p>---------------------------------</p>");
              }



