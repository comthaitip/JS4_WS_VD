/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */


var regex = new RegExp("Kasiti","g");
var regex2 = /Kasiti/g;

var result = document.getElementById("result");

var str = "Is JavaScript is the behavior of the HTML is web";
var matchTest = /the/g;
//result.innerHTML = "Result Expression is >>";
//result.innerHTML += str.match(matchTest);

var patt2 = /is/i;
//result.innerHTML += str.match(patt2);

var patt3 = /is/g;
//result.innerHTML += str.match(patt3);

var str2 = "Is JavaScript is the behavior of the HTML is web\nThe best.";
var patt4 = /the/m;
result.innerHTML += str.match(patt4);