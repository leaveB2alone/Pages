const music = document.getElementById("bg-music"); //---------------------------------Sons-----------------------------------------------------------

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

const hoversom1 = document.getElementById("hover-som1");
const hoversom2 = document.getElementById("hover-som2");

function playSom1() {
    hoversom1.currentTime = 0;
    hoversom1.play();
}

function playSom2() {
    hoversom2.currentTime = 0;
    hoversom2.play();
}

function move(option){
    playSom2()
    const menu = document.querySelector('.menu');
    const optionBack = document.querySelector('.options-back');
    const screen = document.querySelectorAll('.screen');
    menu.classList.add('hide');
    screen.forEach(s => s.classList.remove('active'));
    optionBack.classList.add('show');
    document.querySelector('.screen').classList.add('active')
    if (option.id === 'about'){
        document.querySelector('#screen-about').classList.add('active');
    }
    if (option.id === 'socials'){
        document.querySelector('#screen-socials').classList.add('active');
    }
    if (option.id === 'projects'){
        document.querySelector('#screen-projects').classList.add('active');
    }
}

function moveback(option2){
    playSom2()
    const option = document.querySelector('.options-back');
    const screen = document.querySelectorAll('.screen');
    screen.forEach(s => s.classList.remove('active'));
    if (option2.id === 'home2'){
        document.querySelector('.menu').classList.remove('hide')
        option.classList.remove('show')
    }
    if (option2.id === 'about2'){
        document.querySelector('#screen-about').classList.add('active')
    }
    if (option2.id === 'socials2'){
        document.querySelector('#screen-socials').classList.add('active')
    }
    if (option2.id === 'projects2'){
        document.querySelector('#screen-projects').classList.add('active')
    }
}

function home(){
    window.alert('You are already in home');
}

document.querySelector('#screen-socials').addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollBy({
        left: e.deltaY * 10,
        behavior: 'smooth'
    });
}, { passive: false });