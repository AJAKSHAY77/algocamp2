
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
      j++;
      k++;
    }
  }
  while (i < m) {
    result[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    result[k] = nums2[j];
    j++;
    k++;
  }
  for (i = 0; i < result.length; i++) {
      nums1[i] = result[i];
    }
   console.log(nums1[i]);
};
merge()
