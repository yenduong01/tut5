function arraysInput()
{
  let arrays = [];
  while (true)
  {
    let element = prompt("Enter a word or 'stop' to finish: ");
    if (element.trim().toLowerCase() === "stop")
    {
      break;
    }
    else
    {
      arrays.push(element);
    }
  }
  return arrays;
}
const arrayValues = arraysInput();

function arraysOutput(arrayValues)
{
  if (arrayValues.length === 0)
  {
    console.log("No words to display");
  }
  else
  {
    for (let i = 0; i < arrayValues.length; i++)
    {
      console.log(arrayValues[i])
    }
  }
}

arraysOutput(arrayValues);