window.addEventListener("DOMContentLoaded", start);



var wynikA;

function start() {

    var sliderImage = document.getElementById("sliderImage");
    var pojemnik=document.getElementById("Newsy");
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            wynikA = JSON.parse(ajax.responseText);

            utworzNewsy(wynikA);
        }
    }
    ajax.open("POST", "http://www.czasnasolidarnosc.pl/js/bazaNewsow.txt", true); // true for asynchronous 
    ajax.send(null);
    

    
    function utworzNewsy(bazaNewsow) {
        sliderTab = [];
        console.log("tu weszlo");
        var nowy;
        var nowySlajd;
        var j=0;
        pojemnik.empty();
        for (let i = 0; i < bazaNewsow.tab.length; i++) {

            console.log("tu weszlo tez");
            nowy = document.createElement("div");
            nowy.classList.add("znajomy");
            nowy.innerHTML = "<img class='img' src='" + bazaNewsow.tab[i].AdresDlaMiniaturki + "' alt='' />" +
                           "<span class='imienazwisko'>" + bazaNewsow.tab[i].Nazwa + "</span><br />" +
                           "<p class='zajawka'>" + bazaNewsow.tab[i].Opis + "</p>" +
                           "<span class='temat'><a href='" + bazaNewsow.tab[i].AdresStrony + "'>Czytaj!</a></span><br />";
            pojemnik.appendChild(nowy);
            if(bazaNewsow.tab.length>=5){

                if (bazaNewsow.tab[i] >= bazaNewsow.tab.length - 4) {
                    sliderTab[j] = bazaNewsow.tab.AdresDlaSlidera;
                    j = j + 1;
                }
            } else {
                sliderTab[i] = { zdjecie: bazaNewsow.tab[i].AdresDlaSlidera, adres: bazaNewsow.tab[i].AdresStrony };

            }

        }

        for (let i = 0; i < sliderTab.length; i++) {
            nowySlajd = document.createElement("div");
            nowySlajd.innerHTML= "<a href='"+sliderTab[i].adres+"'> <img data-u='image' src='"+sliderTab[i].zdjecie+"' /></a>";
            sliderImage.empty();
            sliderImage.appendChild(nowySlajd);



        }

    }
   

}
//Czyszczenie elemntow DOM z ich dzieci:D
Node.prototype.empty = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
}
function dateString2Date(dateString) {
    var dt = dateString.split(/\-|\s/);
    return new Date(dt.slice(0, 3).reverse().join('-') + ' ' + dt[3]);
}