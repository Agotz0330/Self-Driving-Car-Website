const quizData = [
    {
        question: "What technology uses ultraviolet light to create 3D mapping?",
        a: "RADAR",
        b: "LIDAR",
        c: "Video Camers",
        d: "GPS",
        correct: "b",
    },
    {
        question: "Whcih technology uses satellites?",
        a: "Video Cameras",
        b: "LIDAR",
        c: "GPS",
        d: "RADAR",
        correct: "c",
    },
    {
        question: "What percent of crashes are cause by human error?",
        a: "94%",
        b: "28%",
        c: "54%",
        d: "9.4%",
        correct: "a",
    },
    {
        question: "What could be considered a Con of self-driving cars?",
        a: "Human error",
        b: "Communication between the vehicles",
        c: "Reuced Traffic",
        d: "none of the above",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
