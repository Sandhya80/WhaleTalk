// Whale talk !

const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for ( let i = 0; i < input.length; i++)  {
  if (input[i] === 'e')  {
        resultArray.push(input[i]);
  }
  if (input[i] === 'u')  {
        resultArray.push(input[i]);
  }
  for (let v = 0; v < vowels.length; v++)  {
    if (input[i] === vowels[v])  {
      resultArray.push(input[i]);
      console.log(resultArray);
    }
  }
};
console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
/*Output
[
  'u', 'u', 'e', 'e',
  'i', 'e', 'e', 'a',
  'u', 'u'
]
[
  'u', 'u', 'e', 'e',
  'i', 'e', 'e', 'a',
  'u', 'u', 'e', 'e'
]
[
  'u', 'u', 'e', 'e',
  'i', 'e', 'e', 'a',
  'u', 'u', 'e', 'e'
]
UUEEIEEAUUEE
  */
