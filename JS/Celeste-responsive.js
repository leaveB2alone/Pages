(function () {
    const BASE_W = 1920;
    const BASE_H = 957;

    function applyScale() {
    const scaleX = window.innerWidth  / BASE_W;
    const scaleY = window.innerHeight / BASE_H;
    const scale  = Math.min(scaleX, scaleY);
    document.documentElement.style.setProperty('--scale', scale);
    document.getElementById('app').style.setProperty('--scale', scale);
    window.scrollTo(0, 0);
}

    applyScale();
    window.addEventListener('resize', applyScale);
})();