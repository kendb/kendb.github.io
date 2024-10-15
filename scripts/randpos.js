var buttns = document.querySelectorAll('#buttn');
buttns.forEach(buttns => {
    buttns.style.top = Math.floor(Math.random() * 100) + "%";
    buttns.style.left = Math.floor(Math.random() * 95) + "%";
    buttns.style.rotate = Math.floor(Math.random() * 360) + "deg";
});