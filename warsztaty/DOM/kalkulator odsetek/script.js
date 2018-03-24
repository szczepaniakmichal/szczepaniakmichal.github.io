
function oblicz(e){
    e.preventDefault();
    var wplata = parseInt($("#wplata").val());
    console.log(wplata);
    
    var iloscLat = parseInt($("#ilosc-lat").val());
    console.log(iloscLat);
    
    var okresKapitalizacji = parseInt($("#okres-kapitalizacji").val());
    console.log(okresKapitalizacji);
    
    var oprocentowanie = $("#oprocentowanie").val()/100;
    console.log(oprocentowanie);
    
    var podatek = $("#podatek")[0]; 
    var check = podatek.checked;
    console.log(check); 
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, check);
    
    $("#wynik").text(wynik);
}


function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek ){
    var kapital = 0;
    
    var oprocentowanieOpodatkowane = 0;
    
    //oprocentowanieOpodatkowane = podatek ? oprocentowanie * 0.81 : oprocentowanie; - pochwalcie się na rozmowie(zapis if w skrócie)
    
    if(podatek){
        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    kapital =  wplata *Math.pow((1 +(oprocentowanieOpodatkowane/okresKapitalizacji)),iloscLat * okresKapitalizacji);
    var zaokraglenie = Math.round(kapital).toFixed(2);
    return zaokraglenie;
}
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        