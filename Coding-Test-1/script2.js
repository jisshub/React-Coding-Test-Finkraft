// Implement a JS function that takes a list of integers and a target number as input, and returns a array of two integers that add up to the target number.

function addTargetNums(intArr, targetNum) {
    let finalArr = []
    const first = intArr[0] + intArr[1]
    const sec = intArr[2]
    finalArr.push(first, sec)
    return 'Final Array is', finalArr
}
console.log(addTargetNums([1,4,5], 10))
