import React, { useState } from 'react';
import './climate.css';

import tempImg from './img/temp.svg';



const Climate = ({temperature,humidity})=>{

	const [tempCh, setTempCh] = useState({temperature})


    return(
        <div className="climate">
				<div className="climate__icon">
					<img src={tempImg}/>
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{tempCh}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button onClick={()=>{setTempCh(tempCh+1)}} className="button">+</button>
					<button onClick={()=>{setTempCh(tempCh-1)}} className="button">-</button>
				</div>
			</div>
    )
}

export default Climate;