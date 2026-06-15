function move(option){
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
}

function moveback(option2){
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
}

function home(){
    window.alert('You are already in home :D');
}