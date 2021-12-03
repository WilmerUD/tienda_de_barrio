/*const API_URL = "http://localhost:8080/producto/";
const parametros = {
                    "producto":{
                        "sku":""
                    }
                 };


console.log(parametros);

const xhr = new XMLHttpRequest();
function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
       console.log(this.response);
    }
}
xhr.addEventListener("load",onRequestHandler);
xhr.open("GET",API_URL,true);
xhr.send(JSON.stringify(parametros));
*/

/*
// Enviando y recibiendo datos en formato JSON utilizando el método GET
const xhr = new XMLHttpRequest();
//var url = "https://jsonplaceholder.typicode.com/users";
var url = "http://localhost:8080/producto/" + encodeURIComponent(JSON.stringify({"producto":{"sku":""}}));
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(this.response);
    }
}
xhr.send();*/

// Enviando y recibiendo datos en formato JSON utilizando el método POST
const xhr = new XMLHttpRequest();
var url = "http://localhost:8080/producto/";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(this.response);
    }
}
var data = JSON.stringify({"producto":{"sku":""}});
xhr.send(data);