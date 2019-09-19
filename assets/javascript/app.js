// Trivia Game theme....... & questions
// NBA Trivia

let myQuestions = [
  {
    question: 'What NBA team has the most Championships?',

    answers: {
      a: 'Los Angeles Lakers',
      b: 'Chicago Bulls',
      c: 'Boston Celtics',
      d: 'Golden State Warriors'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Which player has won the most championships?',

    answers: {
      a: 'Kobe Bryant',
      b: 'Micheal Jordan',
      c: 'Robert Horry',
      d: 'Bill Russell'
    },
    correctAnswer: 'd'
  },
  {
    question: 'Which NBA player has coined the phrase "Taco Tuesday" recently?',

    answers: {
      a: 'Lebron James',
      b: 'Steph Curry',
      c: 'Kevin Durant',
      d: 'James Harden'
    },
    correctAnswer: 'a'
  },
  {
    question: 'How many 3 pointers has Ben Simmons made from 2017-2019?',

    answers: {
      a: 100,
      b: 0,
      c: 87,
      d: 3
    },
    correctAnswer: 'b'
  }

]

let correct = 0;
let wrong = 0;
let question = '';
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
let nextQuestion = 0;
let nextAnswer = 0;

// let timer = 10;
let count = 0
let timeLeft = 11

// begining screen that starts Trivia
const gameStart = function () {
  start.style.display = 'none';
  startQuiz();
}
// button for gameStart
start.addEventListener('click', gameStart)

// takes us to questions page
let startQuiz = function() {

  let q = myQuestions[nextQuestion] 
  timer()
  questions.innerHTML = q.question;
  choiceA.innerHTML = q.answers.a
  choiceB.innerHTML = q.answers.b
  choiceC.innerHTML = q.answers.c
  choiceD.innerHTML = q.answers.d
};
// make a timer function


let timer = function() {
  let time = setInterval(function () {
  timeLeft--
  countDown.innerHTML = timeLeft
  if (timeLeft <= 0) clearInterval(time);
 }, 1000)
}
