document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const messageDiv = document.getElementById('message');

    // Загружаем данные профиля из локального хранилища при загрузке страницы
    loadProfileData();

    // Обработчик отправки формы
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Сохраняем данные профиля в локальное хранилище
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Отображаем сообщение об успешном сохранении
        messageDiv.textContent = 'Дані профілю успішно збережено!';
        messageDiv.style.color = 'green';
    });

    // Функция для загрузки данных профиля из локального хранилища
    function loadProfileData() {
        const savedUsername = localStorage.getItem('username');
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedUsername) {
            document.getElementById('username').value = savedUsername;
        }
        if (savedEmail) {
            document.getElementById('email').value = savedEmail;
        }
        if (savedPassword) {
            document.getElementById('password').value = savedPassword;
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const messageDiv = document.getElementById('message');
    const saveButton = document.getElementById('saveButton');

    // Загружаем данные профиля из локального хранилища при загрузке страницы
    loadProfileData();

    // Обработчик отправки формы
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Сохраняем данные профиля в локальное хранилище
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Отображаем сообщение об успешном сохранении
        messageDiv.textContent = 'Дані профілю успішно збережено!';
        messageDiv.style.color = 'green';
    });

    // Обработчик для кнопки сохранения
    saveButton.addEventListener('click', () => {
        const nameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (nameInput && emailInput) {
            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;

            // Сохраняем данные в localStorage
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);

            alert('Дані збережено!');
        } else {
            console.error('Єлементів для входу в аккаунт не знайдено');
        }
    });

    // Функция для загрузки данных профиля из локального хранилища
    function loadProfileData() {
        const savedUsername = localStorage.getItem('username');
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (usernameInput && savedUsername) {
            usernameInput.value = savedUsername;
        }
        if (emailInput && savedEmail) {
            emailInput.value = savedEmail;
        }
        if (passwordInput && savedPassword) {
            passwordInput.value = savedPassword;
        }
    }
});