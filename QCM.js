// Pool of questions (you can add more questions here)
const questions = [
    {
        question: "Who is Bayern Munich's all-time top scorer?",
        answers: ["Robert Lewandowski", "Gerd Müller", "Thomas Müller", "Karl-Heinz Rummenigge"],
        correctAnswerIndex: 1 // Index of the correct answer (Gerd Müller)
    },
    {
        question: "How many Champions League titles has Bayern Munich won?",
        answers: ["3", "5", "6", "7"],
        correctAnswerIndex: 2 // Index of the correct answer (6)
    },
    {
        question: "What is Bayern Munich's nickname?",
        answers: ["Die Roten", "Die Mannschaft", "Der FCB", "Die Adler"],
        correctAnswerIndex: 0 // Index of the correct answer (Die Roten)
    },
];

// DOM elements
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const nextQuestionBtn = document.getElementById("next-question-btn");

// Current question index
let currentQuestionIndex = -1;

// Function to load a random question
function loadRandomQuestion() {
    // Get a random question index
    currentQuestionIndex = Math.floor(Math.random() * questions.length);

    // Get the selected question
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question text
    questionText.textContent = currentQuestion.question;

    // Clear previous answers and add new ones
    answersContainer.innerHTML = "";
    
    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement("button");
        answerBtn.className = "answer-btn";
        answerBtn.textContent = answer;

        // Add click event listener to check if the answer is correct
        answerBtn.addEventListener("click", () => checkAnswer(index));

        answersContainer.appendChild(answerBtn);
    });

    // Hide the next button until an answer is selected
    nextQuestionBtn.style.display = "none";
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswerIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
        alert("Correct! 🎉");
    } else {
        alert("Wrong! ❌");
    }

    // Show the next question button after answering
    nextQuestionBtn.style.display = "block";

    // Disable all answer buttons after selection
    disableAnswers();
}

// Function to disable all answer buttons
function disableAnswers() {
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.disabled = true;
        button.style.opacity = 0.6;
        button.style.cursor = "not-allowed";
    });
}

// Event listener for the Next Question button
nextQuestionBtn.addEventListener("click", () => {
    loadRandomQuestion();
});

// Load the first question when the page loads
loadRandomQuestion();
