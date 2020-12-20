function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var city_coded = getUrlVars()["city"];
var city = decodeURIComponent(city_coded);
for (let i = 0; i < city.length; i++){
    if (city[i] === '+') {
        city = city.replace(city[i], " ");
    }
}
document.getElementById("currentcity").innerHTML = city;
document.getElementById("currentcity1").innerHTML = city;
document.getElementById("currentcity2").innerHTML = city;