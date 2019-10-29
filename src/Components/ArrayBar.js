import React from 'react'

const ArrayBar = ({height, width, value}) => {
    let _barHeight = height + 'px'
    let _barWidth = width + 'px'

    const arrStyle = {
        height: _barHeight,
        width: _barWidth,
        background: 'lightblue',

        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div style={arrStyle}>{value}</div>
    )
}

export default ArrayBar