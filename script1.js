function brightness(){
    var x=document.querySelector('#brightness').value;
    document.querySelector('img').style.filter="brightness("+x+"%)"
}
function invert(){
var x=document.querySelector('#invert').value;
document.querySelector('img').style.filter="invert("+x+"%)"
}
function sepia(){
var x=document.querySelector('#sepia').value;
document.querySelector('img').style.filter="sepia("+x+"%)"
}
function saturate(){
var x=document.querySelector('#saturate').value;
document.querySelector('img').style.filter="saturate("+x+"%)"
}
function grayscale(){
var x=document.querySelector("#grayscale").value;
document.querySelector('img').style.filter="grayscale("+x+"%)"
}
function contrast(){
var x=document.querySelector('#contrast').value;
document.querySelector('img').style.filter="contrast("+x+"%)"
}

function height() {
    var hei = prompt("Enter your desired height.")
    document.querySelector("img").style.height = hei
}
function width() {
    var wid = prompt("Enter your desired width.");
    document.querySelector("img").style.width = wid;
}
var url=prompt("Enter an image url.")
console.log(url)
if(url==null||url==""){
document.querySelector('img').src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
}
else{
    document.querySelector('img').src=url
}







