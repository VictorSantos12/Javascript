var a = document.querySelector('div#first');
var b = document.getElementById('second');
var c = document.querySelector('div.third');

var d = document.querySelector('button#go')
var e = document.querySelector('button#wait')
var f = document.querySelector('button#stop')
var g = document.querySelector('button#reload')

d.addEventListener('click', green)
e.addEventListener('click', yellow)
f.addEventListener('click', red)
g.addEventListener('click', reload)

function green(){
    a.style.background = "green";

}

function yellow(){

    b.style.background = "yellow";
}

function red(){
    c.style.background = "red";
}

function reload(){

    

}
