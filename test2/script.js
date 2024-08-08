let lampuMenyalakan = false;

function toggleLampu() {
    const lampu = document.getElementById('lampu');
    if (lampuMenyalakan) {
        lampu.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        lampu.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
    lampuMenyalakan = !lampuMenyalakan;
}

