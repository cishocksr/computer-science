// linear search moving at set interval checking each thing for the value

// Write a function that accepts an array and a value
// Loop through the array and check if the current value element is equal to the value
// if it is return the index at which the element is found
// if the valued is never found return -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
// O(n): As the length grows so does the amount of time it takes to complete also includes if not there and average; worst case
// O(1): find the data right away first or second: Best Case

console.log(linearSearch([34, 56, 1, 2, 4, 5, 8]));
