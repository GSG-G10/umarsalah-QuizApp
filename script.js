const firstDiv = document.getElementById("main-page");
const secDiv = document.getElementById("sec-page");
const thirdDiv = document.getElementById("score-page");
const startButton = document.getElementById("start-btn");
const question = document.getElementById("question");
const nextQuestion = document.getElementById("next-btn");
const questionNumber = document.getElementById("q-num");
const choices = document.querySelectorAll(".btn");
let scoreText = document.getElementById("point");
let score = 0;
let qNum = 0;
startButton.addEventListener('click', startGame);

const questionsSet = [{
        //1
        question: " 5  + 7  - 2 * 3",
        correct: 6,
        answers: [8, 6, 22, 9]
    },
    {
        //2
        question: " 6 * 9 - 7 * 6",
        correct: 12,
        answers: [5, 7, 12, 10]
    },
    {
        //3
        question: " 5 + 8 + 9 - 8",
        correct: 14,
        answers: [12, 13, 14, 15]
    },
    {
        //4
        question: " 2 * 4 - 6 / 3",
        correct: 6,
        answers: [5, 7, 6, 4]
    },
    {
        //5
        question: " 2 * 8 + 7 * 3",
        correct: 37,
        answers: [37, 27, 31, 35]
    },
    {
        //6
        question: " 5- 8 - 7 + 10",
        correct: 0,
        answers: [0, 10, -10, 1]
    },
    {
        //7
        question: " 7 * 5 - 8 * 2",
        correct: 25,
        answers: [25, 27, 35, 42]
    },
    {
        //8
        question: " 2 * 9 * 0 + 9 * 6",
        correct: 54,
        answers: [54, 0, 72, 10]
    },
    {
        //9
        question: " 6 * 3 + 26 - 4",
        correct: 40,
        answers: [40, 22, 18, 44]
    },
    {
        //10
        question: " 2 * 8 - 0 / 4",
        correct: 16,
        answers: [16, 0, 12, 10]
    }
]

function startGame() {
    firstDiv.classList.remove('show');
    firstDiv.classList.add('hide');
    secDiv.classList.add("show");
    question.innerHTML = questionsSet[0].question;
    questionNumber.innerHTML = "0/9";
    showAnswers();
    // qNum++;
}

nextQuestion.addEventListener('click', setNextQuestion);

function setNextQuestion() {
    qNum++;
    if (qNum > 9) {
        thirdDiv.classList.remove('hide')
        thirdDiv.classList.add('show');
        secDiv.classList.remove('show');
        correctAnswers();
    } else
        questionNumber.innerHTML = `${qNum}/9`;

    question.innerHTML = questionsSet[qNum].question;
    showAnswers();
}

function showAnswers() {
    choices.forEach((e, index) => {
        e.textContent = questionsSet[qNum].answers[index];
    })
}


choices.forEach(e => {
    e.addEventListener('click', btn => {
        console.log({ qNum })
        if (e.textContent == (questionsSet[qNum].correct)) {
            score++;
            console.log(e.textContent)
        }
        scoreText.textContent = `${score}/10`;
    })
})