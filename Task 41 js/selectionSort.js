function selectionSort(arr, order = "A") {
    let steps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let minOrMaxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            steps++;

            if (order === "A") {
                
                if (arr[j] < arr[minOrMaxIndex]) {
                    minOrMaxIndex = j;
                }
            } else {
                
                if (arr[j] > arr[minOrMaxIndex]) {
                    minOrMaxIndex = j;
                }
            }
        }
        let temp = arr[i];
        arr[i] = arr[minOrMaxIndex];
        arr[minOrMaxIndex] = temp;
    }

    return { arr, order, steps };
}
let numbers = [64, 25, 12, 22, 11];

console.log("Ascending:", selectionSort([...numbers], "A"));  
console.log("Descending:", selectionSort([...numbers], "D"));

// without order and steps
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let num = [1, 5, 2, 3, 4]

console.log("selection sort array : ", selectionSort(num))