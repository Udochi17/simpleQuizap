const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById('next-btn');

const questions = [
    {
        question: "Which is the Largest Animal in the World",
        answers: [
            { text: 'Shark', correct: false, option: "A" },
            { text: 'Shar', correct: false, option: "B" },
            { text: 'Sha', correct: true, option: "C" },
            { text: 'Shaerk', correct: false, option: "D" },
        ]
    },
    {
        question: "Which is the Largest Desert in the World",
        answers: [
            { text: 'Blue ball', correct: false, option: "A" },
            { text: 'Shar', correct: false, option: "B" },
            { text: 'Sha', correct: true, option: "C" },
            { text: 'Shaerk', correct: false, option: "D" },
        ]
    },
    {
        question: "Which is the Smallest continent in the World",
        answers: [
            { text: 'Blue ball', correct: false, option: "A" },
            { text: 'Asia', correct: false, option: "B" },
            { text: 'Sha', correct: false, option: "C" },
            { text: 'Shaerk', correct: true, option: "D" },
        ]
    },
    {
        question: "Which is the Largest move in the World",
        answers: [
            { text: 'Blue ball', correct: true, option: "A" },
            { text: 'master mind', correct: false, option: "B" },
            { text: 'Sha', correct: false, option: "C" },
            { text: 'Shrekk', correct: false, option: "D" },
        ]
    },
    {
        question: "Which is the smallest mind in the World",
        answers: [
            { text: 'Blue ball', correct: false, option: "A" },
            { text: 'master mind', correct: false, option: "B" },
            { text: 'Not mine', correct: true, option: "C" },
            { text: 'Shaerk', correct: false, option: "D" },
        ]
    },
]

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
};

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option + ". " + answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
};

const resetState = () => {
    nextBtn.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
};

const selectAnswer = e => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
};

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

const hanndleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        hanndleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
