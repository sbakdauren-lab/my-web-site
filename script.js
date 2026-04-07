// 1. Бет жүктелгенде хабарлама шығару [cite: 37]
window.onload = function() {
    alert("Зертханалық жұмысқа қош келдіңіз!");
};

// 2. Түймені басқанда мәтінді өзгерту [cite: 38]
const button = document.getElementById('btn');
const text = document.getElementById('main-text');

button.onclick = function() {
    text.textContent = "Құттықтаймын! JavaScript сәтті жұмыс істеп тұр!";
    text.style.color = "green";
    text.style.fontWeight = "bold";
};
