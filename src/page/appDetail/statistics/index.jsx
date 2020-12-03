/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { AppStatisticsWrapper } from '../appDetail.styled';

export default function AppStatistics({ statistics }) {
  const {
    chartStatistics: {
      web, users, transactions, volume
    }
  } = statistics;

  const renderStatistics = (chartStatistics) => {
    return chartStatistics.map((statistic, idx) => {
      const { title, value } = statistic;
      return (<p key={idx} className='statistics-title'>{title}: <span>{value}</span></p>);
    });
  };

  return (
    <AppStatisticsWrapper lg={24} md={24}>
      <div className='title'>Rabbids Token's Statistics</div>
      <div className='balance-contracts'>
        <div className='balance'>Balance: {statistics.balance} ETH</div>
        <div className='smart-contracts'>{statistics.smartContracts.total} Smart Contracts</div>
      </div>
      <div className='statistics-charts'>
        <div className='app-chart web-chart'>
          <div className='chart-title'>{web.title}</div>
          <HighchartsReact
            highcharts={Highcharts}
            options={web.options}
            containerProps={{ style: { width: '100%', height: '50%' } }}
          />
          <div className='statistics'>
            {renderStatistics(web.statistics)}
          </div>
        </div>

        <div className='app-chart user-chart'>
          <div className='chart-title'>{users.title}</div>
          <HighchartsReact
            highcharts={Highcharts}
            options={users.options}
            containerProps={{ style: { width: '100%', height: '50%' } }}
          />
          <div className='statistics'>
            {renderStatistics(users.statistics)}
          </div>
        </div>

        <div className='app-chart transaction-chart'>
          <div className='chart-title'>{transactions.title}</div>
          <HighchartsReact
            highcharts={Highcharts}
            options={transactions.options}
            containerProps={{ style: { width: '100%', height: '50%' } }}
          />
          <div className='statistics'>
            {renderStatistics(transactions.statistics)}
          </div>
        </div>

        <div className='app-chart volume-chart'>
          <div className='chart-title'>{volume.title}</div>
          <HighchartsReact
            highcharts={Highcharts}
            options={volume.options}
            containerProps={{ style: { width: '100%', height: '50%' } }}
          />
          <div className='statistics'>
            {renderStatistics(volume.statistics)}
          </div>
        </div>

      </div>
    </AppStatisticsWrapper>
  );
}
