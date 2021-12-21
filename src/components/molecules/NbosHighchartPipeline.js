import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';

export const NbosHighchartPipeline = ({ opportunitySummary }) => {
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
        data: [
          parseFloat(opportunitySummary.stageOne2021),
          parseFloat(opportunitySummary.stageTwo2021),
          parseFloat(opportunitySummary.stageThree2021),
          parseFloat(opportunitySummary.stageFour2021),
          parseFloat(opportunitySummary.booked2021),
        ],
      },
      {
        name: '2020',
        data: [
          parseFloat(opportunitySummary.stageOne2020),
          parseFloat(opportunitySummary.stageTwo2020),
          parseFloat(opportunitySummary.stageThree2020),
          parseFloat(opportunitySummary.stageFour2020),
          parseFloat(opportunitySummary.booked2020),
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// stageOne2020: '',
// stageTwo2020: '',
// stageThree2020: '',
// stageFour2020: '',
// booked2020: '',
// stageOne2021: '',
// stageTwo2021: '',
// stageThree2021: '',
// stageFour2021: '',
// booked2021: '',
