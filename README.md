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

### Here is an array of languages: ["C#", ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them

- Add ‘Kotlin’ to the end of the array
- Add ‘Java’ after ‘Ruby’
- Remove the first item in the array
- Add ’Scala’ and ‘Swift’ to the beginning of the array
- Replace ‘PHP’ with ‘Go’ and ‘Rust’

### What will be the value of fruit after calling the function changeFruit?

- let fruit = ['apple', 'mango', 'banana'];
  function changeFruit( fruit ) {
  fruit[2] = "orange";
  return fruit;
  }
  ### Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
- e.g., max([4, 5, 10, -2]) // maximum value is 10

### Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

- e.g.,

- valTimesIndex([1,2,3]) // [0,2,6]
- valTimesIndex([5,10,15]) // [0,10,30]
