import React, { useState } from 'react';
import './dashboard.css';
import Lights from '../Lights/lights';

const Dashboard = ({data})=>{
    return(
    <main className="dashboard">
        {data.map (item => <Lights lights={item.lights}/>)}
    </main>
    )
}

export default Dashboard;