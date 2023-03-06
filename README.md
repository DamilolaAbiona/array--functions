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
  ### 
