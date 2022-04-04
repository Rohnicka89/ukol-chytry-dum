import React, { useState } from 'react';
import './energy.css';

const Energy = ()=>{
    return(
        <div class="energy">
				<div class="energy__source">
					<div class="energy__icon">
						<img src="./images/electricity.svg"/>
					</div>
					<div class="energy__consumption">
						<div class="energy__description">Elektřina</div>
						<div class="energy__value">36.7 kW</div>
					</div>
				</div>
				<div class="energy__source">
					<div class="energy__icon">
						<img src="./images/water.svg"/>
					</div>
					<div class="energy__consumption">
						<div class="energy__description">Voda</div>
						<div class="energy__value">14.1 m<sup>3</sup></div>
					</div>
				</div>
			</div>
    )
}

export default Energy;