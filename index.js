var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Somesh",
    score: 5,
  },

  {
    name: "Franco",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Who's known as THE DOCTOR in MotoGP?",
  answer: "Valentino Rossi"
}, {
  question: "Who's known as Rocket in MotoGP?",
  answer: "Maverick  Vinales"
},
{
  question: "How many world championship has Marc Marquez won?",
  answer: "8"
},
{
  question: "Who has won 5 world championships ?",
  answer: "Jorge Lorenzo "
},
{
  question: "Who has won 2020 world championship ?",
  answer: "Joan Mir "
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "let's see if you know MotoGP");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();