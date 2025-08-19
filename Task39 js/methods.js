let arr = [1, 2, 3]
console.log(`given array= ${arr}`)
arr.push(4)
console.log(`push(4)= ${arr}`)
arr.unshift(2)
console.log(`unshift(2)= ${arr}`)
arr.pop()
console.log(`pop()= ${arr}`)
arr.shift()
console.log(`shift()=${arr}`)

console.log ("transforming and filtering")
let nums = [1, 2, 3, 4]
console.log(nums)
let squares = nums.map(n => n * n)
console.log(squares)
let evens = nums.filter(n => n % 2 === 0)
console.log(evens)
let sum = nums.reduce((acc, n) => acc + n, 0)
console.log(`reduce()= ${sum}`)
console.log("for Each ")
nums.forEach((nums, index)=> {
    console.log(`element at index ${index} and numbers at ${nums}`)
})

console.log("Sorting and reversing")
let alpha = ["c", "a", "b"]
alpha.sort()
console.log(`sort()= ${alpha}`)
alpha.reverse() 
console.log(`reverse()=${alpha}`)

console.log("Combining and Extracting")

let a = [1, 2]
let b = [3, 4]
let combined = a.concat(b)  
console.log(`concat() of two arrays=${combined}`)


let sliced = [10, 20, 30, 40].slice(1, 3)
console.log(`slice() = ${sliced}`)

let nums2 = [1, 2, 3]
nums2.splice(1, 1, 9)
console.log(`splice()= ${nums2}`)

let str = ["a", "b", "c"].join("-")
console.log(`join()= ${str}`)


