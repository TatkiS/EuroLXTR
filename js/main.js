// Функція для відкриття модального вікна
function openModal() {
    const modal = document.getElementById("myModal");
    modal.classList.add("show");
}

// Функція для закриття модального вікна
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.classList.remove("show");
}

// Функція для анімації секції
function animateSection(section, index) {
    setTimeout(() => {
        section.classList.add("visible");
    }, 100 * (index + 1));
}

// Додаємо клас для анімації, коли сторінка завантажується
document.addEventListener("DOMContentLoaded", function() {
    
    // Запуск функції відкриття модального вікна при натисканні на кнопку
    const openModalButton = document.getElementById("openModalButton");
    if (openModalButton) {
        openModalButton.addEventListener("click", openModal);
    }

    // Запуск функції закриття модального вікна при натисканні на кнопку
    const closeModalButton = document.getElementById("closeModalButton");
    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }

    // Анімація секцій
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.classList.add("invisible");
        section.addEventListener("transitionend", function() {
            this.classList.remove("invisible");
        });
        animateSection(section, index);
    });
});
