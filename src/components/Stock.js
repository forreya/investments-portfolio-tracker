import React, { useEffect } from 'react'
import { useState } from 'react';

const Stock = () => {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  useEffect(() => {
    fetchStock();
  },[])

  const fetchStock = () => {
    const API_KEY = 'R8SUGZVS0W35WHZ1';
    let API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSCO.LON&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data)
        }
      )
  }

  return (
    <div>
      <h1>Stock</h1>
    </div>
  );
}
 
export default Stock;