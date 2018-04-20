$("#btn").click(function(){

    $.ajax({ 
        type: 'GET', 
        url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', 
        data: { get_param: 'value' }, 
        dataType: 'json',
        success: function(wynik){

            $.each(wynik, function(index, wartosc){

                $('div').append(index + ': ' + wartosc + '\n');
            });
        }
    });
});