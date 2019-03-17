/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let num2, num3; 
  let arr = preferences.slice();

  arr.unshift('Element for shifting array index (from 0 to 1)');

  for (let i = 1; i < arr.length; i++) {
    num2 = arr[i];
    num3 = arr[num2];

    if (num2 !== num3 && 
        arr[i] === num2 && 
        arr[num2] === num3 && 
        arr[num3] === i) {
    	count++;
    	delete(arr[i]);
    }
  }

  return count;
};
