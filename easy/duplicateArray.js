/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const numsSet= new Set();
  let currentIndex = 0;

  while (currentIndex < nums.length) {
      const currentNum = nums[currentIndex];
      
      if (!numsSet.has(currentNum)) {
          numsSet.add(currentNum);
          currentIndex++;
      } else {
          nums.splice(currentIndex, 1);
      }
  }
  return nums.length;
  
};

const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(nums);
console.log(nums.slice(0, newLength)); // [1, 2, 3, 4, 5]