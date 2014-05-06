/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */
var mainImg = document.getElementById("mainImg");

function init() {
    mainImg.onmouseover = function() {
        mainImg.src = "images/pic2.jpg" ;
    };
    
    mainImg.onmouseout = function() {
        mainImg.src = "images/pic1.jpg" ;
    };
}



window.onload = function() {
   init();
};



