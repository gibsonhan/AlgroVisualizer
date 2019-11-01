import React from 'react'

const ArrayBar = ({index, height, width, value}) => {
    let _barHeight = height + 'px'
    let _barWidth = width + 'px'

    const arrStyle = {
        height: _barHeight,
        width: _barWidth,
        background: 'lightblue',
        
        display: 'flex',
        justifyContent: 'center'
    }

    const numStyle = {
        padding: '10px'
    }
    return (
        <div className={index} style={arrStyle}>
            <span style ={numStyle}>{value}</span>
        </div>
    )
}

export default ArrayBar