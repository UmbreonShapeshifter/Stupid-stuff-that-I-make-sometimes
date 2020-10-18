const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = () => {
  const correctAnswer = Math.floor(Math.random() * 11);
  let attemptCounter = 0;

  function questionAndAnswer() {
    readline.question(`Guess a number from 1 to 10:\n`, givenAnswer => {
      if (givenAnswer > 0 && givenAnswer < 11) {
        if (correctAnswer == givenAnswer) {
          console.log("Congrats! You Win!");
          if (attemptCounter) {

            console.log(`It took you ${attemptCounter} attempts`);
            tryAgain();
          } else {

            console.log("On the first try, nice!");
            tryAgain();
          }
          tryAgain();

        } else {

          console.log("Incorrect! Try again!")
          attemptCounter++;
          console.log();
          questionAndAnswer();
        }
      } else {

        console.log("Invaild Input!");
        console.log();
        questionAndAnswer();

      }
    })
  }

  questionAndAnswer();

}

const tryAgain = () => {

  readline.question(`\n===\nWould you like to play again? Enter "Yes" or "No" to proceed\n`, answer => {

    answer = answer.toLowerCase();
    if (answer == "no") {
      process.exit();
    }

    game();
  });
}

game();
