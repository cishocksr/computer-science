/**
 *
 * Given two string S and T return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace
 *
 * Constraints
 * What happens when two #'s appear beside each other?
 *      Delete the two values before the first hash.  ab## => ab
 * What happens to # when there is no character to remove?
 *      It deletes nothing then, just like backspace would. a###b => b
 * Are two empty string equal to each other
 *      Yes
 * Does case sensitivity matter?
 *      Yes it does 'a' does not equal 'A'
 *
 * **************************************************************
 * Test Cases
 * S: 'ab#z'  T: 'az#z' => True
 *
 * S 'abc#d' T: 'acc#c => False
 *
 * S: 'x#y#z#' T: '#' => True
 *
 * S: 'a###b' T: 'b' => true
 *
 * S: 'AB#Z' T: 'ab#z' => False
 *
 * ******************************************************************
 * Space and Time
 */
/*
*******************Brute Force Solution******************************
const buildString = (string) => {
  const buildArray = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      buildArray.push(String[p]); //O(n)
    } else {
      buildArray.pop();
    }
  }
  return buildArray;
};

const backCompare = (s, t) => {
  const finals = buildString(s); // O(a)
  const finalT = buildString(t); // O(b)
  if (finals.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finals.length; p++) {
      if (finals[p] !== finalT[p]) {
        // either O(a) or O(b)
        false;
      }
    }
  }
  return true; // Time Complexity O(a + 2b) => O(a+b)
}; // Space Complexity O(a+b)

console.log(backCompare("ya#z", "a#yz"));
**/

/**
 * ***********************optimal solution******************
 *
 */
const backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (s[p1] === "#") {
            backcount = backcount += 2;
          }
        }
      }
      if (t[p2] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p2--;
          backcount--;
          if (t[p2] === "#") {
            backcount = backcount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

// Time: O(a+b)
// Space: O(1)
