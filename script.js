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


// Словарь описаний
const skillDescriptions = {
    python: "Разработка прикладного программного обеспечения с помощью PyQt6 и Tkinter. Проведение занятий по программам: Основы языка программирования Python; Нейронные сети на Python, Python для анализа данных; Python для сдачи ЕГЭ по информатике и ИКТ.",
    r: "Разработка прикладного программного обеспечения с использованием Shiny на языке R. Проведение индивидуальных и групповых занятий по основам программирования на языке R. Обучение работе с ключевыми пакетами из экосистемы tidyverse. Выполнение анализа и визуализации данных, а также формулирование и проверка гипотез с использованием современных инструментов анализа на R.",
    ege: "Подготовка к ЕГЭ по информатике, включающая разбор всех ключевых тем и типов заданий. Обучение основам алгоритмизации, программирования и работы с таблицами данных. Разработка индивидуальных стратегий для решения задач высокого уровня сложности, включая задачи на оптимизацию и поиск закономерностей. Проведение практических занятий с использованием современных образовательных технологий и материалов, а также анализ ошибок для повышения результатов экзамена. Подготовка ведется с использованием языка программирования Python.",
    "data-analysis": "Работа с реальными и учебными кейсами в области анализа данных. Определение фейковых данных. Анализ больших массивов данных с использованием языков R и Python.",
    postgresql: "Разработка и оптимизация прикладного программного обеспечения с использованием базы данных PostgreSQL. Проведение индивидуальных и групповых занятий по основам работы с PostgreSQL, включая создание, управление и оптимизацию баз данных. Обучение написанию эффективных SQL-запросов, настройке индексов и созданию сложных операций с данными. Реализация методов резервного копирования, восстановления данных и управления безопасностью базы. Анализ данных с помощью встроенных функций PostgreSQL и интеграция с другими инструментами анализа для решения прикладных задач",
    superset: "Разработка дашбордов и визуализаций данных с использованием Apache Superset. Проведение занятий по программам: Основы работы с BI-системами; Создание интерактивных дашбордов в Apache Superset; Визуализация и анализ данных с помощью Apache Superset; Интеграция Apache Superset с базами данных для работы с большими объемами данных."
};

// Функция отображения или скрытия описания
function showSkillDescription(skill, element) {
    const container = document.querySelector(".skills-container");

    // Если элемент уже активен, удаляем описание и сбрасываем состояние
    if (element.classList.contains("active")) {
        const previousDescription = document.querySelector(".description");
        if (previousDescription) {
            previousDescription.remove(); // Удаляем описание
        }
        element.classList.remove("active"); // Сбрасываем состояние
        return; // Завершаем выполнение функции
    }

    // Удаляем существующий блок описания
    const previousDescription = document.querySelector(".description");
    if (previousDescription) {
        previousDescription.remove();
    }

    // Сбрасываем состояние всех элементов
    document.querySelectorAll(".skill").forEach((skill) => {
        skill.classList.remove("active");
    });

    // Добавляем "active" к текущему элементу
    element.classList.add("active");

    // Создаем блок описания
    const description = document.createElement("div");
    description.classList.add("description");

    const img = document.createElement("img");
    img.src = element.querySelector("img").src; // Берем картинку из текущего элемента
    img.alt = element.querySelector("img").alt;

    const text = document.createElement("div");
    text.classList.add("description-text");
    text.textContent = skillDescriptions[skill];

    description.appendChild(img);
    description.appendChild(text);

    // Вставляем описание после текущего элемента
    const index = Array.from(container.children).indexOf(element);
    container.insertBefore(description, container.children[index + 1]);
}