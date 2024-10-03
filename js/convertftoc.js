function getInput()
{
  let tempF;

  while (true)
  {
    tempF = prompt("Enter Fahrenheit temperature: ");
    if (isNaN(tempF))
    {
      console.log(`Sorry, ${tempF} is not a valid entry.`);
    }
    else
    {
      break;
    }
  }
  return tempF;
}

const fahrenheitTemp = Number(getInput());


function convertion(fahrenheitTemp)
{
  tempC = (fahrenheitTemp - 32) * 5 / 9
  return tempC;
}

const celsiusTemp = Number(convertion(fahrenheitTemp));
console.log(`${fahrenheitTemp.toFixed(2)} degrees Fahrenheit is ${celsiusTemp.toFixed(2)} degrees Celsius`);



