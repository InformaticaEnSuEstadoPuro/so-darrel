const d = new Date();
const dayweeks = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
var DAYWEEK = dayweeks[d.getDay()-1];
var MONTH = months[d.getMonth()];
var ndia = d.getDate();
var year = d.getFullYear();
var hour = d.getHours();
var minute = d.getMinutes();
var seconds = d.getSeconds();

if(seconds<10){
    var seconds = "0"+ d.getSeconds();
}
if(minute<10){
    var minute = "0"+ d.getMinutes();
}
if(hour<10){
    var hour = "0"+ d.getHours();
}

document.getElementById("date_console").innerHTML = "Last login: " + DAYWEEK + " " + ndia +" "+ MONTH +" "+ year +" "+hour+":"+minute+":"+seconds + "<br>";
console.log("Last login:",DAYWEEK, ndia, MONTH, year, hour+":"+minute+":"+seconds );
console.warn("[ERROR" + document.getElementById("txt_error").childNodes["2"].nodeValue);
console.log(document.getElementById("tiptxt").childNodes["0"].nodeValue);