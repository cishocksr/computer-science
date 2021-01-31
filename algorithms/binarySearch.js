// Much faster way to search
// Rather than eliminstion one element at a time, you can eliminate half of the remaining elements at a time
// Only works if arrays are sorted
// divide and conquer, divide them into two pieces then see where it will be by comparing if greater than or less than

/**
 * acceots a sorted array and a value
 * create a left pointer at the start of the array, and a right pointer at the end of the array
 * while the left pointer comes before the right pointer:
 *  Create a pointer in the middle
 *  if you find the value you want return the index
 *  if the value is too small move the left pointer up
 *  if the vallue is too large move the right pointer down
 * if you never find the value return -1
 */

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 45);

/**
 *
 * O(log n) Worst and average case; takes a long list, that would have say 32 elements which means a max of 5 steps becasue we keep splitting. it is log n. O(log n) is about equal to O(1).
 *
 * O(1) if the value is in first run
 *
 */
