const bubblesort = (array) => {
    let arr = array 
    let sortedIndex = arr.length

    /**start            |   sorted index key starts at array.length
     *                 \ /  after end of bubble sort the largest number "floats to end of array/top"
     * [0 ............n]
     */
    //console.log('start', arr)
    
    for(let start = 0; start < sortedIndex; sortedIndex--) {
        for(let j = start+1; j < sortedIndex; j++) {
            if(arr[j-1] > arr[j]) {
                //console.log('swapping')
                swap(j-1, j, arr)
            }           
        }
    }
    //console.log('final', arr)
    return arr
} 

const swap = (a, b, array) => {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

export default { bubblesort }