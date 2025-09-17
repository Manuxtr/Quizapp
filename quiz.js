const questions=[
    {
        question: "what is the name of the institution holding this coding camp?",
        answers:[
            {text:"earlycode", correct:true},
            {text:"latecode", correct:false},
            {text:"nomancode", correct:false},
            {text:"new housecode", correct:false}
        ]
    },
    {
        question: "which of these is a mammal?",
        answers:[
            {text:"octopus", correct:false},
            {text:"elephant", correct:true},
            {text:"fish", correct:false},
            {text:"mosquitos", correct:false}
        ]
    },
    {
        question: "what is the baby of a cat  called",
        answers:[
            {text:"tiger", correct:false},
            {text:"puppy", correct:false},
            {text:"kitten", correct:true},
            {text:"cub", correct:false}
        ]
    },
    {
        question: "what is the baby of a dog called",
        answers:[
            {text:"mango", correct:false},
            {text:"chick", correct:false},
            {text:"puppy", correct:true},
            {text:"cub", correct:false}
        ]
    },
    {
        question: "which is of these is used in programing",
        answers:[
            {text:"ktml", correct:false},
            {text:"css", correct:true},
            {text:"mcc", correct:false},
            {text:"mtlv", correct:false}
        ]
    },   
    
]

const questionElement=document.getElementById("quiz-questions");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
const scoreDisplay=document.getElementById("score-display")

// create variable for question index and score
let currentQuestionIndex=0;
let score=0

// function to display score
function updateScoreDisplay(){
    scoreDisplay.textContent=`Score:${score}`
    scoreDisplay.style.display="block";
}

// function to start quiz
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    nextButton.style.backgroundColor="green"

    updateScoreDisplay();
    showQuestion()
}

// function to show question
function showQuestion(){
    resetQuiz();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=`${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)

        // for choosing correct answer
        if(answer.correct){
            button.dataset.correct="true";
        }
        button.addEventListener("click",selectAnswer);

    }) 
}
// function to select answer
function selectAnswer(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct ==="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
        updateScoreDisplay();
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        // to disable the button after selection
        button.disabled=true;
    }) 
    nextButton.style.display="block"
};  
function goToNextQuestion(){
    currentQuestionIndex ++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
        nextButton.style.display="block";
    }else{
        showScore();
    }
};
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        goToNextQuestion()
    }else{
        startQuiz()
    }
});

// function to showscore
function showScore(){
    resetQuiz();
    questionElement.innerHTML=`hey champ you scored ${score} out of ${questions.length}!!!`
    nextButton.innerHTML.display="block";
};

// function to reset quiz
function resetQuiz(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
};

startQuiz()