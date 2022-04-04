import React, { useState } from 'react'
import './light.css'

import lightOn from './img/light-on.svg'
import lightOff from './img/light-off.svg'

const Light = (name,state)=>{

    const [lOn, setLOn] = useState({state})

    const handleClick = ()=>{
        if (state === 'off'){
            setLOn('on')
        } else{
            setLOn('off')
        }
    }

    return(
        <div onClick = {handleClick} className="light">
			<div className="light__icon">
				<img src={lOn==='on'? lightOn : lightOff}/>
			</div>
			<div className="light__name">
				{name}
			</div>
		</div>
    )
}

export default Light;