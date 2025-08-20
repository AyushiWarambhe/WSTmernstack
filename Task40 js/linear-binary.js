function linearSerach(arr, search) {

    let flag = false

    let steps = 0

    for (let index = 0; index < arr.length; index++) {

        steps++

        if (arr[index] === search) {
            flag = true
        }

        if (flag) {
            return `element ${search} found at position ${index + 1} in ${steps} steps`
        }

    }

    return `element ${search} not found at any position in ${steps} steps`

}


function binarySearch(arr, search) {

    let ub = arr.length - 1
    let lb = 0

    let steps = 0

    while (lb <= ub) {

        steps++

        let midpoint = parseInt((ub + lb) / 2)

        if (arr[midpoint] === search) {
            return `element ${search} found at position ${midpoint + 1} in ${steps} steps`
        }

        if (arr[midpoint] < search) {
            lb = midpoint + 1
        } else {
            ub = midpoint - 1
        }

    }

    return `element ${search} not found any positon in ${steps} steps !`

}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let names = ["blue", "darkblue", "green", "red"]

console.log(linearSerach(numbers, 10))

console.log(linearSerach(names,"darkblue"))

console.log(binarySearch(names, "green"))

console.log(binarySearch(numbers, "red"))

