import helper from '../_util/helper_sort'
import algro from '../Algro/bubblesort'

describe("Testing Bubble Sort", () => {
    test('bubble sort unit test', () => {
        console.log('starting data', helper._initalData)
        const sorted = algro.bubblesort(helper._initalData)
        
        console.log('expected final', helper._sortedData)
        for(let i = 0; i < sorted.length; i++) {
            expect(sorted[i]).toBe(helper._sortedData[i])
        }
    })
})