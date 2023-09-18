// create variables
var timeLeft = 60;
var questions = ["What is CSS used for?", "what coding language would you use for stucture?", "How would you target HTML elements in CSS", "what is JavaScript use for?"]
var answers = [['structure','styling','function', 'format'],['JavaScript','CSS','HTML','Jquerry'], ['attributes', 'elements', 'comments', 'tags'], ['structure','styling','function', 'format']]
var correctAnswers = [1, 2, 0, 2]
var currentQuestion = 0
var currentScore = 0
var leaderBoard = []

var startQuiz = function(){
    currentQuestion = 0
    currentScore = 0
    var firstDiv = document.getElementById("begin")
    firstDiv.style.visibility = "hidden";

    var middleDiv = document.getElementById("middle")
    middleDiv.style.visibility = "visible";

    var thirdDiv = document.getElementById("end")
    thirdDiv.style.visibility = "hidden";

    var lastDiv = document.getElementById("complete")
    lastDiv.style.visibility = "hidden";

    var leaderboardScore = document.getElementById("last")
    leaderboardScore.innerHTML = ""
    getQuestion()

}


var getQuestion = function (){
    var textToDisplay = questions[currentQuestion];
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = textToDisplay;
  var choice0 = document.getElementById("Question0")
  choice0.textContent = answers[currentQuestion][0]

  var choice1 = document.getElementById('Question1')
  choice1.textContent = answers[currentQuestion][1]

  var choice2 = document.getElementById('Question2')
  choice2.textContent = answers[currentQuestion][2]

  var choice3 = document.getElementById('Question3')
  choice3.textContent = answers[currentQuestion][3]
}

var selectAnswer = function (question){
  var isTrue = question == correctAnswers[currentQuestion]
  if (isTrue) {
    currentScore = currentScore + 1
  }
  currentQuestion = currentQuestion + 1

  if (currentQuestion >= questions.length) {
    var firstDiv = document.getElementById("begin")
    firstDiv.style.visibility = "hidden";
    
    var middleDiv = document.getElementById("middle")
    middleDiv.style.visibility = "hidden";

    var thirdDiv = document.getElementById("end")
    thirdDiv.style.visibility = "visible";

    var lastDiv = document.getElementById("complete")
    lastDiv.style.visibility = "hidden";

  } else {
    getQuestion()
  }}

var submit = function(){
    var completedSubmition = document.getElementById('name')

    var textContent = completedSubmition.value 
    leaderBoard.push(textContent + ': ' + currentScore)

    var LeaderboardScore = document.getElementById("last")
    for (var i = 0; i < leaderBoard.length; i++){
        LeaderboardScore.innerHTML = LeaderboardScore.innerHTML + leaderBoard[i] + '\n';
    }
    var firstDiv = document.getElementById("begin")
    firstDiv.style.visibility = "hidden";
    
    var middleDiv = document.getElementById("middle")
    middleDiv.style.visibility = "hidden";

    var thirdDiv = document.getElementById("end")
    thirdDiv.style.visibility = "hidden";

    var lastDiv = document.getElementById("complete")
    lastDiv.style.visibility = "visible";
}


//   creating variables for each question?
// use boolean for proving correct answers?
// repetition of if statements copy paste edit?
// are we using if else statements
// what do we use for counting down time?
// using localStorage to log scores
// setting up user identification ie (username and password)
// creating a start button with click action
// are we using for loops?
// creating arrays?

 