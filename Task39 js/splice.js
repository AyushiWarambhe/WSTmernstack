function mySplice(arr, start, deleteCount) {
  let removed = [];
  let newArr = [];

  for (let i = start; i < start + deleteCount; i++) {
    if (i < arr.length) {
      removed.push(arr[i]);
    }
  }

  for (let i = 0; i < start; i++) {
    newArr.push(arr[i]);
  }

  for (let i = start + deleteCount; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

 arr.length = 0;
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i]);
  }

  return removed;
}

let fruits = ["apple", "banana", "cherry", "date", "fig"];

let removed = mySplice(fruits, 1, 2);

console.log("Modified Array:", fruits);   // ["apple", "date", "fig"]
console.log("Removed Elements:", removed); // ["banana", "cherry"]
