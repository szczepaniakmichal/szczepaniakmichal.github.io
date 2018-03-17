var parFirst = document.getElementById("parFirst");
var parFirstNodes = parFirst.childNodes;


for( var i=0; i<parFirstNodes.length; i++){
    if( parFirstNodes[i].nodeType == 1 ){
    console.log( parFirstNodes[i] );
}
}


/*var parFirstNodes = parFirst.children; - wystarczy taki zapis i można zastąpić to co wyżej. Wygodnie macie ;)*/