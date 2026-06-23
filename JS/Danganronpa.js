// --------------------------------------------------------------------Variaveis---------------------------------------------------------------------
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const socials = document.querySelector('#socials')
const projects = document.querySelector('#projects')
const menu = document.querySelector('.menu')
const screenSocial = document.querySelector('#screen-socials')
const imageSocial = document.querySelector('#panelsocial')
const iconSocial = document.querySelectorAll('.socialicon')
const screenAbout = document.querySelector('#screen-about')
const screenProjects = document.querySelector('#screen-projects') 
const projetos = document.querySelectorAll('.projetos')
const panelProjects = document.querySelector('#showproject')

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
    playSom2()
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
    if (option.id === 'about'){
        menu.classList.add('hide')
        screenAbout.classList.add('active')
    }
    if (option.id === 'projects'){
        menu.classList.add('hide')
        screenProjects.classList.add('active')
    }
}

 async function goBack(option2){
    playSom3()
    if (option2.id === 'socials-go-back'){
        await removeClass('socials')
        screenSocial.classList.remove('hide')
    }
    if (option2.id === 'about-go-back'){
        await removeClass('about')
        screenAbout.classList.remove('hide')
    }
    if (option2.id === 'projects-go-back'){
        await removeClass('projects')
        screenProjects.classList.remove('hide')
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
        if (value === 'about'){
            screenAbout.classList.remove('active')
            screenAbout.classList.add('hide')
            screenAbout.addEventListener('animationend', () =>{
                resolve();
            }, {once: true});
        }
        if (value === 'projects'){
            screenProjects.classList.remove('active')
            screenProjects.classList.add('hide')
            screenProjects.addEventListener('animationend', () =>{
                resolve();
            }, {once: true});
        }
    });
}

//-----------------------------------------------------------Troca de imagens------------------------------------------------------------------------
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
        if (icon.id === 'myanimelist'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconMyAnimeListLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelMyAnimeList.png'
        }
        if (icon.id === 'soundcloud'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconSoundcloudLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelSoundcloud.png'
        }
        if (icon.id === 'pinterest'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconPinterestLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelPinterest.png'
        }
        if (icon.id === 'retroachievements'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconRetroAchievementsLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelRetroachievements.png'
        }
        if (icon.id === 'vndb'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconVndbLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelVndb.png'
        }
        if (icon.id === 'x'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconXLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelX.png'
        }
        if (icon.id === 'twitch'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconTwitchLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelTwitch.png'
        }
        if (icon.id === 'yourgamerprofile'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconYourGamerProfileLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelYourGamerProfile.png'
        }
        if (icon.id === 'letterboxd'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconLetterboxdLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelLetterboxd.png'
        }
        if (icon.id === 'serializd'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconSerializdLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelSerializd.png'
        }
        if (icon.id === 'osu'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconOsuLight.png'
            imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelOsu.png'
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
        if (icon.id === 'myanimelist'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconMyAnimeList.png'
        }
        if (icon.id === 'soundcloud'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconSoundcloud.png'
        }
        if (icon.id === 'pinterest'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconPinterest.png'
        }
        if (icon.id === 'retroachievements'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconRetroAchievements.png'
        }
        if (icon.id === 'vndb'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconVndb.png'
        }
        if (icon.id === 'x'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconX.png'
        }
        if (icon.id === 'twitch'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconTwitch.png'
        }
        if (icon.id === 'yourgamerprofile'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconYourGamerProfile.png'
        }
        if (icon.id === 'letterboxd'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconLetterboxd.png'
        }
        if (icon.id === 'serializd'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconSerializd.png'
        }
        if (icon.id === 'osu'){
            icon.src = '../Imagens/PNG/Danganronpa/Social/IconOsu.png'
        }
        imageSocial.src = '../Imagens/PNG/Danganronpa/Social/PanelDefault.png'
    })
    console.log(iconSocial)
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
    }
});

projetos.forEach(projeto =>{
    projeto.addEventListener('mouseenter', () =>{
        if (projeto.id === 'musiccolection'){
            panelProjects.src = '../Imagens/PNG/Danganronpa/Projects/Music Collection.png'
        }
    })
    
    projeto.addEventListener('mouseleave', () =>{
        panelProjects.src = '../Imagens/PNG/Danganronpa/Projects/Default.png'
    })
})

//-------------------------------------------------------Sons----------------------------------------------------------------------------------------
const audioContext = new AudioContext();

async function loadAudio(path) {
    const response = await fetch(path);
    const arrayBuffer = await response.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
}

async function playMusic() {
    const intro = await loadAudio("../Audio/Danganronpa-bg-intro.wav");
    const loop = await loadAudio("../Audio/Danganronpa-bg-loop.wav");
    const introSource = audioContext.createBufferSource();
    introSource.buffer = intro;
    introSource.connect(audioContext.destination);
    introSource.start();
    introSource.onended = () => {
        const loopSource = audioContext.createBufferSource();
        loopSource.buffer = loop;
        loopSource.loop = true;
        loopSource.connect(audioContext.destination);
        loopSource.start();
    };
}
document.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    playMusic();
}, {once: true});

const sfx1 = document.querySelector('#sfx1')
const sfx2 = document.querySelector('#sfx2')
const sfx3 = document.querySelector('#sfx3')

function playSom1() {
    sfx1.currentTime = 0;
    sfx1.play();
}

function playSom2() {
    sfx2.currentTime = 0;
    sfx2.play();
}

function playSom3() {
    sfx3.currentTime = 0;
    sfx3.play();
}