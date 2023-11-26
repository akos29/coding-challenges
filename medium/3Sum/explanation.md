# Three Sum - Big O Analysis

## Problem Statement

Given an array of integers `nums`, find all unique triplets in the array that sum up to zero.

## Solution

```javascript
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
``````

## Time Complexity: O(n^2)
The time complexity of this solution is O(n^2), where n is the length of the input array nums. This is because, in the worst case, we have nested loops that iterate through the array, and the array is sorted to simplify duplicate handling.

## Space Complexity: O(1)
The space complexity of this solution is O(1) since the extra space used is constant, and it doesn't depend on the input size. We only use a constant amount of space for variables like triplets, target, left, and right.

In summary, this algorithm efficiently finds unique triplets that sum to zero with a time complexity of O(n^2) and a space complexity of O(1).

`
Feel free to adjust or expand the explanation based on your needs!`
