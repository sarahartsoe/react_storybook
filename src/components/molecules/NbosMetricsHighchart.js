import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';

export const NbosMetricsHighchart = ({ outcomeMetrics }) => {
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
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: [
        'Loan Production',
        'Deposit Growth',
        'TM Growth',
        'New Clients',
      ],
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
        name: 'RM',
        data: [
          parseFloat(outcomeMetrics.loanProdY1),
          parseFloat(outcomeMetrics.DepGrowthY1),
          parseFloat(outcomeMetrics.TmGrowthY1),
          parseFloat(outcomeMetrics.newClientsY1),
        ],
      },
      {
        name: 'This Time Last Year',
        data: [
          parseFloat(outcomeMetrics.loanProdY2),
          parseFloat(outcomeMetrics.DepGrowthY2),
          parseFloat(outcomeMetrics.TmGrowthY2),
          parseFloat(outcomeMetrics.newClientsY2),
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
