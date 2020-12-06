import React from 'react';
import NinjaIcon from '../../../../../components/ninjaIcon';
import { AllBetsTableStyled } from './allBetsTable.style';

export function AllBetsTable() {
  const columns = [
    {
      title: 'Bet Id',
      dataIndex: 'betId',
      key: 'betId',
      render: (text) => {
        return <span className='bet-id'>{text}</span>;
      }
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      render: (text) => {
        return <span className='time'>{text}</span>;
      }
    },
    {
      title: 'Duckling',
      dataIndex: 'duckling',
      key: 'duckling',
      render: (text) => {
        return (
          <div className='duckling-wrapper'>
            <div className='duckling-icon'>
              {text ? <i className="fas fa-user"></i> : <NinjaIcon />}
            </div>
            <div className='name'>
              {text || 'Duckling'}
            </div>
          </div>
        );
      }
    },
    {
      title: 'Bet Amount',
      dataIndex: 'betAmount',
      key: 'betAmount',
      render: (text) => {
        return (
          <div className='bet-amount-wrapper'>
            <div className='bet-amount-icon'>
              <div className='btc-wrapper'>
                <i className="fab fa-btc"></i>
              </div>
            </div>
            <div className='content'>
              {text}
            </div>
          </div>
        );
      }
    },
    {
      title: 'Payout',
      dataIndex: 'payout',
      key: 'payout',
      render: (text) => {
        return (
          <span className='payout'>{text}x</span>
        );
      }
    },
    {
      title: 'Chance',
      dataIndex: 'chance',
      key: 'chance',
      render: (text) => {
        return (
          <span className='chance'>{text}%</span>
        );
      }
    },
    {
      title: 'Game',
      dataIndex: 'game',
      key: 'game',
      render: (text) => {
        return (
          <span className='game'>{text}</span>
        );
      }
    },
    {
      title: 'Roll',
      dataIndex: 'roll',
      key: 'roll',
      render: (text) => {
        return (
          <span className='roll'>{text}</span>
        );
      }
    },
    {
      title: 'Profit',
      dataIndex: 'profit',
      key: 'profit',
      render: (text) => {
        const color = text > 0 ? '#8bbb4c' : '#f84447';
        return (
          <div className='profit'>
            <div className='bet-amount-icon'>
              <div className='btc-wrapper'>
                <i className="fab fa-btc"></i>
              </div>
            </div>
            <div style={{ color }}>{text}</div>
          </div>
        );
      }
    }
  ];

  const data = [
    {
      key: 'd596b3b2e87',
      betId: 'd596b3b2e87',
      time: '06:07:10',
      duckling: 'Kojjillac',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: 0.01248767
    },
    {
      key: 'd596b3b2e81',
      betId: 'd596b3b2e81',
      time: '06:07:10',
      duckling: '',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: -0.01248767
    },
    {
      key: 'd596b3b2e82',
      betId: 'd596b3b2e82',
      time: '06:07:10',
      duckling: '',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: -0.01248767
    },
    {
      key: 'd596b3b2e83',
      betId: 'd596b3b2e83',
      time: '06:07:10',
      duckling: 'ducky',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: 0.01248767
    },
    {
      key: 'd596b3b2e84',
      betId: 'd596b3b2e84',
      time: '06:07:10',
      duckling: '',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: -0.01248767
    },
    {
      key: 'd596b3b2e85',
      betId: 'd596b3b2e85',
      time: '06:07:10',
      duckling: '',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: -0.01248767
    },
    {
      key: 'd596b3b2e86',
      betId: 'd596b3b2e86',
      time: '06:07:10',
      duckling: 'ducky',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: 0.01248767
    },
    {
      key: 'd596b3b2e89',
      betId: 'd596b3b2e89',
      time: '06:07:10',
      duckling: 'Kojjillac',
      betAmount: 0.01248767,
      payout: 0,
      chance: 88.39,
      game: '> 1160',
      roll: 164,
      profit: 0.01248767
    }
  ];
  return (
    <AllBetsTableStyled pagination={false} columns={columns} dataSource={data} />
  );
}
