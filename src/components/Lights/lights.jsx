import React, { useState } from 'react';
import './lights.css';

import Light from '../Light/light';


const Lights = ({lights})=>{
    return(
        <div className="lights">
            <Light name = {lights.name} state = {lights.state}/>
		</div>
    )
}

export default Lights;