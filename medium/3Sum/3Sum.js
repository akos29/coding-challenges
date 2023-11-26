/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const triplets = [];

    // Sort the array to make it easier to handle duplicates
    nums.sort((a, b) => a - b);

    // Iterate through each number in the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
};

// Example usage
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));



const nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums))