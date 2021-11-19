var accesvideo = "video/Gallo rojo ES.mp4"

document.querySelector("meta[name=theme-color]").setAttribute("content", "#212121");

//IE verification
function testIE() {
  var NoIE = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
  return NoIE; 
}
if (testIE()) {
  window.location.href = "../error/notsupported";
}

function CmdOpenVideo() {
  document.getElementsByClassName("ineritwindow")[0].classList.add("openTrue");
  document.getElementsByClassName("backvideo")[0].pause();
  document.getElementsByClassName("window")[0].classList.add("openingAnim");
  document.getElementById("video_play").setAttribute("src", accesvideo);
  document.getElementsByClassName("pbutton")[0].ariaHidden = "true";
  document.getElementById("video_play").load();
  document.getElementById("video_play").play();
  document.getElementById("Xbutton").classList.add("openXnotspace");
  document.getElementsByClassName("logo-clot-container")[0].classList.add("sulfurodecobre");
}

function CmdCloseVideo() {
  document.getElementById("Xbutton").classList.add("closeXnotspace");
  document.getElementById("Xbutton").classList.remove("openXnotspace");
  document.getElementsByClassName("video_play")[0].pause();
  document.getElementsByClassName("window")[0].classList.remove("openingAnim");
  document.getElementsByClassName("window")[0].classList.add("closeAnim");
  document.getElementsByClassName("backvideo")[0].play();
  document.getElementsByClassName("logo-clot-container")[0].classList.remove("sulfurodecobre");
  document.getElementsByClassName("pbutton")[0].ariaHidden = "false";
  setTimeout(function(){
    document.getElementsByClassName("video_play")[0].currentTime = 0;
    document.getElementsByClassName("ineritwindow")[0].classList.remove("openTrue");
    document.getElementById("window").classList.remove("closeAnim");
    document.getElementById("window").classList.remove("openingAnim");
    document.getElementById("Xbutton").classList.remove("closeXnotspace");
    document.getElementById("Xbutton").classList.remove("openXnotspace");
    document.getElementById("video_play").removeAttribute('src');
    document.getElementById("video_play").load();
  }, 200);
}

window.addEventListener("resize", function(){
  if (window.innerWidth > 512){
    document.getElementById("sidebar_containerId").classList.remove("OpenSidebarContainer");
    document.getElementById("sidebar_content").style.setProperty("left", "calc(-270px - env(safe-area-inset-left))");
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#212121");

    document.getElementsByClassName("closeburger")[0].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[0].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[1].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[2].tabIndex = "-1";
    document.getElementsByClassName("sidebar_common_txt")[3].tabIndex = "-1";
    document.getElementsByClassName("instagramButton")[0].tabIndex = "-1";
  
    document.getElementById("sidebar_content").ariaHidden = "true";
    document.getElementsByClassName("closeburger")[0].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "true";
    document.getElementsByClassName("sidebar_common_txt")[3].ariaHidden = "true";
    document.getElementsByClassName("instagramButton")[0].ariaHidden = "true";
  
    document.getElementsByClassName("closeburger")[0].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "hidden";
    document.getElementsByClassName("sidebar_common_txt")[3].style.visibility = "hidden";
    document.getElementsByClassName("instagramButton")[0].style.visibility = "hidden";
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
  document.getElementsByClassName("sidebar_common_txt")[3].tabIndex = "2";
  document.getElementsByClassName("instagramButton")[0].tabIndex = "2";

  document.getElementById("sidebar_content").ariaHidden = "false";
  document.getElementsByClassName("closeburger")[0].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "false";
  document.getElementsByClassName("sidebar_common_txt")[3].ariaHidden = "false";
  document.getElementsByClassName("instagramButton")[0].ariaHidden = "false";

  document.getElementsByClassName("closeburger")[0].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "visible";
  document.getElementsByClassName("sidebar_common_txt")[3].style.visibility = "visible";
  document.getElementsByClassName("instagramButton")[0].style.visibility = "visible";
}

function closesidebar(){
  document.getElementById("sidebar_containerId").classList.remove("OpenSidebarContainer");
  document.querySelector("meta[name=theme-color]").setAttribute("content", "#212121");
  document.getElementById("sidebar_content").style.setProperty("left", "calc(-270px - env(safe-area-inset-left))");

  document.getElementsByClassName("closeburger")[0].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[0].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[1].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[2].tabIndex = "-1";
  document.getElementsByClassName("sidebar_common_txt")[3].tabIndex = "-1";
  document.getElementsByClassName("instagramButton")[0].tabIndex = "-1";

  document.getElementById("sidebar_content").ariaHidden = "true";
  document.getElementsByClassName("closeburger")[0].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[0].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[1].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[2].ariaHidden = "true";
  document.getElementsByClassName("sidebar_common_txt")[3].ariaHidden = "true";
  document.getElementsByClassName("instagramButton")[0].ariaHidden = "true";

  document.getElementsByClassName("closeburger")[0].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[0].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[1].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[2].style.visibility = "hidden";
  document.getElementsByClassName("sidebar_common_txt")[3].style.visibility = "hidden";
  document.getElementsByClassName("instagramButton")[0].style.visibility = "hidden";
}