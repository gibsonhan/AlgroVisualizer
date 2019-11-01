import React, { useState } from 'react'

import helper from '../_util/helper_sort'

import { bubblesortReact } from '../Algro/bubblesort';

import Bargraph from './Bargraph'

const Visualizer2D = () => {
    const original = helper._initalData
    const [animation, setAnimation] = useState([])
    const [animeIndex, setAnimeIndex] = useState(0)
    const [array, setArray] = useState(original)
    const [algroState, setAlgroState] = useState({ running: false })
    let sortingState = []
    //const [speed, setSpeed] = useState(1000)

    function Test(props) {
        const state = '' + props.running
        return <h1>current state {state}</h1>
    }

    const handleStart = () => {
        loadAlgro()
        setAlgroState({ running: true })
    }

    const handlePause = () => {
        setAlgroState({ running: false })
    }

    const handleReset = () => {
        runAnimation()
    }


    const runAnimation = () => {
        var index = 0
        var animate = setInterval(() => {
            
            console.log(animation[index])
            setArray(animation[index++])
            if(animation[index] === undefined) {
                console.log('ending interval')
                clearInterval(animate)
            }
        }, 5000)
    }

    const loadAlgro = () => {
        let getAnime = []
        const arrayCopy = [...array]
        getAnime = bubblesortReact(arrayCopy)
        setAnimation(getAnime)
    }

    const handleNewArray = () => {
        let numBars = 15
        let minValue = 2
        let maxValue = 45
        const newArray = helper.randomArrayFrom(numBars, minValue, maxValue)
        setArray(newArray)
    }

    return (
        <div className="twoD">
            <h1>Bar Graph</h1>
            <Test running={algroState.running} />
            <Bargraph data={array} />
            <button onClick={() => { handleStart() }}> Start </button>
            <button onClick={() => { handlePause() }}> Pause </button>
            <button onClick={() => { handleReset() }}> Reset</button>
            <button onClick={() => { handleNewArray() }}>New Array</button>
        </div>

    )
}



export default Visualizer2D
