/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // Handle edge case
  if (nums.length <= 2) {
      return nums.length;
  }

  let currentIndex = 2; // Start from the third element

  for (let i = 2; i < nums.length; i++) {
      if (nums[i] !== nums[currentIndex - 2]) {
          nums[currentIndex] = nums[i];
          currentIndex++;
      }
  }

  // Remove extra elements if any
  while (nums.length > currentIndex) {
      nums.pop();
  }

  return currentIndex;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums)); // Output: 7
console.log(nums); // Modified nums array: [0, 0, 1, 1, 2, 3, 3]
