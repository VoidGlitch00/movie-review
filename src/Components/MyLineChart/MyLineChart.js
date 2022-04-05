import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 24100,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 42300,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 72600,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 52900,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 60100,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 67000,
            "revenue": 61000
        }
    ];
    return (
        <div>
            <LineChart width={800} height={400} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="sell" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default MyLineChart;