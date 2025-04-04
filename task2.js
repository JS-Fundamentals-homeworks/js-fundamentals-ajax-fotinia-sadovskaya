// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("userNameInput");
    const button = document.getElementById("getUserButton");
    const userCitySpan = document.getElementById("userCity");

    button.addEventListener("click", async () => {
        const userName = input.value.trim(); // Отримуємо значення введеного імені

        if (!userName) {
            userCitySpan.textContent = "⚠️ Enter your username!";
            return;
        }

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const users = await response.json();
            const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());

            if (user) {
                userCitySpan.textContent = `🏙️ City: ${user.address.city}`;
            } else {
                userCitySpan.textContent = "❌ User not found!";
            }

        } catch (error) {
            console.error("❌ Error retrieving data!:", error);
            userCitySpan.textContent = "❌ An error occurred during the request!";
        }
    });
});
