/**
 * Given a string, find the length of the longest substring without repeating characters
 *
 * Constrains
 *  is the substring contiguous? look for a substring not a subsequence
 *  contiguous means characters are sequentinal and have no breaks.
 *
 *  substring are sequentual no breaks and contigouus.
 *  subsequence is the oppoiste can skip.
 *
 *  Does case sensitivity matter? no assume all lowercase
 *
 * Test Case
 *  'abccabb'  => 3
 *  'cccccc' => 1
 *  '' => 0
 *  'abcbda' => 4
 */
/** **********BRUTE FORCE*****************************
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChar = {},
      currLen = 0;

    for (let right = left; right < s.length; right++) {
      const currChar = s[right];
      if (!seenChar[currChar]) {
        currLen++;
        seenChar[currChar] = true;
        longest = Math.max(longest, currLen);
      } else {
        break;
      }
    }
  }
  return longest;
};

// Space: O(n) 
// Time: O(n^2)

*/
/**
 * ***************Sliding Window*****************
 *
 *  Forma a window over some portion of sequential data, then move that window throughout the data to capture different parts of it.
 *  Order of the data matters - sequential
 *  Select a window of of values, and move down comparing the same size window
 */

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currChar = s[right];
    const prevSeenChar = seen[currChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seen[currChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

// Time: O(n)
// Space: O(n)
