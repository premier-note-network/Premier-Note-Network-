
document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.getElementById("chat-toggle");
    const chatWindow = document.getElementById("chat-window");
    const chatForm = document.getElementById("chat-form");
    const chatLog = document.getElementById("chat-log");

    chatToggle.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
    });

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInput = document.getElementById("chat-input").value.trim();
        if (userInput === "") return;

        appendMessage("You", userInput);
        document.getElementById("chat-input").value = "";

        // Simulated AI reply (replace with real API call)
        setTimeout(() => {
            appendMessage("AI", "Thanks for reaching out! A real response would go here.");
        }, 800);
    });

    function appendMessage(sender, text) {
        const message = document.createElement("div");
        message.className = "chat-message";
        message.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatLog.appendChild(message);
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});
