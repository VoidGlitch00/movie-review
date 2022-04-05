import React from 'react';
import MyComposedChart from '../MyComposedChart/MyComposedChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <MyLineChart className="mb-5"></MyLineChart>
            <MyComposedChart></MyComposedChart>
        </div>
    );
};

export default Dashboard;