import React, { useEffect } from 'react'
import { useState } from 'react';
import Plot from 'react-plotly.js';

const Stock = () => {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  useEffect(() => {
    fetchStock();
  },[])

  const fetchStock = () => {
    const API_KEY = 'R8SUGZVS0W35WHZ1';
    let stockSymbol = 'AMZN';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_Call)
      .then((response) => response.json())
      .then((data) => {
        const allDates = []
        const allOpenPrices = []
        for (let date in data['Time Series (Daily)']) {
          allDates.push(date)
          allOpenPrices.push(data['Time Series (Daily)'][date]['1. open'])
        }
        setStockChartXValues(allDates)
        setStockChartYValues(allOpenPrices)
      })
  }

  return (
    <div>
      <h1>Investments Tracker</h1>
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 720, height: 440, title: 'Amazon Stock (Past 100 Days)'}}
      />
    </div>
  );
}
 
export default Stock;