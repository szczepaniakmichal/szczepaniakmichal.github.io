

function getVal(x){
    document.getElementById('display').value += x;
}

function calculate(){
    var display = document.getElementById('display').value;
    document.getElementById('display').value = eval(display);

function cle() {
    document.getElementById('display').value = "";
}


/*//--------------------------SCRIPT MONIKA

function pobierz (x) {
    document.getElementById("ekran").value += x ;

}

function oblicz () {
    var ekran = document.getElementById("ekran").value;
    document.getElementById("ekran").value = eval(ekran);
}

function czysc() {
    document.getElementById("ekran").value = "";
}*/