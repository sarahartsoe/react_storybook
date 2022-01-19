import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './metrics.css';
import { chartFormatter } from '../../utilities/utilities.js';

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
          formatter: function () {
            if (
              this.key === 'Client Calls' ||
              this.key === 'Prospect Calls' ||
              this.key === 'Strategies Updated' ||
              this.key === 'New Clients'
            ) {
              return this.y;
            }
            const hundredThousand = this.y * 10000;
            if (hundredThousand > 1000 && hundredThousand < 1000000) {
              return `$` + this.y + `K`;
            } else if (this.y > 1000000) {
              return `$` + this.y + `MM`;
            } else if (this.y < 100) {
              return this.y;
            }
          },
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
          ? [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ]
          : ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients'],
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
          ? [
              'Avg Overall RM Satisfaction',
              'Client Calls',
              'Prospect Calls',
              'Strategies Updated',
            ]
          : ['Loan Production', 'Deposit Growth', 'TM Growth', 'New Clients'],
    };
    const series = [
      {
        name: 'RM',
        color: '#0166CC',
        data:
          chartType === 'outcome'
            ? [
                parseFloat(chartFormatter(chartData.loanProdY1)),
                parseFloat(chartFormatter(chartData.DepGrowthY1)),
                parseFloat(chartFormatter(chartData.TmGrowthY1)),
                {
                  y: parseFloat(chartData.newClientsY1),
                  color: `${
                    chartData.newClientsY1 > 2 ? '#0166CC' : '#D43F2D'
                  }`,
                },
              ]
            : [
                parseFloat(chartFormatter(chartData.satisfactionY1)),
                parseFloat(chartData.clientCallsY1),
                {
                  y: parseFloat(chartData.prospectCallsY1),
                  color: `${
                    chartData.prospectCallsY1 > 5 ? '#0166CC' : '#D43F2D'
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
                parseFloat(chartFormatter(chartData.loanProdY2)),
                parseFloat(chartFormatter(chartData.DepGrowthY2)),
                parseFloat(chartFormatter(chartData.TmGrowthY2)),
                parseFloat(chartData.newClientsY2),
              ]
            : [
                parseFloat(chartFormatter(chartData.satisfactionY2)),
                parseFloat(chartData.clientCallsY2),
                parseFloat(chartData.prospectCallsY2),
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
