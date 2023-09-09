const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answerContainer = document.querySelector(".answers-container")
const $questionsText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
   resetState()

   if (questions.length === currentQuestionIndex) {
       return finishGame()
   }

    $questionsText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answerContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    while($answerContainer.firstChild) {
        $answerContainer.removeChild($answerContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
            totalCorrect++
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente :)"
            break
        case (performance >= 70):
            message = "Muito bom"
            break
        case (performance >= 50):
            message = "Bom"
            break
        default:
            message = "Cê é burro"
    }

    $questionsContainer.innerHTML = 
    `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestions} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick =window.location.reload() class="button">
            Refazer teste
        </button>
    `
}



















const questions = [
    {
        question: "Qual dessas cores é primária?", answers: [
            { text: "Vermelho", correct: true }, 
            { text: "Água", correct: false },
            { text: "Roxo", correct: false },
            { text: "Preto", correct: false }
        ]
    }, 
    {
        question: "Qual dessas cores é secundária?", answers: [
            { text: "Amarelo", correct: false }, 
            { text: "Rosa", correct: false }, 
            { text: "Verde", correct: true },
            { text: "Azul", correct: false }
        ]
    }, 
    {
        question: "Qual dessas cores é terciária", answers: [
            { text: "Azul Esverdeado", correct: true },
            { text: "Branco", correct: false },
            { text: "Rosa", correct: false },
            { text: "Preto", correct: false }
        ]
    }, 
    {
        question: "Qual é essa cor: RGB(255, 0, 0)?", answers: [
            { text: "Castanho", correct: false }, 
            { text: "Azul", correct: false },
            { text: "Amarelo Alaranjado", correct: false },
            { text: "Vermelho", correct: true }
        ]
    }, 
    {
        question: "Qual é essa cor: RGB(0, 0, 0)?", answers: [
            { text: "Branco", correct: false },
            { text: "Preto", correct: true },
            { text: "Laranja", correct: false },
            { text: "Verde", correct: false }
        ]
    }, 
    {
        question: "Qual é essa cor: RGB(0, 255, 0)?", answers: [
            { text: "Amarelo", correct: false }, 
            { text: "Verde Azulado", correct: false }, 
            { text: "Verde", correct: true },
            { text: "Rosa", correct: false }
        ]
    }, 
    {
        question: "Qual é essa cor: RGB(0, 0, 255)?", answers: [
            { text: "Marrom", correct: false }, 
            { text: "Cinza", correct: false }, 
            { text: "Cor de pele", correct: false },
            { text: "Azul", correct: true }
        ]
    },   

    {
        question: "Qual é essa cor: RGB(255, 255, 255)?", answers: [
            { text: "Ameixa", correct: false }, 
            { text: "Branco", correct: true }, 
            { text: "Limão", correct: false },
            { text: "Ouro", correct: false }
        ]
    },
    
    {
        question: "Qual é dessas cores combinam?", answers: [
            { text: "Vermelho e Marfim ", correct: false }, 
            { text: "Marrom e Azul", correct: false }, 
            { text: "Cinza com Fúscia", correct: true },
            { text: "Rosa com Ouro", correct: false }
        ]
    }, 

    {
        question: "Qual é dessas cores não combinam?", answers: [
            { text: "Violeta e Marrom", correct: false }, 
            { text: "Lilás e Verde", correct: false }, 
            { text: "Azul e Vermelho", correct: false },
            { text: "Rosa com Ouro", correct: true }
        ]
    },   

    {
        question: "O que é DD?", answers: [
            { text: "Design Digital", correct: true }, 
            { text: "Dirty Diana", correct: false }, 
            { text: "Marca de shampoo", correct: false },
            { text: "Marca de guaraná", correct: false }
        ]
    },   

    {
        question: "Essas cores (#04DB4A, #3039DB, #1ADB59, #DB0904, #DBB41F) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Monocromático", correct: false }, 
            { text: "Dividir Complementar duas vezes", correct: false }, 
            { text: "Quadrado", correct: true },
            { text: "Composto", correct: false }
        ]
    }, 
    
    {
        question: "Essas cores (#741585, #300238, #a01db8, #310938, #b000d1) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Monocromático", correct: true }, 
            { text: "Dividir Complementar duas vezes", correct: false }, 
            { text: "Análoga", correct: false },
            { text: "Sombra", correct: false }
        ]
    }, 

    {
        question: "Essas cores (#FF3111, #C63DE0, #4F63F7, #3DE0D9, #4CF843) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Tríade", correct: false }, 
            { text: "Análoga", correct: true }, 
            { text: "Sombra", correct: false },
            { text: "Quadrado", correct: false }
        ]
    }, 

    {
        question: "Essas cores (#B59A3F, #756429, #F5D056, #362D13, #DBBB4D) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Dividir Complementar duas vezes", correct: false }, 
            { text: "Personalizado", correct: false }, 
            { text: "Sombra", correct: true },
            { text: "Tríade", correct: false }
        ]
    }, 

    {
        question: "Essas cores (#72F562, #4AF5A8, #F5D056, #F53DB5, #F56149) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Personalizado", correct: false }, 
            { text: "Monocromático", correct: false }, 
            { text: "Dividir Complementar duas vezes", correct: true },
            { text: "Composto", correct: false }
        ]
    }, 

    {
        question: "Essas cores (#7d66f2, #006100, #27a624, #f28735, #a6612d) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Tríade", correct: true }, 
            { text: "Quadrado", correct: false }, 
            { text: "Análoga", correct: false },
            { text: "Sombra", correct: false }
        ]
    }, 

    {
        question: "Essas cores (#55FAE7, #32615B, #18C74F, #D54F8A, #FA05EB) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Sombra", correct: false }, 
            { text: "Dividir Complementar", correct: false }, 
            { text: "Dividir Complementar duas vezes", correct: false },
            { text: "Composto", correct: true }
        ]
    }, 

    {
        question: "Essas cores (#3375A6, #3FA6F2, #F2CC33, #5B12A6, #8C27F2) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Tríade", correct: false }, 
            { text: "Dividir Complementar", correct: true }, 
            { text: "Personalizado", correct: false },
            { text: "Quadrado", correct: false }
        ]
    }, 

    {
        question: "Essas cores (#2CA83F, #3B28F5, #F3F494, #A9160E, #74F5F2) fazer parte de qual grupo de harmonia da cores?", answers: [
            { text: "Personalizado", correct: true }, 
            { text: "Monocromático", correct: false }, 
            { text: "Sombra", correct: false },
            { text: "Dividir Complementar", correct: false }
        ]
    }, 
]