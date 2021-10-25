//---- Global Variables

//DOM Elements
let status = document.getElementById("status");
let playButton = document.getElementById("play-button");
let guessButton = document.getElementById("guess-button");
let passButton = document.getElementById("pass-button");
let askQuestion = document.getElementsByClassName("ask-question");

//Game Variables
let timer;
let interval = 300;
let questionTimer;
let questionInterval = 6;
let currentPlayer = "Player 1";

//guess and pass buttons are disabled
guessButton.style.pointerEvents = "none";
passButton.style.pointerEvents = "none";

//event listener to alert on load that it is player 1's turn
playButton.addEventListener("click", () => {
  //notification that it is player 1's turn to choose
  status.textContent = "Player 1's turn...";
  //timer to count down from 5 minutes, sets the interval and calls countDown function
  timer = setInterval(countDown, 1000);
});

//a round timer begins counting down from 5 minutes
function countDown() {
  //decreases the interval by 1
  interval = interval - 1;
  //variables to get minutes and seconds (down to tens and ones place) for timer countdown
  let minutes = Math.floor(interval / 60);
  let seconds = interval % 60;
  let tensPlace = Math.floor(seconds / 10);
  let onesPlace = seconds % 10;
  //puts the timer counting down from 5min into status div
  status.textContent = `${minutes}:${tensPlace}${onesPlace}`;
  //once counter is down to 0 status updates that time is up for player 1
  if (interval === 0) {
    status.textContent = "Time's up! Player 2's turn.";
    clearInterval(timer);
  }
}

//array iteration for the question collection below, targets the events by id to correctly assign appropriate question to element
Array.from(askQuestion).forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.target.textContent = questions[evt.target.id].question;
    //this will enable guess and pass buttons
    guessButton.style.pointerEvents = "auto";
    passButton.style.pointerEvents = "auto";
    //clears initial timer at the start of play
    clearInterval(timer);
    //resets questionInterval to count down from 5 (set to 6 so that 5 shows up on screen)
    questionInterval = 6;
    //starts the timer for question countdown once a question is chosen
    questionCountdown();
  });
});

//timer function that starts counting down from 5 seconds
function questionCountdown() {
  //if 5 second timer already counting down resets it for next question
  clearInterval(questionTimer);
  //sets the interval
  questionTimer = setInterval(() => {
    //decreases the interval by 1
    questionInterval = questionInterval - 1;
    //updates the status div
    status.textContent = questionInterval;
    //when the 5 second timer reaches 0
    if (questionInterval === 0) {
      //status div is updated to let player know time is up
      status.textContent = "Time's up!";
      //the 5 second timer gets cleared
      clearInterval(questionTimer);
    }
  }, 1000);
}

//when player 1 clicks pass button player 2 gets an opportunity to answer question
passButton.addEventListener("click", (evt) => {
  if (currentPlayer === "Player 1") {
    //sets current player to player 2 if player 1 hits pass
    currentPlayer = "Player 2";
    //status updates to player 2's turn
    status.textContent = "Player 2's turn...";
    //timer resets
    clearInterval(questionTimer);
    //resets questionInterval to count down from 5 (set to 6 so that 5 shows up on screen)
    questionInterval = 6;
    //5 second timer gets called from beginning
    questionCountdown();
  } else {
    currentPlayer = "Player 1";
  }
});

//----array of questions and answers for game board

let questions = [
  {
    question: "Movies - $100 question",
    answer: "Movies - $100 answer",
  },
  {
    question: "Movies - $200 question",
    answer: "Movies - $200 answer",
  },
  {
    question: "Movies - $300 question",
    answer: "Movies - $300 answer",
  },
  {
    question: "Movies - $400 question",
    answer: "Movies - $400 answer",
  },
  {
    question: "Movies - $500 question",
    answer: "Movies - $500 answer",
  },
  {
    question: "Biography - $100 question",
    answer: "Biography - $100 answer",
  },
  {
    question: "Biography - $200 question",
    answer: "Biography - $200 answer",
  },
  {
    question: "Biography - $300 question",
    answer: "Biography - $300 answer",
  },
  {
    question: "Biography - $400 question",
    answer: "Biography - $400 answer",
  },
  {
    question: "Biography - $500 question",
    answer: "Biography - $500 answer",
  },
  {
    question: "Awards - $100 question",
    answer: "Awards - $100 answer",
  },
  {
    question: "Awards - $200 question",
    answer: "Awards - $200 answer",
  },
  {
    question: "Awards - $300 question",
    answer: "Awards - $300 answer",
  },
  {
    question: "Awards - $400 question",
    answer: "Awards - $400 answer",
  },
  {
    question: "Awards - $500 question",
    answer: "Awards - $500 answer",
  },
  {
    question: "Bop or Flop - $100 question",
    answer: "Bop or Flop - $100 answer",
  },
  {
    question: "Bop or Flop - $200 question",
    answer: "Bop or Flop - $200 answer",
  },
  {
    question: "Bop or Flop - $300 question",
    answer: "Bop or Flop - $300 answer",
  },
  {
    question: "Bop or Flop - $400 question",
    answer: "Bop or Flop - $400 answer",
  },
  {
    question: "Bop or Flop - $500 question",
    answer: "Bop or Flop - $500 answer",
  },
  {
    question: "Quotes - $100 question",
    answer: "Quotes - $100 answer",
  },
  {
    question: "Quotes - $200 question",
    answer: "Quotes - $200 answer",
  },
  {
    question: "Quotes - $300 question",
    answer: "Quotes - $300 answer",
  },
  {
    question: "Quotes - $400 question",
    answer: "Quotes - $400 answer",
  },
  {
    question: "Quotes - $500 question",
    answer: "Quotes - $500 answer",
  },
  {
    question: "Random - $100 question",
    answer: "Random - $100 answer",
  },
  {
    question: "Random - $200 question",
    answer: "Random - $200 answer",
  },
  {
    question: "Random - $300 question",
    answer: "Random - $300 answer",
  },
  {
    question: "Random - $400 question",
    answer: "Random - $400 answer",
  },
  {
    question: "Random - $500 question",
    answer: "Random - $500 answer",
  },
];
