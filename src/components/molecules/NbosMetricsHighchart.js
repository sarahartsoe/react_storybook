import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';

export const NbosMetricsHighchart = ({ chartData, chartType }) => {
  const [metricChartData, setMetricChartData] = useState;
  console.log(chartData)({
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
      categories:
        chartType === 'behavior'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
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
        data:
          chartType === 'behavior'
            ? [
                parseFloat(chartData.loanProdY1),
                parseFloat(chartData.DepGrowthY1),
                parseFloat(chartData.TmGrowthY1),
                parseFloat(chartData.newClientsY1),
              ]
            : [
                parseFloat(chartData.satisfactionY1),
                parseFloat(chartData.clientCallsY1),
                parseFloat(chartData.prospectCallsY1),
                parseFloat(chartData.strategiesY1),
              ],
      },
      {
        name: 'This Time Last Year',
        data:
          chartType === 'behavior'
            ? [
                parseFloat(chartData.loanProdY2),
                parseFloat(chartData.DepGrowthY2),
                parseFloat(chartData.TmGrowthY2),
                parseFloat(chartData.newClientsY2),
              ]
            : [
                parseFloat(chartData.satisfactionY2),
                parseFloat(chartData.clientCallsY2),
                parseFloat(chartData.prospectCallsY2),
                parseFloat(chartData.strategiesY2),
              ],
      },
    ],
  });

  useEffect(() => {
    setMetricChartData();
  }, [chartData]);

  return <HighchartsReact highcharts={Highcharts} options={metricChartData} />;
};

// satisfactionY1: '##',
// satisfactionY2: '',
// clientCallsY1: '',
// clientCallsY2: '',
// prospectCallsY1: '',
// prospectCallsY2: '',
// strategiesY1: '',
// strategiesY2: '',
