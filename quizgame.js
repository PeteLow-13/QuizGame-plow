
var score = 0
var question = document.getElementById("question")
var answerA = document.getElementById("button1")
var answerB = document.getElementById("button2")
var answerC = document.getElementById("button3")
var answerD = document.getElementById("button4")
var button = document.getElementsByClassName("answer")
var questionIndex = 0  
var correct = true
var timeLeft = document.querySelector(".timer");
var secondsLeft = 10
var startButton = document.querySelector("#start")
    startButton.addEventListener("click", beginQuiz);




function beginQuiz() {
    newQuestion()
    // startTime()
    for(var i = 0; i < questions[questionIndex].answer.length; i++){
        button[i].addEventListener("click", function(){
            questionIndex++
            console.log('questionIndex: ', questionIndex)
            newQuestion()
            if(questions[questionIndex].answer[i].correct){
                alert ("correct")
                myScore() = score++
            }else{
                alert("Incorrect")
            }
            console.log(newQuestion)
            
            //else false take off time
        })
        // console.log(questionIndex)
    }
    // button.addEventListener("click", nextQuestion)
    console.log(questionIndex)       
    
}

function myScore(){
    document.getElementById("score")
    console.log(myScore)
}

function newQuestion(){
    // if(question > 4){
    //     alert ("Your score is  " + myScore + "/5")
    // }

    
    question.innerHTML = questions[questionIndex].question;
    answerA.innerHTML = questions[questionIndex].answer[0].text;
    answerB.innerHTML = questions[questionIndex].answer[1].text;
    answerC.innerHTML = questions[questionIndex].answer[2].text;
    answerD.innerHTML = questions[questionIndex].answer[3].text;

}


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
var saveScore = ""
function saveScore(){
    prompt("add your initials to save your score")
    //display on scoreboard ( save score + myScore + "/5")

}


// const newInterval=setInterval(function(){
//     console.log('Hello');
//   }, 1000);
// function startTime() {
// var timerInterval = setInterval(function() {
//     time--;
//     timeLeft.textContent = secondsLeft + " seconds left.";
  
//       if(time === 0) {
//         clearInterval(timerInterval);
//         sendMessage("times up");
//       }
  
//     }, 1000);
//   }
    // for(var i = 0; i < questions[questionIndex].answer.length; i++){
    //     button[i].addEventListener("click", nextQuestion)
    //     console.log(questionIndex)
    // }
    // // button.addEventListener("click", nextQuestion)
    // console.log(questionIndex)

// function nextQuestion(){
//     questionIndex++
// console.log(questionIndex)
// }