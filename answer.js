function maxLen(arr) {
  arr.sort();

  let beg = 0;
  let maxLen = 0;

  for (let end = 0; end < arr.length; end++) {
    while (arr[end] - arr[beg] > 1) beg++;
    let currLen = end - beg + 1;
    if (currLen > maxLen) maxLen = currLen;
    // console.log(currLen, arr.slice(beg, end + 1), maxLen);
  }
  return maxLen;
}

let arr1 = [1, 1, 2, 2, 4, 4, 5, 5, 5];
let arr2 = [4, 6, 5, 3, 3, 1];
let arr3 = [1, 2, 2, 3, 1, 2];

console.log(maxLen(arr1));
console.log(maxLen(arr2));
console.log(maxLen(arr3));

// maxLen(arr1);
// maxLen(arr2);
// maxLen(arr3);
