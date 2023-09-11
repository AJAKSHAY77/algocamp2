/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = Array(m + n).fill(0);

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result[k] = nums1[i];
      i++;
      k++;
    } else {
      result[k] = nums2[j];
      k++;
      j++;
    }
  }
  while (i < m) {
    result[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    result[k] = nums2[j];
    k++;
    j++;
  }

  for (i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};

// 1ns

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
 let finallist = 0;
 conseicutiveone = 0;
 for(i=0;i<nums.length;i++){
    if(nums[i]==1){
      conseicutiveone++
    }else{
        finallist = Math.max(finallist,conseicutiveone)
        conseicutiveone = 0;
    }

 }
return Math.max(finallist,conseicutiveone)

};