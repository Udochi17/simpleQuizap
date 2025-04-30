const quesBox = document.querySelector('#ques-box');
const buttonOptions = document.querySelectorAll('.option-button');
const opt1 = document.querySelector('#opt-1');
const opt2 = document.querySelector('#opt-2');
const opt3 = document.querySelector('#opt-3');
const opt4 = document.querySelector('#opt-4');
const scoreText = document.querySelector('.score-text');
const scoreBoard = document.querySelector('.scoreBoard');
const containerDiv = document.querySelector('.container');
const nextBtn = document.querySelector('.next-btn');

const questionArr = [
    {
        question: "Who painted the “Mona Lisa”?",
        answers: [
            { text: 'William Shakespeare', correct: false },
            { text: 'Augutine Rodin', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Leonardo DiCaprio', correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: 'Brittany', correct: false },
            { text: 'Johannesburg', correct: false },
            { text: 'Paris', correct: true },
            { text: 'occitania', correct: false },
        ]
    },
    {
        question: "Which is the Smallest continent in the World",
        answers: [
            { text: 'Nigeria', correct: false },
            { text: 'Asia', correct: false },
            { text: 'Johannesburg', correct: false },
            { text: 'Australia', correct: true },
        ]
    },
    {
        question: "Mount Everest is located in which mountain range?",
        answers: [
            { text: 'The Himalayas', correct: true },
            { text: 'The Transhimalayas', correct: false },
            { text: 'The Karakoram', correct: false },
            { text: 'The Alaska Range', correct: false },
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: 'Homo sapiens', correct: false },
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Shark', correct: false },
        ]
    },
]
let score = 0;
let counter = 0;

/* Function to display question */

function displayQuestion() {
    console.log("displayQuestion", counter);

    const { question, answers } = questionArr[counter];
    const [option1, option2, option3, option4] = answers;

    quesBox.textContent = question;

    opt1.textContent = option1.text;
    opt1.dataset.correct = option1.correct;

    opt2.textContent = option2.text;
    opt2.dataset.correct = option2.correct;

    opt3.textContent = option3.text;
    opt3.dataset.correct = option3.correct;

    opt4.textContent = option4.text;
    opt4.dataset.correct = option4.correct;


}

/* function to display user score when user has answered five questions */
function displayScore() {

    containerDiv.classList.toggle('hidden');
    scoreBoard.classList.toggle('hidden');

    scoreText.textContent = `You scored ${score} out of ${questionArr.length}`;
}

/* function to move display next question when the user clicks on next */

function nextQuestion() {
    if (counter == 4) {
        displayScore();
        counter = 0;
    } else {
        counter++;
        displayQuestion();
    }


    buttonArr.forEach(opts => {
        opts.disabled = false;
        opts.classList.remove('green', 'red');
    });

    nextBtn.classList.toggle('hidden');
}

nextBtn.addEventListener('click', nextQuestion)

/*function to restart game after user score has been displayed */
function restart() {
    counter = 0;
    score = 0;
    displayQuestion();

    containerDiv.classList.toggle('hidden');
    scoreBoard.classList.toggle('hidden');

    console.log("displayQuestion and restart", counter);

}

document.querySelector('.restart').addEventListener('click', restart);

/* function to handling click events on buttons */

const buttonArr = Array.from(buttonOptions);

buttonArr.forEach(option => {
    option.addEventListener('click', () => {

        nextBtn.classList.toggle('hidden');

        if (option.dataset.correct == 'true') {
            score++;
            option.classList.add('green');
        } else {
            option.classList.add('red');
        }

        buttonArr.forEach(opts => {
            opts.disabled = true;
        });

    });

    /* if (option.dataset.correct == 'true') {
        console.log('code ran for if', option.dataset.correct);

        option.addEventListener('click', () => {
            console.log('code ran for if and entered event', option.dataset.correct);
            option.classList.add('green');
            score++;
            buttonArr.forEach(opts => {
                opts.disabled = true;
            });

            nextBtn.classList.toggle('hidden');
        })
    } else {
        console.log('code ran for else', option.dataset.correct);

        option.addEventListener('click', () => {
            console.log('code ran for else and entered listener', option.dataset.correct);
            option.classList.add('red');
            buttonArr.forEach(opts => {
                opts.disabled = true;
            });
            nextBtn.classList.toggle('hidden');
        })
    } */

});

displayQuestion();
