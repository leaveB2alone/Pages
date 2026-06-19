
// --------------------------------------------------------------------Variaveis---------------------------------------------------------------------
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const socials = document.querySelector('#socials')
const projects = document.querySelector('#projects')
const menu = document.querySelector('.menu')
const screenSocial = document.querySelector('#screen-socials')
const imageSocial = document.querySelector('#panelsocial')
const iconSocial = document.querySelectorAll('.socialicon')

// --------------------------------------------------------Placa glow--------------------------------------------------------------------------------

home.addEventListener('mouseenter', () =>{
    home.src = '../Imagens/PNG/Danganronpa/Plate 1 light.png'
})

home.addEventListener('mouseleave', () =>{
    home.src = '../Imagens/PNG/Danganronpa/Plate 1.png'
})

about.addEventListener('mouseenter', () =>{
    about.src = '../Imagens/PNG/Danganronpa/Plate 2 light.png'
})

about.addEventListener('mouseleave', () =>{
    about.src = '../Imagens/PNG/Danganronpa/Plate 2.png'
})

socials.addEventListener('mouseenter', () =>{
    socials.src = '../Imagens/PNG/Danganronpa/Plate 3 light.png'
})

socials.addEventListener('mouseleave', () =>{
    socials.src = '../Imagens/PNG/Danganronpa/Plate 3.png'
})

projects.addEventListener('mouseenter', () =>{
    projects.src = '../Imagens/PNG/Danganronpa/Plate 4 light.png'
})

projects.addEventListener('mouseleave', () =>{
    projects.src = '../Imagens/PNG/Danganronpa/Plate 4.png'
})

// --------------------------------------------------------Abas--------------------------------------------------------------------------------------
function move(option){
    const opt = document.querySelectorAll('.menu')
    const screen = document.querySelectorAll('.screen')
    screen.forEach((s) => s.classList.remove('active'))
    if (option.id === 'home'){
        alert('You are already in home')
    }
    if (option.id === 'socials'){
        menu.classList.add('hide')
        screenSocial.classList.add('active')
    }
}

 async function goBack(option2){
    if (option2.id === 'socials-go-back'){
        await removeClass('socials')
        screenSocial.classList.remove('hide')
    }
    menu.classList.remove('hide')
}

function removeClass(value){
    return new Promise(resolve =>{
        if (value === 'socials'){
            screenSocial.classList.remove('active')
            screenSocial.classList.add('hide')
            screenSocial.addEventListener('animationend', () =>{
                resolve();
            }, {once: true});
        }
    });
}

iconSocial.forEach(icon =>{
    icon.addEventListener('mouseenter', () =>{
        if (icon.id === 'passportdex'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconPassportdexLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelPassportdex.png'
        }
        if (icon.id === 'steam'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconSteamLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelSteam.png'
        }
        if (icon.id === 'github'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconGithubLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelGithub.png'
        }
        if (icon.id === 'backloggd'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconBackloggdLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelBackloggd.png'
        }
    })
    icon.addEventListener('mouseleave', () =>{
        if (icon.id === 'passportdex'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconPassportdex.png'
        }
        if (icon.id === 'steam'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconSteam.png'
        }
        if (icon.id === 'github'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconGithub.png'
        }
        if (icon.id === 'backloggd'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconBackloggd.png'
        }
        imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelDefault.png'
    })
    console.log(iconSocial)
})