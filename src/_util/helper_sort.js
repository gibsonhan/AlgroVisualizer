const _initalData = [20,19,17,16,14,11, 9, 8, 6, 5,3,2,1]
const _sortedData = [1,2,2,3,3,5,6,7,8,13,19]

const randomNumFromInterval = (min, max) => {
   return Math.random() *(max - min) + min
}

const randomArrayFrom = (numArray, min, max) => {
    let newArray = []    
    for(let i = 0; i < numArray; i++) {
        newArray[i] = Math.floor(randomNumFromInterval(max, min))
    }
    return newArray
}

module.exports = {
    _initalData,
    _sortedData,
    randomArrayFrom
}