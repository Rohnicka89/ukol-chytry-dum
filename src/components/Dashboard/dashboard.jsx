import React, { useState } from 'react';
import './dashboard.css';
import Lights from '../Lights/lights';
import Climate from '../Climate/climate';
import Blinds from '../Blinds/blinds';
import Energy from '../Energy/energy';

const Dashboard = ({data})=>{
    return(
    <main className="dashboard">
        <Lights lights={data.lights}/>
        <Climate temperature={data.climate.temperature} 
                humidity={data.climate.humidity}/> 
        <Blinds state={data.blinds}/>
        <Energy electricity={data.energyConsumption.electricity}
                water={data.energyConsumption.water}/> 

    </main>
    )

}

export default Dashboard;

