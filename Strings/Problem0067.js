/**Given two binary strings a and b, return their sum as a binary string.
Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 
Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself. */

var addBinary = function (a, b) {
  const aArray = a.split("").reverse();
  const bArray = b.split("").reverse();

  const res = new Array(Math.max(a.length, b.length) + 1).fill(0);
  let extra = 0;
  for (let i = 0; i < res.length; i++) {
    let a = aArray[i] || 0;
    let b = bArray[i] || 0;
    const sum = Number(a) + Number(b) + extra;
    res[i] = sum % 2;
    extra = (sum / 2) | 0;
  }

  const reversed = res.reverse();
  const withoutTrailingZeros =
    reversed[0] === 0 ? reversed.slice(1, reversed.length) : reversed;
  return withoutTrailingZeros.join("");
};
