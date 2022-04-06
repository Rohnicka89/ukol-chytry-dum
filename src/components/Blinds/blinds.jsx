import React, { useState } from 'react';
import './blinds.css';

import blindsOpen from './Img/blinds-open.svg';
import blindsClosed from './Img/blinds-closed.svg';

const Blinds = ({state})=>{

	const [blindState, setBlindState] = useState({state})

	const handleClick = ()=>{
		if(blindState === 'closed'){
			setBlindState('open')
		}else{
			setBlindState('closed')
		}
	}


    return(
        <div className="blinds">
				<div className="blinds__icon">
					<img src={blindState==='open' ? blindsOpen : blindsClosed}/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={handleClick} 
							className={blindState==='open'? 'button button--active':'button'}>Otevřeno</button>
					<button onClick={handleClick} 
							className={blindState==='open'?'button':'button--active'}>Zavřeno</button>
				</div>
			</div>
    )
}

export default Blinds;