import React, {useState} from 'react'

import helper from '../_util/helper_sort'
import ArrayBar from './ArrayBar'

import Bargraph from './Bargraph'

const Visualizer2D = () => {    
    const [_arr, setArr] = useState([...helper._initalData])

    return (
        <div className ="twoD">
            <Bargraph data={_arr} /> 
            <button onClick ={() => {}}> Start </button>
            <button> Step Back </button>
            <button> Pause </button>
            <button> Step Forward </button>
        </div>
    )
}



export default Visualizer2D
