import XMLHttpRequest from 'xhr2';
var request = new XMLHttpRequest();

var userName = "Experte";
var passWord = "Experte1234";

function authenticateUser(user, password)
{
    var token = user + ":" + password;

    var hash = btoa(token);

    return "Basic " + hash;
}

function setBatteryLevel(value){
    request.open("GET", "https://dns.loxonecloud.com/504F94A0EC9E/jdev/sps/io/Akkustand/" + value.toString());
    request.setRequestHeader("Authorization", authenticateUser(userName, passWord));
    request.addEventListener('load', function (event) {
         if (request.status >= 200 && request.status < 300) {
             console.log(request.responseText);
             process.exit(1);
         } else {
             console.warn(request.statusText, request.responseText);
             process.exit(1);
         }

    });
    request.send();
}

setBatteryLevel(75);