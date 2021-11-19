document.querySelector("meta[name=theme-color]").setAttribute("content", "#FBFBFB");

var jsWarningGeoTitle = "Desafortunadamente, se ha producido un error.";

var jsWarningAccurateTitle = "Fallos de precisión";
var jsWarningAccurateBody = "Su ubicación puede no ser percisa en lo absoluto."; 

var altSvgUbi = "Ilustración representativa";
var urlIlleta_langbased = "illeta/index.html";
var urlAstillero_langbased = "astillero/index.html";
var urlSenda_langbased = "senda/index.html";
var urlCarrerMar_langbased = "carrer_mar/index.html";
var urlGallo_langbased = "gallo/index.html";
var urlTren_langbased = "trenet/index.html";
var urlIglesia_langbased = "iglesia/index.html";

//Important! Be aware of translating accesibility texts, it must be descriptive.
var accesibilityGPS = "Mostrar mi localización en el mapa";
var accesibilityZoomIn = "Ampliar mapa";
var accesibilityZoomOut = "Desampliar mapa";
var accesibilityContribuition = "Mapa hecho con la tecnología de Leaflet";

var accesibilityIlleta = "Racó de la Illeta, ubicación 1 de 6";
var accesibilityAstillero = "Astillero, ubicación 2 de 7";
var accesibilitySenda = "Senda, ubicación 3 de 7";
var accesibilityCarrerMar = "Playa Carrer La Mar, ubicació 4 de 7";
var accesibilityGallo = "Gallo Rojo, ubicació 5 de 7";
var accesibilityTren = "La estación del trenet, ubicació 6 de 7";
var accesibilityIglesia = "La plaza de la iglesia, ubicación 7 de 7";

//follow the order to translate properly
const LocationNames = ["Racó de la Illeta","Astillero","Senda","Playa Carrer La Mar","Gallo Rojo","La estación del trenet","La plaza de la iglesia"]

var hoverVolumeBefore = "Volumen al ";
var hoverVolumeAfter = "%";                             //expeted Volumen al 76%  
var accesibilityVolumeBefore = "El volumen está al ";
var accesibilityVolumeAfter = " por ciento";            //expeted El volumen está al 76 por ciento

var hoverMuteAction = "Silenciar";
var accesibilityMuteAction = "Silenciar la melodía";
var hoverUnmuteAction = "Desilenciar";
var accesibilityUnmuteAction = "Desilenciar la melodía";

var hoverPauseAction = "Pausar";
var accesibilityPauseAction = "Detener la melodía";
var hoverPlayAction = "Reproducir";
var accesibilityPlayAction = "Reanudar la melodía";

var mapTitleTextMircoDisplay = "Mapa";
var mapTitleTextAlternate = "Elija una de las ubicaciones"

//IE verification
function testIE() {
  var NoIE = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
  return NoIE; 
}
if (testIE()) {
  window.location.href = "error/notsupported";
}

var spacesToRoot = "";
//map
  var map = L.map('mapacampello',{
    zoomSnap: 0,
    maxZoom: 18,
    minZoom:1,
    center:[38.426305,-0.017179],
    zoom:1,
    setView:true,
    locateOptions: {
      enableHighAccuracy: true
    },
    tap: false,
  });
  
  L.tileLayer("",{zoomSnap:0}).addTo(map);
  var bounds = [[38.418113, -0.407558], [38.434500, -0.3732]];
  var image = L.imageOverlay('images/map/map.svg', bounds).addTo(map);
  map.fitBounds(bounds); 
  map.setView([38.4269, -0.39052],0);
  map.setZoom(14.9);
    var marker0 = L.marker([38.43215, -0.38599],{draggable: false, keyboard:true});
    var marker1 = L.marker([38.42976, -0.38734],{draggable: false, keyboard:true});
    var marker2 = L.marker([38.42970, -0.38960],{draggable: false, keyboard:true});
    var marker3 = L.marker([38.42744, -0.38849],{draggable: false, keyboard:true});
    var marker4 = L.marker([38.42326, -0.39216],{draggable: false, keyboard:true});
    var marker5 = L.marker([38.42875, -0.39348],{draggable: false, keyboard:true});
    var marker6 = L.marker([38.42767, -0.39921],{draggable: false, keyboard:true});
     // Racó de la illeta
     marker0.on('click', m0click).addTo(map);
     // Astillero
     marker1.on('click', m1click).addTo(map);
     // Senda
     marker2.on('click', m2click).addTo(map);
     // Carrer La Mar
     marker3.on('click', m3click).addTo(map);
     // Gallo Rojo
     marker4.on('click', m4click).addTo(map);
     // Trenet
     marker5.on('click', m5click).addTo(map);
     // Plaça de l'Esglèsia
     marker6.on('click', m6click).addTo(map);
     
     //geolocation
    var geolocation = L.control.locate({
      showPopup: false,
      flyTo: true,
      cacheLocation:false,
      onLocationError: function(e){
        document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].innerHTML= "<div class='material-icons-outlined'>location_disabled</div>";
        alert(":("+"\n"+ jsWarningGeoTitle + "\n" +'[ERROR]: ' + e.message);
        console.warn('[ERROR]: ' + e.message)
      },
    }).addTo(map);

    function onLocationFound(e) {
      document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].innerHTML= "<div class='material-icons'>my_location</div>";
      warningcatgeo();
    }
    function onLocationOff(e) {
      document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].innerHTML= "<div class='material-icons'>location_disabled</div>";
      L.control.locate({cacheLocation:false})
    }
    function onLocationAllow(e) {
      document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].innerHTML= "<div class='material-icons'>my_location</div>"
    }
    map.on('locationfound', onLocationFound);
    map.on('locatedeactivate', onLocationOff);
    map.on('locateactive', onLocationAllow);

    function warningcatgeo(e) {
      var hadwarned = getComputedStyle(document.querySelector(':root')).getPropertyValue('--hadwarned');
      if (hadwarned != "true"){
        alert(jsWarningAccurateTitle +"\n"+ jsWarningAccurateBody);
        document.querySelector(':root').style.setProperty("--hadwarned", true);
      }
    }

     //focus.marker.accesibility
     L.DomEvent.on(marker0._icon, 'focus', function(e) {
      marker0.openPopup();
     });
     L.DomEvent.on(marker1._icon, 'focus', function(e) {
      marker1.openPopup();
     });
     L.DomEvent.on(marker2._icon, 'focus', function(e) {
      marker2.openPopup();
     });
     L.DomEvent.on(marker3._icon, 'focus', function(e) {
      marker3.openPopup();
     });
     L.DomEvent.on(marker4._icon, 'focus', function(e) {
      marker4.openPopup();
     });
     L.DomEvent.on(marker5._icon, 'focus', function(e) {
      marker5.openPopup();
     });
     L.DomEvent.on(marker6._icon, 'focus', function(e) {
      marker6.openPopup();
     });

     L.DomEvent.on(marker1._icon, 'focusout', function(e) {
      marker1.closePopup();
     });
     L.DomEvent.on(marker2._icon, 'focusout', function(e) {
      marker2.closePopup();
     });
     L.DomEvent.on(marker3._icon, 'focusout', function(e) {
      marker3.closePopup();
     });
     L.DomEvent.on(marker4._icon, 'focusout', function(e) {
      marker4.closePopup();
     });
     L.DomEvent.on(marker5._icon, 'focusout', function(e) {
      marker5.closePopup();
     });
     L.DomEvent.on(marker6._icon, 'focusout', function(e) {
      marker6.closePopup();
     });

     //popups
     marker0.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/raco.svg" height="100" width="100"><br><h4>'+ LocationNames[0] +'</h4>');
         marker0.on('mouseover', function () {
          this.openPopup();});
         marker0.on('mouseout', function () {
          this.closePopup()});
     marker1.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/astillero.svg" height="100" width="100"><br><h4>'+ LocationNames[1] +'</h4>');
         marker1.on('mouseover', function () {
           this.openPopup()});
         marker1.on('mouseout', function () {
           this.closePopup()});
     marker2.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/senda.svg" height="100" width="100"><br><h4>'+ LocationNames[2] +'</h4>');
         marker2.on('mouseover', function () {
           this.openPopup()});
         marker2.on('mouseout', function () {
           this.closePopup()});
     marker3.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/carrer.svg" height="100" width="100"><br><h4>'+ LocationNames[3] +'</h4>');
         marker3.on('mouseover', function () {
           this.openPopup()});
         marker3.on('mouseout', function () {
           this.closePopup()});
     marker4.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/gallo.svg" height="100" width="100"><br><h4>'+ LocationNames[4] +'</h4>');
         marker4.on('mouseover', function () {
           this.openPopup()});
         marker4.on('mouseout', function () {
           this.closePopup()});
     marker5.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/tren.svg" height="100" width="100"><br><h4>'+ LocationNames[5] +'</h4>');
         marker5.on('mouseover', function () {
           this.openPopup()});
         marker5.on('mouseout', function () {
           this.closePopup()});
     marker6.bindPopup('<img class="foto unselectable" alt="'+ altSvgUbi +'" src="'+ spacesToRoot +'images/map/iglesia.svg" height="100" width="100"><h4>'+ LocationNames[6] +'</h4>');
         marker6.on('mouseover', function () {
           this.openPopup()});
         marker6.on('mouseout', function () {
           this.closePopup()});
 
   //click.marker || enter.key.marker actions
       function m0click(e) {
         window.location.href= urlIlleta_langbased;
       }
       L.DomEvent.on(marker0._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href= urlIlleta_langbased;
        }
       });

       function m1click(e) {
         window.location.href= urlAstillero_langbased;
       }
       L.DomEvent.on(marker1._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href= urlAstilleto_langbased;
        }
       });
       
       function m2click(e) {
         window.location.href=urlSenda_langbased;
       }
       L.DomEvent.on(marker2._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href=urlSenda_langbased;
        }
       });

       function m3click(e) {
         window.location.href=urlCarrerMar_langbased;
       }
       L.DomEvent.on(marker3._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href=urlCarrerMar_langbased;
        }
       });

       function m4click(e) {
         window.location.href=urlGallo_langbased;
       }
       L.DomEvent.on(marker4._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href=urlGallo_langbased;
        }
       });

       function m5click(e) {
         window.location.href=urlTren_langbased;
       }
       L.DomEvent.on(marker5._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href=urlTren_langbased;
        }
       });

       function m6click(e) {
         window.location.href=urlIglesia_langbased;
       }
       L.DomEvent.on(marker6._icon, 'keypress', function(e) {
        if(e.keyCode === 13){
          window.location.href=urlIglesia_langbased;
        }
       });

//initial.mapi.tems.setup
  //custom mapitems: aria, custom icons...
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].style.marginTop = "10px";
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].style.borderRadius = "5px";
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].innerHTML= "<div class='material-icons-outlined'>location_off</div>";
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].ariaLabel= accesibilityGPS;  
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].tabIndex = "8";
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].title = accesibilityGPS;
  document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].style.WebkitTapHighlightColor = "rgba(0,0,0,0)";

  /* document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].childNodes[0].removeAttribute("href"); */
  document.getElementsByClassName("leaflet-control-zoom-in")[0].ariaLabel=accesibilityZoomIn;
  document.getElementsByClassName("leaflet-control-zoom-in")[0].title=accesibilityZoomIn;
  document.getElementsByClassName("leaflet-control-zoom-in")[0].tabIndex="8";

  /* document.getElementsByClassName("leaflet-control-zoom-in")[0].removeAttribute("href"); */
  document.getElementsByClassName("leaflet-control-zoom-in")[0].style.cursor = "pointer";
  document.getElementsByClassName("leaflet-control-zoom-in")[0].innerHTML = "<div class='material-icons-round'>zoom_in</div>";
  document.getElementsByClassName("leaflet-control-zoom-in")[0].style.WebkitTapHighlightColor = "rgba(0,0,0,0)"; //!webkit

  document.getElementsByClassName("leaflet-control-zoom-out")[0].ariaLabel=accesibilityZoomOut;
  document.getElementsByClassName("leaflet-control-zoom-out")[0].title=accesibilityZoomOut;
  document.getElementsByClassName("leaflet-control-zoom-out")[0].tabIndex="8";

  /* document.getElementsByClassName("leaflet-control-zoom-out")[0].removeAttribute("href"); */
  document.getElementsByClassName("leaflet-control-zoom-out")[0].style.cursor = "pointer";
  document.getElementsByClassName("leaflet-control-zoom-out")[0].innerHTML = "<div class='material-icons-round'>zoom_out</div>";
  document.getElementsByClassName("leaflet-control-zoom-out")[0].style.WebkitTapHighlightColor = "rgba(0,0,0,0)";

  document.getElementsByClassName("leaflet-control-attribution")[0].childNodes[0].tabIndex = "-1";
  document.getElementsByClassName("leaflet-control-attribution")[0].childNodes[0].ariaLabel = accesibilityContribuition;
  document.getElementsByClassName("leaflet-control-attribution")[0].childNodes[0].role = "link";
  document.getElementsByClassName("leaflet-marker-icon")[0].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[1].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[2].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[3].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[4].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[5].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[6].role="link";
  document.getElementsByClassName("leaflet-marker-icon")[0].ariaLabel=accesibilityIlleta;
  document.getElementsByClassName("leaflet-marker-icon")[0].href=urlIlleta_langbased;
  document.getElementsByClassName("leaflet-marker-icon")[0].tabIndex="8";
  document.getElementsByClassName("leaflet-marker-icon")[1].ariaLabel=accesibilityAstillero;
  document.getElementsByClassName("leaflet-marker-icon")[1].tabIndex="8";
  document.getElementsByClassName("leaflet-marker-icon")[2].ariaLabel=accesibilitySenda;
  document.getElementsByClassName("leaflet-marker-icon")[2].tabIndex="8";
  document.getElementsByClassName("leaflet-marker-icon")[3].ariaLabel=accesibilityCarrerMar;
  document.getElementsByClassName("leaflet-marker-icon")[3].tabIndex="8";
  document.getElementsByClassName("leaflet-marker-icon")[4].ariaLabel=accesibilityGallo;
  document.getElementsByClassName("leaflet-marker-icon")[4].tabIndex="8";
  document.getElementsByClassName("leaflet-marker-icon")[5].ariaLabel=accesibilityTren;
  document.getElementsByClassName("leaflet-marker-icon")[5].tabIndex="8";
  document.getElementsByClassName("leaflet-marker-icon")[6].ariaLabel=accesibilityIglesia;
  document.getElementsByClassName("leaflet-marker-icon")[6].tabIndex="8";
       
  //aria for closed sidebar
  document.getElementById("sidebar_content").ariaHidden = "true";
  document.getElementsByClassName("closeburger")[0].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "true";
  document.getElementsByClassName("instagramButton")[0].ariaHidden = "true";
  document.getElementsByClassName("closeburger")[0].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "hidden";
  document.getElementsByClassName("instagramButton")[0].style.visibility = "hidden";
  
  //IE validation
  function testIE() {
	  var NoIE = navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
    document.getElementById("volume").value = "100";
	  return NoIE; 
	}
	if (testIE()) {
    window.location.href = spacesToRoot + "error/notsupported/index.html";
	}

//MUSIC PLAYER volume on input
function volume(){ 
  var volumevalue = document.getElementById("volume").value;
  document.querySelector(':root').style.setProperty("--lastVolumePerCent", volumevalue + "%");
  var volume_ico = document.getElementById("volume_ico");
  var audio = document.getElementById("audio-lola");
  document.getElementById("volume").title = hoverVolumeBefore + volumevalue + hoverVolumeAfter;
  document.getElementById("volume").ariaLabel = accesibilityVolumeBefore + volumevalue + accesibilityVolumeAfter;
  var mute = document.getElementById("mute");
  audio.volume = volumevalue/100;
  if (audio.volume != "0"){
    audio.muted = false;
    volume_ico.innerHTML = "volume_up";
    mute.classList.remove("check");
    volume_ico.title = hoverMuteAction;
    mute.title = hoverMuteAction;
    mute.ariaLabel = accesibilityMuteAction;
  } else {
    volume_ico.innerHTML= "volume_off";
    mute.classList.add("check");
    volume_ico.title = hoverUnmuteAction;
    mute.title = hoverUnmuteAction;
    mute.ariaLabel = accesibilityUnmuteAction;
    document.getElementById("volume").title = hoverVolumeBefore + 0 + hoverVolumeAfter;
    document.getElementById("volume").ariaLabel = accesibilityVolumeBefore + 0 + accesibilityVolumeAfter;
  }
}
function LastVolume() {
  if(document.getElementById('audio-lola').volume != 0){
    var x = document.getElementById('volume').value; 
    document.querySelector(':root').style.setProperty("--lastVolume", x);
  }
}

//MUSIC PLAYER play pause, input media key
const playButton = document.getElementById('play');
playButton.addEventListener('click', togglePlay);
function togglePlay() {
  var audio = document.getElementById("audio-lola");
  var playico = document.getElementById("playico");
  var playfn = document.getElementById("play");
  if (audio.paused) {
    audio.play();
    playico.innerHTML = "pause";
    playfn.title = hoverPauseAction;
    playfn.ariaLabel = accesibilityPauseAction;
  } else {
    audio.pause();
    playico.innerHTML = "play_arrow"
    playfn.title = hoverPlayAction;
    playfn.ariaLabel = accesibilityPlayAction;
  }
}
function pauseMusic(){
  var playico = document.getElementById("playico");
  var playfn = document.getElementById("play");
  playico.innerHTML = "play_arrow";
  playfn.title = hoverPlayAction;
  playfn.ariaLabel = accesibilityPlayAction;
}
function playMusic(){
  var playico = document.getElementById("playico");
  var playfn = document.getElementById("play");
  playico.innerHTML = "pause";
  playfn.title = hoverPauseAction;
  playfn.ariaLabel = accesibilityPauseAction;
}

//MUSIC PLAYER mute, unmute audio
function muteEvent() {
  var audio = document.getElementById("audio-lola");
  var volume = document.getElementById("volume");
  var volume_ico = document.getElementById("volume_ico");
  var mute = document.getElementById("mute");
  if (mute.classList.contains("check")){
    mute.classList.remove("check");
    audio.muted = false;
    volume_ico.innerHTML = "volume_up";
    var restore = getComputedStyle(document.querySelector(':root')).getPropertyValue('--lastVolume');
    if(!restore){
      volume.value = "100";
      document.querySelector(':root').style.setProperty("--lastVolumePerCent", volume.value + "%");
      audio.volume = "1";
      document.getElementById("volume").title = hoverVolumeBefore + 100 + hoverVolumeAfter;
      document.getElementById("volume").ariaLabel = accesibilityVolumeBefore + 100 + accesibilityVolumeAfter;
    } else {
      volume.value = restore;
      document.querySelector(':root').style.setProperty("--lastVolumePerCent", volume.value + "%");
      audio.volume = restore/100;
      document.getElementById("volume").title = hoverVolumeBefore + restore + hoverVolumeAfter;
      document.getElementById("volume").ariaLabel = accesibilityVolumeBefore + restore + accesibilityVolumeAfter;
    };
    volume_ico.title = hoverMuteAction;
    mute.title = hoverMuteAction;
    mute.ariaLabel = accesibilityMuteAction;
  } else {
    mute.classList.add("check");
    volume.value = "0";
    document.querySelector(':root').style.setProperty("--lastVolumePerCent", volume.value + "%");
    audio.muted = true;
    volume_ico.innerHTML = "volume_off";
    volume_ico.title = hoverUnmuteAction;
    mute.title = hoverUnmuteAction;
    mute.ariaLabel = accesibilityUnmuteAction;
    document.getElementById("volume").title = hoverVolumeBefore + 0 + hoverVolumeAfter;
    document.getElementById("volume").ariaLabel = accesibilityVolumeBefore + 0 + accesibilityVolumeAfter;
  }
}

//touchevents css
function startTouchSlider() {
  document.getElementById("volume").classList.add("touchingVolume")
}
function endTouchSlider() {
  document.getElementById("volume").classList.remove("touchingVolume")
}

//WINDOW size
window.addEventListener("resize", function(){
  if (window.innerHeight < 615){
    var h = window.innerHeight - 95 + "px";
    document.getElementById("mapacampello").style.height = h;
  } else {
    document.getElementById("mapacampello").style.height = "486px";
  }
})
if (window.innerHeight < 615){
  var h = window.innerHeight - 95 + "px";
  document.getElementById("mapacampello").style.height = h;
} else {
  document.getElementById("mapacampello").style.height = "486px";
}
window.addEventListener("resize", function(){
  if (window.innerWidth < 344){
    document.getElementsByClassName("main_title")[0].lastElementChild.innerHTML = mapTitleTextMircoDisplay;
  } else {
    document.getElementsByClassName("main_title")[0].lastElementChild.innerHTML = mapTitleTextAlternate;
  }
});
if (window.innerWidth < 344){
  document.getElementsByClassName("main_title")[0].lastElementChild.innerHTML = mapTitleTextMircoDisplay;
} else {
  document.getElementsByClassName("main_title")[0].lastElementChild.innerHTML = mapTitleTextAlternate;
};

window.addEventListener("resize", function(){
  if (window.innerWidth > 512){
    document.getElementById("sidebar_containerId").classList.remove("OpenSidebarContainer");
    document.getElementById("sidebar_content").style.setProperty("left", "calc(-270px - env(safe-area-inset-left))");
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#FBFBFB");

    document.getElementsByClassName("closeburger")[0].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[0].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[1].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[2].tabIndex = "-1";
    document.getElementsByClassName("instagramButton")[0].tabIndex = "-1";
  
    document.getElementById("sidebar_content").ariaHidden = "true";
    document.getElementsByClassName("closeburger")[0].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "true";
    document.getElementsByClassName("instagramButton")[0].ariaHidden = "true";
  
    document.getElementsByClassName("closeburger")[0].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "hidden";
    document.getElementsByClassName("instagramButton")[0].style.visibility = "hidden";

/*- madness? this... is... JavaScript!*/
  }
})

//sidebar
function opensidebar(){
  document.getElementById("sidebar_containerId").classList.add("OpenSidebarContainer");
  document.querySelector("meta[name=theme-color]").setAttribute("content", "#f3f3f3");
  document.getElementById("sidebar_content").style.setProperty("left", "0px");

  document.getElementsByClassName("closeburger")[0].tabIndex = "2";
  document.getElementsByClassName("sidebar_common_txt")[0].tabIndex = "2";
  document.getElementsByClassName("sidebar_common_txt")[1].tabIndex = "2";
  document.getElementsByClassName("sidebar_common_txt")[2].tabIndex = "2";
  document.getElementsByClassName("instagramButton")[0].tabIndex = "2";

  document.getElementById("sidebar_content").ariaHidden = "false";
  document.getElementsByClassName("closeburger")[0].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "false";
  document.getElementsByClassName("instagramButton")[0].ariaHidden = "false";

  document.getElementsByClassName("closeburger")[0].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "visible";
  document.getElementsByClassName("instagramButton")[0].style.visibility = "visible";
}

function closesidebar(){
  document.getElementById("sidebar_containerId").classList.remove("OpenSidebarContainer");
  document.querySelector("meta[name=theme-color]").setAttribute("content", "#FBFBFB");
  document.getElementById("sidebar_content").style.setProperty("left", "calc(-270px - env(safe-area-inset-left))");

  document.getElementsByClassName("closeburger")[0].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[0].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[1].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[2].tabIndex = "-1";
  document.getElementsByClassName("instagramButton")[0].tabIndex = "-1";

  document.getElementById("sidebar_content").ariaHidden = "true";
  document.getElementsByClassName("closeburger")[0].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "true";
  document.getElementsByClassName("instagramButton")[0].ariaHidden = "true";

  document.getElementsByClassName("closeburger")[0].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "hidden";
  document.getElementsByClassName("instagramButton")[0].style.visibility = "hidden";
}