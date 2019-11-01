import { nearer } from "q"

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

const swap = (a, b, _array) => {
    let temp = _array[a]
    _array[a] = _array[b]
    _array[b] = temp
}

const bubblesortReact = (_sort) => {
    var sort = _sort
    var sortedIndex = _sort.length
    var bubbleState = [[...sort]]

    for(let start = 0; start < sortedIndex; sortedIndex--) {
        for(let j = start+1; j < sortedIndex; j++) {
            if(sort[j-1] > [j]) {
                swap(j-1, j, sort)
            }
        }
        /** Need to look into the javascript under the hood? [ ] Extra homework
         *  https://dev.to/antonio_pangall/best-practices-to-keep-objects-and-arrays-immutable-in-javascript-3nmm
         *  Need to look into array compy and address for javascript
         *  Apparently pushing(array) 
         *  updates the entire array?
         *  
         * need to a new copy of the array each time
         */
        const newArray = [...sort]
        bubbleState.push(newArray)
    }
    
    return bubbleState
}

export { 
    bubblesort,
    bubblesortReact,
}