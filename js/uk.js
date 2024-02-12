document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const questionH1 = document.getElementById("questionH1");
    const responseMessage = document.getElementById("responseMessage");

    const questions = [
        "Ти впевнена?",
        "Ти дійсно впевнена??",
        "Ти дійсно-дійсно впевнена???",
        "Подумай ще раз?",
        "Не віриш в другі шанси?",
        "Чому ти така холодна? 😢",
        "Можливо, ми можемо поговорити про це?",
        "Я не буду це повторювати! 😡",
        "Добре, тепер це образило мої почуття! 😭",
        "Ти зараз просто жорстока! 😭",
        "Чому ти це робиш? 😭",
        "Будь ласка, дай мені шанс! 🙏",
        "Прошу, зупини це! 🙏",
    ];

    let questionIndex = 0;

    yesButton.addEventListener("click", function () {
        noButton.style.display = "none";
        yesButton.style.display = "none";
        questionH1.style.display = "none";

        // Додайте код для додавання гіфки
        const gifImage = document.createElement("img");
        gifImage.src =
            "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseMessage.appendChild(gifImage);

        // Додайте текст під гіфку
        const textBelowGif = document.createElement("p");
        textBelowGif.innerText = "Уууураа, до зустрічііі ❤️";
        responseMessage.appendChild(textBelowGif);
    });

    noButton.addEventListener("click", function () {
        noButton.innerText = questions[questionIndex];
        questionIndex = (questionIndex + 1) % questions.length;

        // Збільшити розмір кнопки "Так", але не більше розміру екрану
        const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        const newFontSize = currentFontSize * 1.2;

        // Перевірка розміру екрану
        const maxWidth = window.innerWidth;
        if (newFontSize < maxWidth) {
            yesButton.style.fontSize = newFontSize + "px";
        }
    });
});
