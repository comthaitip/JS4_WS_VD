/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */

var result = document.getElementById("confirmBtn");

function submitFunc() {
    var str2 = "Is JavaScript is the behavior of the HTML is web\nThe best.";
    var patt4 = /the/g;
    result.onclick = function() {
        if (patt4.test(str2)) {
            alert("Regular Expression match!!!");
        }
    };
    
}

//window run
window.onload = function() {
    submitFunc();
};




