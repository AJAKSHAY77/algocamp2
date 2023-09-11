var findMaxConsecutiveOnes = function (nums) {
  let finalans = 0;
  let consecutiveone = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      consecutiveone++;
    } else {
      finalans = Math.max(finalans, consecutiveone);
      consecutiveone = 0;
    }
  }
  return Math.max(finalans, consecutiveone);
};
