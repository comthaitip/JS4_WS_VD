/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */

var output = document.getElementById("output");


 var bodyFontSize = function() {
    var fSize = 16; //initialize
    
     return  {
         incSize: function (changeSize) {
             fSize += changeSize;
         },
         decSize: function (changeSize) {
             fSize -= changeSize;
         },
         getFontStyleSize: function() {
             return "normal normal " + fSize + "px" + " Tahoma";
         }
     };
     
 } ();
 

function addSize() {
    bodyFontSize.incSize(4);
    output.style.font = bodyFontSize.getFontStyleSize();
}

function subtSize() {
    bodyFontSize.decSize(4);
    output.style.font = bodyFontSize.getFontStyleSize();
}





