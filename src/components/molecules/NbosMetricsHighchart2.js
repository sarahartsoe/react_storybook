import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';

export const NbosMetricsHighchart2 = ({ behaviorMetrics }) => {
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
          parseFloat(behaviorMetrics.satisfactionY1),
          parseFloat(behaviorMetrics.clientCallsY1),
          parseFloat(behaviorMetrics.prospectCallsY1),
          parseFloat(behaviorMetrics.strategiesY1),
        ],
      },
      {
        name: 'This Time Last Year',
        data: [
          parseFloat(behaviorMetrics.satisfactionY2),
          parseFloat(behaviorMetrics.clientCallsY2),
          parseFloat(behaviorMetrics.prospectCallsY2),
          parseFloat(behaviorMetrics.strategiesY2),
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// satisfactionY1: '##',
// satisfactionY2: '',
// clientCallsY1: '',
// clientCallsY2: '',
// prospectCallsY1: '',
// prospectCallsY2: '',
// strategiesY1: '',
// strategiesY2: '',
