// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

document.addEventListener("DOMContentLoaded", async () => {
    const usersList = document.querySelector(".usersList");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            usersList.appendChild(li);
        });

    } catch (error) {
        console.error("❌ Помилка при отриманні користувачів:", error);
    }
});
