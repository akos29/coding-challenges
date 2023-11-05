/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const numSet = new Set();
    numSet.add(nums);

    const triplets = []; 
   numSet.forEach((value) => {
        console.log('element',value)
   
    })
};


const nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums))