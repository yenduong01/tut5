const array = [3, 11, 7, 2, 9, 10];

function findSum(array)
{
  let sum = 0;
  for (let i = 0; i < array.length; i++)
  {
    sum += array[i]
  }
  return sum;
}
const sumArray = findSum(array);

function findMin(array)
{
  let minValue = array[0];
  for (let i = 1; i < array.length; i++)
  {
    if (array[i] < minValue)
    {
      minValue = array[i];
    }
  }
  return minValue;
}
const minArray = findMin(array);

function findMax(array)
{
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++)
  {
    if (array[i] > maxValue)
    {
      maxValue = array[i];
    }
  }
  return maxValue;
}
const maxArray = findMax(array);

console.log("Sum of all array values: ", sumArray);
console.log("Minimum value: ", minArray);
console.log("Maximum value: ", maxArray);

