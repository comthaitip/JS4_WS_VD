/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */
/*var a = 3;

function hello(yourname) {
    var text = "Hello - " + yourname;
    
    return function() {
        alert(text);
    };
}*/

var result = document.getElementById("result");


var add = function() {
    var counter = 0;
   
    return function (x) {
       
        return counter += x;}
} ();

add(100);
result.innerHTML = add(100);



window.onload = function() {
   //var myHello = hello("kasiti");
   //myHello();
};




