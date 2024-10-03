function getArraysLength()
{
  let lengthInput;

  while (true)
  {
    lengthInput = prompt("Enter arrays length: ");
    if (isNaN(lengthInput) || Number(lengthInput) < 0)
    {
      console.log(`Sorry, ${lengthInput} is not a valid entry.`);
    }
    else
    {
      break;
    }
  }
  return Number(lengthInput);
}
const length = getArraysLength();

function arraysInput(length)
{
  let arrays = [];
  for (let i = 0; i < length; i++)
  {
    let element = prompt(`Enter ${i + 1} element: `);
    arrays.push(element);
  }
  return arrays;
}
const arrayValues = arraysInput(length);

function arraysOutput(arrayValues, length)
{
  const firstElement = arrayValues[0];
  const lastElement = arrayValues[length - 1];
  const arrayLength = length;
  return { firstElement, lastElement, arrayLength };
}

const output = arraysOutput(arrayValues, length)

console.log("First element: ", output.firstElement);
console.log("Last element: ", output.lastElement);
console.log("Array length: ", output.arrayLength);


