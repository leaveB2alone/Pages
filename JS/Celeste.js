function B2(msg){
    playSom3()
    window.alert(msg)
}

function alerta(msg){
    playSom3()
    window.alert(msg)
}

function move(option){ // ------------------------------------------------------Troca de abas--------------------------------------------------------
    const menu = document.querySelector('.container');
    const screens = document.querySelectorAll('.container2 .screen')
    menu.classList.add('hide');
    screens.forEach(s => s.classList.remove('active'));
    if (option.id === 'socials') {
        playSom3()
        document.querySelector('#screen-socials').classList.add('active');
    }
    if (option.id === 'projects'){
        playSom4()
        document.querySelector('#screen-projects').classList.add('active')
    }
    if (option.id === 'about'){
        playSom3()
        document.querySelector('#screen-about').classList.add('active')
    }
}

function out(value){ // ------------------------------------------Saida------------------------------------------------------------------------------
    playSom3()
    const menu = document.querySelector('.container');
    const screens = document.querySelectorAll('.container2 .screen')
    const capa = document.querySelector('#capa');
    const capa3 = document.querySelector('#capa3');
    screens.forEach(s => s.classList.remove('active'));
    capa.classList.remove('active')
    capa3.classList.remove('active')
    menu.classList.remove('hide');
}

function movecapa() { // ----------------------------------------------------Caderno-----------------------------------------------------------------
    const capa = document.querySelector('#capa');
    const capa3 = document.querySelector('#capa3');

    capa.classList.add('active');
    playSom6()

    capa.addEventListener('transitionend', () => {
        capa3.classList.add('active');
    }, { once: true });
}

const music = document.getElementById("bg-music"); //---------------------------------Sons-----------------------------------------------------------

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

const hoversom1 = document.getElementById("hover-som1");
const hoversom2 = document.getElementById("hover-som2");
const hoversom3 = document.getElementById("hover-som3");
const hoversom4 = document.getElementById("hover-som4");
const hoversom5 = document.getElementById("hover-som5");
const hoversom6 = document.getElementById("hover-som6");
const hoversom7 = document.getElementById("hover-som7");

function playSom1() {
    hoversom1.currentTime = 0;
    hoversom1.play();
}

function playSom2() {
    hoversom2.currentTime = 0;
    hoversom2.play();
}

function playSom3(){
    hoversom3.currentTime = 0;
    hoversom3.play();
}

function playSom4(){
    hoversom4.currentTime = 0;
    hoversom4.play();
}

function playSom5(){
    hoversom5.currentTime = 0;
    hoversom5.play();
}

function playSom6(){
    hoversom6.currentTime = 0;
    hoversom6.play();
}

function playSom7(){
    hoversom7.currentTime = 0;
    hoversom7.play();
}

document.addEventListener('keydown', (e) => { //-------------------------------Impede Tab------------------------------------------------------------
    if (e.key === 'Tab') {
        e.preventDefault();
    }
});