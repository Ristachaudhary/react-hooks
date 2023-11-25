import React,{useEffect, useState} from 'react'

const Clearup = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const currentInnerWidth = ()=>{
        setWidthCount(()=>window.innerWidth)
    }
    useEffect(()=>{
     window.addEventListener('resize', currentInnerWidth)
    })
  return (
    <div>
        <wrapper>
            <div className='container'>
                <h2>The size of the window is <span>{widthCount}</span></h2>
            </div>
        </wrapper>
    </div>
  )
}

export default Clearup;