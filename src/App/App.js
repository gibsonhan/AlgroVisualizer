import React from 'react'
import Visualizer from '../Components/Visualizer'
import Visualizer2D from '../Components/Visualizer2D'

import './App.css'

const App = () => {
    const tempBox = {
        width: '500px',
        height: '500px',
        borderColor: 'lightgrey',
        borderStyle: 'solid'
    }
    return (
        <div className ="App">
            <div className ="algroList" style={tempBox}>
                <ul>
                    <li>Bubble Sort</li>
                </ul>
            </div>
            <div className ="config" style ={tempBox}>
                <input value="size"/>
                <button>Generate</button>
            </div>
            <Visualizer style={tempBox} />
            <Visualizer2D />
        </div>
    )
}

export default App 