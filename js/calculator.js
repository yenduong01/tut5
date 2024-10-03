function getInput()
{
  let num1;
  let num2;
  let math;

  while (true)
  {
    num1 = prompt("Enter first number: ");
    if (isNaN(num1))
    {
      console.log(`Sorry, ${num1} is not a valid entry.`);
    }
    else
    {
      break;
    }
  }

  while (true)
  {
    num2 = prompt("Enter second number: ");
    if (isNaN(num2))
    {
      console.log(`Sorry, ${num2} is not a valid entry.`);
    }
    else
    {
      break;
    }
  }

  while (true)
  {
    math = prompt("Enter mathematical operation (+,-,*,/): ");
    if (math == "+" || math == "-" || math == "*" || math == "/")
    {
      break;
    }
    else
    {
      console.log(`Sorry, ${math} is not a valid entry.`);
    }
  }

  return {num1, num2, math};
}

inputValues = getInput();
let n1 = Number(inputValues.num1);
let n2 = Number(inputValues.num2);
let operation = inputValues.math;

function calculate(n1, n2, operation)
{
  if (operation == "+")
  {
    return n1 + n2;
  }
  else if (operation == "-")
  {
    return n1 - n2;
  }
  else if (operation == "*")
  {
    return n1 * n2;
  }
  else
  {
    return n1 / n2;  
  }
}

const result = calculate(n1, n2, operation);
console.log(result);


