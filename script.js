
const questions = [
    {
        Question: "Who is the develper of this game ?",
        Anwsers: [
            { text: "MJ Abbasi", correct: true },
            { text: "Elon musk", correct: false },
            { text: "Newton", correct: false },
            { text: "Bill gate", correct: false },
        ]
    },
    {
        Question: "What is the largest ocean in the world?",
        Anwsers: [
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
        ]
    },
    {
        Question: "What is the national flower of Pakistan?",
        Anwsers: [
            { text: "Rose", correct: false },
            { text: "Tulip", correct: false },
            { text: "Jasmine", correct: true },
            { text: "Lily", correct: false },
        ]
    },
    {
        Question: "Which is the largest planet in the Solar System?",
        Anwsers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
        ]
    },
    {
        Question: "Who discovered gravity?",
        Anwsers: [
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false },
        ]
    },
    {
        Question: "What is the capital of France?",
        Anwsers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        Question: "Which planet is known as the Red Planet?",
        Anwsers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Mercury", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        Question: "What is the smallest continent in the world?",
        Anwsers: [
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false },
            { text: "South America", correct: false },
        ]
    },
    {
        Question: "In which year did Pakistan gain independence?",
        Anwsers: [
            { text: "1945", correct: false },
            { text: "1947", correct: true },
            { text: "1948", correct: false },
            { text: "1950", correct: false },
        ]
    },
    {
        Question: "Who is the national poet of Pakistan?",
        Anwsers: [
            { text: "Faiz Ahmed Faiz", correct: false },
            { text: "Allama Iqbal", correct: true },
            { text: "Mirza Ghalib", correct: false },
            { text: "Josh Malihabadi", correct: false },
        ]
    },
    {
        Question: "What is the symbol of the Pakistani Rupee?",
        Anwsers: [
            { text: "Rs", correct: true },
            { text: "$", correct: false },
            { text: "€", correct: false },
            { text: "£", correct: false },
        ]
    },
    {
        Question: "What is the fastest land animal?",
        Anwsers: [
            { text: "Lion", correct: false },
            { text: "Tiger", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Leopard", correct: false },
        ]
    },
    {
        Question: "What is the longest river in the world?",
        Anwsers: [
            { text: "Amazon River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Mississippi River", correct: false },
        ]
    },
    {
        Question: "What is the name of the process plants use to make food?",
        Anwsers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Digestion", correct: false },
            { text: "Evaporation", correct: false },
        ]
    },
    {
        Question: "Who invented the first computer?",
        Anwsers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: false },
        ]
    },
    {
        Question: "What is the largest organ in the human body?",
        Anwsers: [
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Liver", correct: false },
            { text: "Brain", correct: false },
        ]
    },
    {
        Question: "Which gas is essential for breathing?",
        Anwsers: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        Question: "The sun rises in which direction?",
        Anwsers: [
            { text: "North", correct: false },
            { text: "East", correct: true },
            { text: "West", correct: false },
            { text: "South", correct: false },
        ]
    },
    // Continue till 55 questions
];







const quustionElement = document.getElementById("question");
const anwserbutten = document.getElementById("anwser-butten");
const nextbutten = document.getElementById("next-btn");

let currentQuestonIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestonIndex = 0;
    score = 0;
    nextbutten.innerHTML = "Next";
    nextbutten.style.display = "block";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQueston = questions[currentQuestonIndex];
    let questionNo = currentQuestonIndex + 1;
    quustionElement.innerHTML = questionNo + ". " + currentQueston.Question;

    currentQueston.Anwsers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        anwserbutten.appendChild(button);
    });
}

function resetState() {
    nextbutten.style.display = "none";
    while (anwserbutten.firstChild) {
        anwserbutten.removeChild(anwserbutten.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        score++;
    }
    Array.from(anwserbutten.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        button.disabled = true;
    });
    nextbutten.style.display = "block";
}

function handleNextButton() {
    currentQuestonIndex++;
    if (currentQuestonIndex < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    resetState();
    quustionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    const tryAgainButton = document.createElement("button");
    tryAgainButton.innerHTML = "Try Again";
    tryAgainButton.classList.add("btn");
    tryAgainButton.style.marginTop = "20px";
    tryAgainButton.addEventListener("click", startQuiz);

    anwserbutten.appendChild(tryAgainButton); // Append the Try Again button
}

nextbutten.addEventListener("click", () => {
    if (currentQuestonIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
