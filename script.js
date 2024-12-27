const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Устанавливаем размер canvas в соответствии с окном
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Символы Матрицы
const symbols = "01";
const fontSize = 16;
const columns = canvas.width / fontSize; // Количество колонок
const drops = Array.from({ length: columns }, () => 1); // Положение символов

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Темный фон с прозрачностью
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0"; // Зеленый текст
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
        ctx.fillText(text, index * fontSize, y * fontSize);

        // Перемещение строки вниз
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0; // Сброс строки на вершину
        }
        drops[index]++;
    });
}

// Анимация
setInterval(drawMatrix, 50);


document.addEventListener("DOMContentLoaded", () => {
    const rabbit = document.getElementById("rabbit");

    // Функция для появления кролика с задержкой
    setTimeout(() => {
        rabbit.classList.add("visible");
    }, 2000); // Появляется через 2 секунды
});