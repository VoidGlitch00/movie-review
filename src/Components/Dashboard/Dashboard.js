import React from 'react';
import AreaChart from '../AreaChart/AreaChart';
import ComposedChart from '../ComposedChart/ComposedChart';

const Dashboard = () => {
    return (
        <div>
            <ComposedChart></ComposedChart>
            <AreaChart></AreaChart>
        </div>
    );
};

export default Dashboard;