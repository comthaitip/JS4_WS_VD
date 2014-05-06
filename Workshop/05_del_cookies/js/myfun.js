/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */
var result = document.getElementById("result");
var myForm = document.getElementById("myForm");
var inputName = document.getElementById("inputName");
var clearC = document.getElementById("clearC");


function setCookie(cName, cValue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 1000 * 60 * 60 * 24));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cName + "=" + cValue + ";" + expires;
}

function getCookie(cName) {
    var name = cName + "=";
    var ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { //find username
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function delete_cookie( name ) {
    var last = new Date(70,0,1);
    document.cookie = name + '=; expires=' + last.toGMTString() + ';';
 }

function checkCookie() {
    var userName = getCookie("username");
    if (userName != "") {
        result.innerHTML = "Welcome Again!!! " + userName;
    } else {
        myForm.onsubmit = function() {
            userName = inputName.value;
            if (userName != "" && userName != null) {
                setCookie("username", userName, 1);
            }
        };
    }
    
    clearC.onclick = function() {
        delete_cookie("username");
    }
    
    
}


window.onload = function() {
    checkCookie();
};




