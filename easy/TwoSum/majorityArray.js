/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // input:  [2,7,11,15]
    // target: 9
    const numSet = new Set(nums);

    for (num of numSet ){
        const target2 =num-target;

        if( target2> 0 && numSet.has(target2)){
            console.log(target2, target-target2)
        } else if (numSet.has(target2*-1)){
            console.log(target2, target-target2)
        } else {
            console.log('none')
        }
    }

};