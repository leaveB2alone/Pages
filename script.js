const temas = [
    'Celeste',
    'Evangelion',
    'Danganronpa',
];

const aleatorio = Math.floor(Math.random() * temas.length);
window.location.replace(`https://leaveb2alone.github.io/Pages/HTML/${temas[aleatorio]}.html`);
