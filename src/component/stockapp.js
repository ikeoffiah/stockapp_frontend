import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { data, label } from "../repository/data";


const position = {
    labels: label,
  datasets: [
    {
      label: 'Apple stock data',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: data
    }
  ]
}



function Stockpage() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Stock Data (Apple)</h1>
        <h3>(Apple stock data since 2010)</h3>
        <Line
          data={position}
          options={{
            title:{
              display:true,
              text:'Apple stock data',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </Container>
    </div>
  );
}

export default Stockpage;
