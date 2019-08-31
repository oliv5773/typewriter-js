"use strict";

let pos = 0;
let speed = 100;
let typewriter = document.getElementById("typewriter").innerText;

console.log(typewriter);

document.getElementById("typewriter").innerText = "";

function type() {
  if (pos < typewriter.length) {
    document.getElementById("typewriter").innerHTML += typewriter.charAt(pos);
    pos++;
    setTimeout(type, speed);
  }
}

setTimeout(type, speed);
