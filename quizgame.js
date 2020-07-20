function initialize() {
    startContainer.style.display = "block"
    quizContainer.style.display = "none";
    scoreContainer.style.display = "none";
}

function showQuiz(){
    quizContainer.style.display = "block";
    startContainer.style.display = "none";
    scoreContainer.style.display = "none";
}

function showScoreBoard(){
    startContainer.style.display = "none";
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
}

var currentQuestionIndex;

function startQuiz(){

    showQuiz();
    startTimer();
    currentQuestionIndex = 0;
    setQuestion(questions[currentQuestionIndex]);

}
function endQuiz(){
    stopTimer()
    showScoreBoard()
}

var interval;
var remainingSeconds;

function startTimer(){
    remainingSeconds = 60;
    remainingSecondsSpan.textContent= remainingSeconds;
    interval = setInterval(function(){
        remainingSeconds--;
        remainingSecondsSpan.textContent= remainingSeconds;
        if(remainingSeconds <= 0){
            endQuiz()
        }
    
    },1000);

}
function wrongAnswer(){
    remainingSeconds-= 5;
        remainingSecondsSpan.textContent= remainingSeconds;
        if(remainingSeconds <= 0){
            endQuiz()
        }

}

function stopTimer(){
    clearInterval(interval)
}

var startContainer = document.getElementById("start-container");
var quizContainer = document.getElementById("quiz-container");
var scoreContainer = document.getElementById("score-container");
var remainingSecondsSpan = document.getElementById("remaining-seconds");
var question = document.getElementById("question");
var answerA = document.getElementById("button1");
var answerB = document.getElementById("button2");
var answerC = document.getElementById("button3");
var answerD = document.getElementById("button4");

function setQuestion(currentQuestion){
    question.innerHTML=currentQuestion.question;
    answerA.textContent=currentQuestion.answer[0].text;
    answerB.textContent=currentQuestion.answer[1].text;
    answerC.textContent=currentQuestion.answer[2].text;
    answerD.textContent=currentQuestion.answer[3].text;

}
var score = 0;

function selectAnswer(answerIndex){
    if(questions[currentQuestionIndex].answer[answerIndex].correct){
    alert("correct")
    score++
}else{
    wrongAnswer()
    alert("incorrect")
}
currentQuestionIndex++
if(currentQuestionIndex > 4){
    endQuiz()
};
setQuestion(questions[currentQuestionIndex]);

};

var questions = [
{ question: "What does CSS stand for?",
   answer:[
       {text: "cascading style sheet", correct: true},
       {text: "custom skateboard store", correct: false},
       {text: "cyber science stuff", correct: false},
       {text: "computer science stuff", correct: false}
   ]},
   { question: "What is the first index position of an array?",
   answer:[
       {text: "-1", correct: false},
       {text: "0", correct: true},
       {text: "100", correct: false},
       {text: "10", correct: false}
   ]},
   { question: "How do you select a class in CSS?",
   answer:[
       {text: "2", correct: false},
       {text: "#", correct: false},
       {text: "&", correct: false},
       {text: ".", correct: true}
   ]},
   { question: "Which is not a type of loop in Javascript?",
   answer:[
       {text: "fruit", correct: true},
       {text: "while", correct: false},
       {text: "for", correct: false},
       {text: "do while", correct: false}
   ]},
   { question: "Learning Javasript is ___________?",
   answer:[
       {text: "easy", correct: false},
       {text: "difficult", correct: true},
       {text: "imposible", correct: false},
       {text: "physically painful", correct: true}
   ]}
]

var totalScore = document.getElementById("final-score")
function showScoreBoard(){
    var totalScore = score
    console.log(totalScore)
    alert("You got " + score + "out of 5")
}

