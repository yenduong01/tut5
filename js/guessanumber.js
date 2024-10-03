function randomNumber()
{
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return randomNum;
}
number = randomNumber();

function guessNumber(number)
{
  let attempts = 0;

  while (true)
  {
      
    const guessNum = Number(prompt("Guess a number between 1 - 100: "));
    if (Number.isInteger(guessNum) && Number.parseInt(guessNum) && guessNum > 1 && guessNum < 100)
    {
      attempts++;
      if (guessNum < number)
      {
        console.log("Too low, guess again");
      }
      else if (guessNum > number)
      {
        console.log("Too high, guess again");
      }
      else
      {
        console.log(`Correct! It took you ${attempts} attempts to guess the correct number`);
        break;
      }
    }
    else
    {
      console.log(`Sorry, ${guessNum} is not a valid entry.`);
    }
  }  
}
guessNumber(number);
