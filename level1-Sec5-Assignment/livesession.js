

const sumMissingNum = (arr) => {
    let sum = 0
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            sum += i
        }
    }
    return sum
}

console.log(sumMissingNum([1, 3, 5, 7, 10]))
console.log(sumMissingNum([10, 7, 5, 3, 1]))
console.log(sumMissingNum([10, 20, 30, 40, 50, 60]))