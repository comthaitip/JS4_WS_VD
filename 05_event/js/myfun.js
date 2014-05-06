/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */

var myButton = document.getElementById("confirmBtn");
var result = document.getElementById("result");

function displayDate() {
    document.getElementById("result").innerHTML = Date().toString();
}

var mainImg = document.getElementById("mainImg");
mainImg.onclick = function() {
    alert("You Click at Image");
}



