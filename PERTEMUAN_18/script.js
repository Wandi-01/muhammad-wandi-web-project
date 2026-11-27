const tombol = document.getElementById("tombol");
const area = document.querySelector(".area");

tombol.addEventListener("mouseenter", function() {
    const maxX = area.clientWidth - tombol.offsetWidth;
    const maxY = area.clientHeight - tombol.offsetHeight;

    const posisiX = Math.random() * maxX;
    const posisiY = Math.random() * maxY;

    tombol.style.left = posisiX + "px";
    tombol.style.top = posisiY + "px";
});
