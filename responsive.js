// responsive.js
// Escala o layout inteiro proporcionalmente ao tamanho da janela.
// O layout foi desenhado para 1920 × 957 px.

(function () {
    const BASE_W = 1920;
    const BASE_H = 957;

    function applyScale() {
        const scaleX = window.innerWidth  / BASE_W;
        const scaleY = window.innerHeight / BASE_H;
        // Usa o menor dos dois para que tudo caiba na tela
        const scale  = Math.min(scaleX, scaleY);
        document.documentElement.style.setProperty('--scale', scale);
    }

    applyScale();
    window.addEventListener('resize', applyScale);
})();