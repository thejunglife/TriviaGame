// Trivia Game theme....... & questions
// NBA Trivia

let myQuestions = [
  {
    question: 'What NBA team has the most Championships?',
    choiceA: 'Los Angeles Lakers',
    choiceB: 'Chicago Bulls',
    choiceC: 'Boston Celtics',
    choiceD: 'Golden State Warriors',
    correctAnswer: 'c'
  },
  {
    question: 'Which player has won the most championships?',
    choiceA: 'Kobe Bryant', 
    choiceB: 'Micheal Jordan', 
    choiceC: 'Robert Horry', 
    choiceD: 'Bill Russell', 
    correctAnswer: 'd'
  },
  {
    question: 'Which NBA player has coined the phrase "Taco Tuesday" recently?',
    choiceA: 'Lebron James',
    choiceB: 'Steph Curry',
    choiceC: 'Kevin Durant',
    choiceD: 'James Harden',
    correctAnswer: 'a'
  },
  {
    question: 'How many 3 pointers has Ben Simmons made from 2017-2019?',
    choiceA: 100,
    choiceB: 0,
    choiceC: 87,
    choiceD: 3,
    correctAnswer: 0
  }


]

let correct = 0;
let wrong = 0;
let answer = '';
let userGuess = '';
let start = document.getElementById('startScreen');
let gameScreen = document.getElementById('gameScreen')
let questions = document.getElementById('questions')
let choiceA = document.getElementById('choiceA')
let choiceB = document.getElementById('choiceB')
let choiceC = document.getElementById('choiceC')
let choiceD = document.getElementById('choiceD')
let countDown = document.getElementById('countDown')
let score = document.getElementById('score')
let nextQuestion = 0;
let lastQuestion = myQuestions.length - 1
// timer
let count = 10
let questionTime = 0
let clock;

// begining screen that starts Trivia
const gameStart = function () {
  start.style.display = 'none';
  startQuiz();
  timer()
  clock = setInterval(timer, 1000) 

}
// button for gameStart
start.addEventListener('click', gameStart)

// takes us to questions page
let startQuiz = function() {
gameScreen.style.visibility = 'visible';
  let q = myQuestions[nextQuestion] 
  questions.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA
  choiceB.innerHTML = q.choiceB
  choiceC.innerHTML = q.choiceC
  choiceD.innerHTML = q.choiceD
};


// counter 
let timer = function() {
  if(count >= questionTime) {
    countDown.innerHTML = count;
    count--;
  } else {
    count = 10
    answerWrong()
    if (nextQuestion < lastQuestion) {
      nextQuestion++
      startQuiz()
  } else {
      clearInterval(clock)
      scoreBoard()
  }
}
}


// correct answer
let checkAnswer = function (answer) {
  if (answer === myQuestions[nextQuestion].correctAnswer) {
    correct++
    answerCorrect()

  } else {
   answerWrong()
  }
  count = 10;
  if(nextQuestion < lastQuestion) {
    nextQuestion++
    startQuiz()
  } else {
    clearInterval(clock)
    scoreBoard()
  }
}
// correct answer function
let answerCorrect = function () {
  document.getElementById('winner').innerHTML = 'Correct Answer!'

}
// wrong answer function
let answerWrong = function() {
  document.getElementById('loser').innerHTML = 'Wrong Answer!'
}

// Score board function
let scoreBoard = function() {
  score.style.display = 'block';

  const scorePercent = Math.round(100 * correct/myQuestions.length)
  score.innerHTML = `Your Score ${scorePercent}%!`
}





  



