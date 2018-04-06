var grupaLiczb = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sortBabelkowe(tablica){

    for(var i = 0; i < tablica.length; i++){
        
        for(f = 0; f < tablica.length - 1; f++){
            
            if(tablica[f] > tablica[f + 1]){
                
                wzor = tablica[f];
                tablica[f] = tablica[f+1];
                tablica[f+1] = wzor;
                zmiana = true;
            }
        }
}
    return tablica;
}

console.log(sortBabelkowe(grupaLiczb));