/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

 */

var isSymmetric = function (root) {
  function helper(lRoot, rRoot) {
    if (lRoot == null && rRoot == null) return true; //if both are null, we know so far everything is the same

    if (!lRoot || !rRoot) return false; //if one of them is null, we know the nodes dont match

    if (lRoot.val != rRoot.val) return false; //if the root.values dont match for both nodes, we know the nodes are not the same

    return helper(lRoot.right, rRoot.left) && helper(lRoot.left, rRoot.right);
  }
  return helper(root.left, root.right);
};
