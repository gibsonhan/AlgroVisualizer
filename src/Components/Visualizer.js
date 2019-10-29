import React, {useEffect} from 'react'

const Visualizer = ({style}) => {
    useEffect(() => {
        test.main()
    })
    return (
        <div className='visualizer' style={style}>
            <div>
                <canvas id ="c"></canvas>
            </div>
            <div className='visualizer__buttons'>
                <button>Start</button>
                <button>Step Back</button>
                <button>Step Forward</button>
            </div>
            <div>
            -------- Slider -------------
            </div>
        </div>
    )
}

export default Visualizer