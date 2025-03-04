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
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      tickLength: 0,
    },
    yAxis: {
      title: {
        text: 'Revenue',
        style: {
          color: 'black',
        },
      },
      floor: 0,
      ceiling: 600000,
      tickAmount: 4,
      labels: {
        enabled: true,
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: '2021',
        color: '#0166CC',
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
        color: '#9AC1EB',
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
