/*
1.What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

### Mutating array method in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes.

- copyWithin()
- array.fill()
- array.pop()
- array.push()
- array.reverse()
- array.shift()
- array.sort()
- array.splice()
- array.unshift()

### whereas Non-Mutating array is returning a whole new array which has all the changes.

- concat()
- array.includes()
- array.indexOf
- array.join()
- array.lastIndexOf
- array.slice()
- array.toString()
- array.toLocaleString().





*/ 
// 2. ### Here is an array of languages: ["C#", ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them

// - Add ‘Kotlin’ to the end of the array
// - Add ‘Java’ after ‘Ruby’
// - Remove the first item in the array
// - Add ’Scala’ and ‘Swift’ to the beginning of the array
// - Replace ‘PHP’ with ‘Go’ and ‘Rust’
let arrayOfLanguages = ["C#", "JavaScript", "Ruby","PHP", "Python"]
arrayOfLanguages.push("Kotlin")
console.log(arrayOfLanguages);
let removeFirstItem = arrayOfLanguages.shift();
console.log(removeFirstItem);
arrayOfLanguages.unshift("Scala", "Swift")
console.log(arrayOfLanguages)
arrayOfLanguages.splice(4, 1, "Go", "Rust")
console.log(arrayOfLanguages)
// 3.What will be the value of fruit after calling the function changeFruit?

// - let fruit = ['apple', 'mango', 'banana'];
//   function changeFruit( fruit ) {
//   fruit[2] = "orange";
//   return fruit;
//   }

let fruit = ['apple', 'mango', 'banana'];
  function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
  }
  let futa = changeFruit(fruit)
  console.log(futa)
// Output =  [ 'apple', 'mango', 'orange' ]
// 4 Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
let arr = [4, 5, 10, -2]
function findLargestNum(arr) {
let largestNum = 0
for ( i = 0; i < arr.length; i++) {
if ( arr[i] > largestNum )
{largestNum = arr[i]
}
}
return largestNum
}
console.log(findLargestNum(arr))