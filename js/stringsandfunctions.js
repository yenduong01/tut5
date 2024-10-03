
function getInput()
{
  const word = prompt("Enter a word:");
  return word.toLowerCase().split('');
}
const wordArray = getInput();

function countVowels(wordArray)
{
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let vowelCount = 0;
  for (let i = 0; i < wordArray.length; i++)
  {
    for (let j = 0; j < vowels.length; j++)
    {
      if (wordArray[i] === vowels[j])
      {
        vowelCount++;
        break;
      }
    }
  }
  return vowelCount;
}
const numVowel = countVowels(wordArray);


function checkPalindrome(wordArray)
{
  const reversedArray = wordArray.slice().reverse();
  let palindrome;
  if (reversedArray.join('') === wordArray.join(''))
  {
    palindrome = "is"
  }
  else
  {
    palindrome = "is not"    
  }
  return palindrome;
}
const isPalindrome = checkPalindrome(wordArray);

console.log(`${wordArray.join('')} contains ${numVowel} vowels and ${isPalindrome} a palindrome`);
