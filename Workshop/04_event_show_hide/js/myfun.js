/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */
var newsCheck = document.getElementById("newsCheck");
var addOnForm = document.getElementById("addOnForm");

function init() {
    newsCheck.onclick = function() {
        if (newsCheck.checked) {
            addOnForm.style.display = "block";
        } else {
             addOnForm.style.display = "none";
        }
    };
}


window.onload = function() {
   init();
};



