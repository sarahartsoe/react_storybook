import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';

export const NbosHighchartPipeline = () => {
  const options = {
    chart: {
      type: 'column',
      spacingBottom: 15,
      spacingTop: 1,
      spacingLeft: 10,
      spacingRight: 10,
      marginLeft: 300,
      marginRight: 300,
      width: null,
      height: null,
    },
    title: {
      text: 'Current vs Same time last year',
    },
    xAxis: {
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD'],
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        name: '2021',
        data: [1300, 1300, 500, 700, 1200],
      },
      {
        name: '2020',
        data: [1600, 1100, 500, 1600, 1100],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
