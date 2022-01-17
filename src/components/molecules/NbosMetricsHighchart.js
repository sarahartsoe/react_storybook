import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';
// import { formatCurrency } from '../../utilities/utilities.js';

export const NbosMetricsHighchart = ({ chartData, chartType }) => {
  const highChartOptions = {
    chart: {
      type: 'bar',
      spacingLeft: 10,
      spacingRight: 10,
      marginLeft: 300,
      marginRight: 300,
      width: null,
      height: 300,
    },
    legend: {
      align: 'left',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        borderRadius: 5,
        pointPadding: 0.3,
      },
    },
    title: {
      text: null,
    },
    xAxis: {
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      tickLength: 0,
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
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
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      tickLength: 0,
      visible: false,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
    },
    series: [],
  };

  useEffect(() => {
    const xAxis = {
      categories:
        chartType === 'behavior'
          ? ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients']
          : [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ],
    };
    const series = [
      {
        name: 'RM',
        color: '#0166CC',
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartData.loanProdY1),
                parseFloat(chartData.DepGrowthY1),
                parseFloat(chartData.TmGrowthY1),
                parseFloat(chartData.newClientsY1),
              ]
            : [
                parseFloat(chartData.satisfactionY1),
                parseFloat(chartData.clientCallsY1),
                {
                  y: parseFloat(chartData.prospectCallsY1),

                  color: `${
                    chartData.prospectCallsY1 > 5 ? '#808080' : '#FF0000'
                  }`,
                },
                parseFloat(chartData.strategiesY1),
              ],
      },
      {
        name: 'This Time Last Year',
        color: '#C4C4C4',
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartData.loanProdY2),
                parseFloat(chartData.DepGrowthY2),
                parseFloat(chartData.TmGrowthY2),
                parseFloat(chartData.newClientsY2),
              ]
            : [
                parseFloat(chartData.satisfactionY2),
                parseFloat(chartData.clientCallsY2),
                {
                  y: parseFloat(chartData.prospectCallsY2),

                  color: `${
                    chartData.prospectCallsY2 > 5 ? '#808080' : '#FF0000'
                  }`,
                },
                parseFloat(chartData.strategiesY2),
              ],
      },
    ];
    const newMetricChartData = {
      ...highChartOptions,
      xAxis: xAxis,
      series: series,
    };
    setMetricChartData(newMetricChartData);
  }, [chartData]);

  const [metricChartData, setMetricChartData] = useState(highChartOptions);

  return <HighchartsReact highcharts={Highcharts} options={metricChartData} />;
};
