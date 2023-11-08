/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const triplets = []; 
 nums.forEach((num, index) => {
    
    const target = 0 - num;
    const numSet = new Set();
    numSet.add(num);
    const pairs = twoSum(nums, target, numSet); 
    if(pairs.length > 0) {
        triplets.push(...pairs)
    }
    });
    return triplets;
};

var twoSum = function(nums, target, numSet) {
    const pairs = [];
    const pairSet = new Set();
    nums.forEach((num, index) => {
        if(numSet.has(num)) return;
        const diff = target - num;
        if(pairSet.has(diff)) {
            pairs.push([num, diff, 0 - target]);
        } else {
            pairSet.add(num);
        }
    });
    return pairs;
}


const nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums))