import React, { useEffect } from 'react'
import { useState } from 'react';

const Stock = () => {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  useEffect(() => {
    fetchStock();
  },[])

  const fetchStock = () => {
    // Fetch from API
  }

  return (
    <div>
      <h1>Stock</h1>
    </div>
  );
}
 
export default Stock;