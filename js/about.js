document.querySelector("meta[name=theme-color]").setAttribute("content", "#fbfbfb");

//IE verification
function testIE() {
  var NoIE = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
  return NoIE; 
}
if (testIE()) {
  window.location.href = "../error/notsupported";
}


//credits
function theSuperPowerfulOpeningFunctionThatHaveEverExisted(whatSectionIsGoingToBeOpen){
  document.getElementsByClassName("section_ico_opener")[whatSectionIsGoingToBeOpen].classList.toggle("openExpandanim");
  document.getElementsByClassName("sectioncredits")[whatSectionIsGoingToBeOpen].classList.toggle("isopen");
  if (document.getElementsByClassName("list")[whatSectionIsGoingToBeOpen].style.maxHeight){
    document.getElementsByClassName("list")[whatSectionIsGoingToBeOpen].style.maxHeight = null;
  } else {
    document.getElementsByClassName("list")[whatSectionIsGoingToBeOpen].style.maxHeight = document.getElementsByClassName("list")[whatSectionIsGoingToBeOpen].scrollHeight + "px";
  } 
  document.getElementsByClassName("list")[whatSectionIsGoingToBeOpen].classList.toggle("listopentrue");
}

//banner detail
var viewport_height = window.innerHeight;
if (window.innerHeight < 600){
  document.getElementById("bannerabout").style.height = "300px"
} else {
  document.getElementById("bannerabout").style.height = viewport_height*0.5 + "px";
}

//resize event
window.addEventListener("resize", function(){
  var viewport_height = window.innerHeight;
  if (window.innerHeight < 600){
    document.getElementById("bannerabout").style.height = "300px"
  } else {
    document.getElementById("bannerabout").style.height = viewport_height*0.5 + "px";
  }
  if (window.innerWidth > 512){
    document.getElementById("sidebar_containerId").classList.remove("OpenSidebarContainer");
    document.getElementById("sidebar_content").style.setProperty("left", "calc(-270px - env(safe-area-inset-left))");
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#fbfbfb");

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
  document.querySelector("meta[name=theme-color]").setAttribute("content", "#fbfbfb");
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