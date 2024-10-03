function getInput()
{
  let rInput;

  while (true)
  {
    rInput = prompt("Enter radius: ");
    if (isNaN(rInput) || Number(rInput) < 0)
    {
      console.log(`Sorry, ${rInput} is not a valid entry.`);
    }
    else
    {      
      break;
    }
  }
  return rInput;
}

r = Number(getInput());

function calCircumference(r)
{
  const c = 2 * Math.PI * r;
  return c;
}

const circumference = Number(calCircumference(r));

function calArea(r)
{
  const a = Math.PI * r * r;
  return a;
}

const area = Number(calArea(r));

console.log(`Its circumference is ${circumference.toFixed(2)}`);
console.log(`Its area is ${area.toFixed(2)}`);


