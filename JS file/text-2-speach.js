'use strict'

document.getElementById('R1').addEventListener('click',()=>{

    let a= String(document.getElementById('ipB1').value);

let read=new SpeechSynthesisUtterance(a);

    speechSynthesis.speak(read)

    console.log(a);
})