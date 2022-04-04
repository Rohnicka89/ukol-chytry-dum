import React, { useState } from 'react';
import './lights.css';

import Light from '../Light/light';


const Lights = ({lights})=>{
    return(
        <div className="lights">
            {lights.map( (item)=>{return(<Light name = {item.name} 
                                                state = {item.state} 
                                                key = {item.name}/>)})}
		</div>
    )
}

export default Lights;