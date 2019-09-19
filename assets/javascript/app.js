// Trivia Game theme....... & questions
// NBA Trivia

const myQuestions = [
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


// need a start button to start the quiz

document.getElementById('startGame').addEventListener('click', function () {
    console.log(ping)
})
