class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {

        if (this.przeczytana === true) {
            return "Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została przeczytana ";
        } else {
            return "Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i nie została przeczytana ";
        }
    }
}

var wiedzmin = new Ksiazka('Wiedzmin', 'Andrzej Sapkowski', false);
var bot = new Ksiazka('Bot', 'Max Kidruk', false);
var wPustyniIpuszczy = new Ksiazka('W pustyni i puszczy', 'Henryk Sienkiewicz', true);

var regal = [];

regal.push(wiedzmin, bot, wPustyniIpuszczy);

function ilePrzeczytano(zRegalu) {

    var lacznie = 0;

    for (i = 0; i < regal.length; i++) {

        if (regal[i].przeczytana === true) {
            lacznie++;
        }
        console.log(regal[i].opiszKsiazke());
    }
    return lacznie;
}

console.log('Ilość przeczytanych ksiażek: ' + ilePrzeczytano(regal) + '.');
