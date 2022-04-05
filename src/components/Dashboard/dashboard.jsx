import React, { useState } from 'react';
import './dashboard.css';
import Lights from '../Lights/lights';
import Climate from '../Climate/climate';

const Dashboard = ({data})=>{
    return(
    <main className="dashboard">
        {data.map(item => <Lights lights={item.lights}/>)}
        {data.climate.map(item => <Climate climate={item.temprature}
                                   humidity ={item.humidity}/>)}
    </main>
    )

}

export default Dashboard;

