//IE verification
function testIE() {
    var NoIE = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
    return NoIE; 
}
  if (testIE()) {
    window.location.href = "notsupported";
}

//background metro style disco colors
var hue = 0;
function bgfx() {
    var HUEvar = hue++;
    setTimeout(bgfx, 150);
    colorfx(HUEvar);
}

bgfx();

function colorfx(HUEvar) {
    var OpacityToLight = getComputedStyle(document.querySelector('#backgrounT')).getPropertyValue('opacity');
    var Lightness = OpacityToLight*50 + "%";
    var colorchange = "hsl(" + HUEvar + ", 70%, "+ Lightness +")";
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) { 
        document.getElementById("backgrounT").style.background = "hsl(" + HUEvar + ", 70%, 50%)";;
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#ffffff");
    } else {
        document.getElementById("backgrounT").style.background = "hsl(" + HUEvar + ", 70%, 50%)";
        document.querySelector("meta[name=theme-color]").setAttribute("content", ""+ colorchange +"");
    }
}


const splashtxt = [
    "//An error happened",
    "//Everyone could have a bad day",
    "//:(",
    "//Just follow the train!",
    "//Próxima parada; ASTILLERO",
    "//I ran out of ideas",
    "//Someone is reading me?",
    "//You discovered me",
    "//'-Signed: Anónimo' Who's Anónimo?",
    "//En un lugar de la Mancha, de cuyo nombre no quiero recordarme",
    "//¯&#92_(ツ)_/¯",
    "//Available in Castellano, Valencià, English and Français",
    "//Made in EL CAMPELLO", 
    "//Everything new",
    "//sen^2 + cos^2 = 1",
    "//print('Hello, World!')",
    "//Això no hauria d'ocórrer",
    "//Hello, World!"
];
var x = Math.floor((Math.random() * 18));
document.getElementById("tiptxt").innerHTML = splashtxt[x];
