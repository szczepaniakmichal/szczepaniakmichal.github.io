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


/*
var perPage = 50;

function paginate(items, page) {
  var start = perPage * page;
  return items.slice(start, start + perPage);
}

function renderItems(pageItems) {
  pageItems.forEach(function (item, index, arr) {
    var message = 'BitSkins Price: $' + item.bprice + '';
    if (item.price != null) {
      if (item.bprice == '') {
        message = 'Item never sold on BitSkins!';
      }
      if (item.name != 'Operation Phoenix Case Key' && item.name != 'CS:GO Case Key' && item.name != 'Winter Offensive Case Key' && item.name != 'Revolver Case Key' && item.name != 'Operation Vanguard Case Key' && item.name != 'Operation Wildfire Case Key' && item.name != 'Shadow Case Key' && item.name != 'Operation Breakout Case Key' && item.name != 'Chroma Case Key' && item.name != 'Huntsman Case Key' && item.name != 'Falchion Case Key' && item.name != 'Chroma 2 Case Key') {
        $("#inventory").append("<li class='col 2' style='padding:8px;font-weight:bold;font-size:16px'><div class='card item-card waves-effect waves-light' style='margin:0%;min-height:295px;width:245.438px;border-radius: 15px;' id='" + item.id + "'><div class='iteam' style='text-decoration: underline;text-align: left'>" + item.name + "</div><div class='condition' style='text-align: left;text-size:13px'>" + item.condition + "</div><div class='center-align' style='padding:6%'><img title=\"" + item.originalname + "\" draggable='false' src='https://steamcommunity-a.akamaihd.net/economy/image/" + item.iconurl + "/200fx200'><div class 'floatvalue'>Float: 0.11503319442272186<div class='bitskinscomp' style='font-weight: normal;font-size:12px'>" + message + "</div><div class='buyer-price center-align'>$" + numberWithCommas(item.price) + "</li></div></div>");
      }
    }
  });
}

$(document).ready(function() {
  var win = $(window);
  var page = 0;
  renderItems(paginate(items, page));

  // Each time the user scrolls
  win.scroll(function() {
    // End of the document reached?
    if ($(document).height() - win.height() == win.scrollTop()) {
      page++;
      renderItems(paginate(items, page));
    }
  });
});



*/

var personList = {
  "dogs": [
  {
    "id": 0,
    "name": "maja",
    "race": "pies"
  }, {
    "id": 1,
    "name": "milus",
    "race": "pies"
  }, {
    "id": 2,
    "name": "puszek",
    "race": "kot"
  }, {
    "id": 3,
    "name": "greebo",
    "race": "kot"
  },{
    "id": 0,
    "name": "maja",
    "race": "pies"
  }, {
    "id": 1,
    "name": "milus",
    "race": "pies"
  }, {
    "id": 2,
    "name": "puszek",
    "race": "kot"
  }, {
    "id": 3,
    "name": "greebo",
    "race": "kot"
  },{
    "id": 0,
    "name": "maja",
    "race": "pies"
  }, {
    "id": 1,
    "name": "milus",
    "race": "pies"
  }, {
    "id": 2,
    "name": "puszek",
    "race": "kot"
  }, {
    "id": 3,
    "name": "greebo",
    "race": "kot"
  }
  ]
}

function przewijanie()


