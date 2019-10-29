import React from 'react'
import ArrayBar from './ArrayBar'

const Bargraph = ({data}) => {
    const _array = data

    const  height = 600
    const  width = 800
    const _arrayMax = Math.max(..._array)
    const _barWidth = (width/(_array.length))
    const _heightPerUnit =(height/_arrayMax) 
    
    const calcBarHeight = (_heightPerUnit, arrValue) => {
        return _heightPerUnit * arrValue
    }

    const showBar = () => {
        let _showBar = []

        for(let i = 0; i < _array.length; i ++) {
            _showBar[i] = (<ArrayBar 
                                key={i}
                                value={_array[i]} 
                                height={calcBarHeight(_heightPerUnit, _array[i])}
                                width={_barWidth}
                            />
            )            
        }
        return _showBar
    } 

    const barStyle = {
        height: '600px',
        width: '800px',
        
        background: 'white',
        display: 'flex',
        alignItems: 'flex-end'
    }

    return (
        <div className="bargraph2" style ={barStyle}>
            {showBar()}
        </div>
    )
}

export default Bargraph