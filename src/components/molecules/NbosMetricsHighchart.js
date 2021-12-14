import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';

export const NbosMetricsHighchart = () => {
  const options = {
    chart: {
      type: 'bar',
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10,
      marginLeft: 300,
      marginRight: 300,
      width: null,
      height: null,
      //   styledMode: true
    },
    xAxis: {
      categories: [
        'Avg Overall RM Satisfaction',
        'Client calls',
        'Prospect Calls',
        'Strategies Updates',
      ],
      title: {
        text: '',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      series: {
        borderWidth: 0,
      },
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2],
      },
      {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6],
      },
      {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31],
      },
      {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
