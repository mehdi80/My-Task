let exampArry = ["mohsen", "mostafa", "morteza", "mofghjkmo"];

function findLongestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
}

console.log(findLongestCommonPrefix(exampArry));

//Kadane’s Algorithm:

function maxSubArraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

const arr = [0];
console.log("بزرگترین مجموع زیرآرایه:", maxSubArraySum(arr));

//task 3 of section 4 target and arry

function findCombination(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let combination = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      combination.push(arr[j]);

      if (sum === target) {
        return combination;
      }
    }
  }
  return null;
}

let target = 2;
let sumArry = [0, 2, 3, 6, 7];

console.log(findCombination(sumArry, target));
