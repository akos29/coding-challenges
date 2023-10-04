/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const sortedNums = nums.sort();
    let max=1;
    let count=1; 
    let maxNum=nums[0];

    for(let i=0; i<sortedNums.length; i++){
        if (sortedNums[i]===sortedNums[i+1]){
            count++;
        }           
        else if (count> max){
            max= count;
            maxNum= sortedNums[i];
            count=0;
        }
    }

    if(max>(sortedNums.length/2)){
        return maxNum;
    }
    else {
        return false;
    }

};

const nums = [3,2,3];

console.log(majorityElement(nums));