/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
 */

var climbStairs = function (n) {
  const map = new Map();
  const rec = (count) => {
    if (count === n) {
      return 1;
    }
    if (count > n) {
      return 0;
    }

    if (map.has(count)) {
      return map.get(count);
    }

    const ans = rec(count + 1) + rec(count + 2);
    map.set(count, ans);
    return ans;
  };
  return rec(0);
};
