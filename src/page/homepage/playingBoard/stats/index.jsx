import React, { useState } from 'react';
import { BoardStats } from './stats.styled';

export default function BoardGameStats() {
  const [tab, setTab] = useState('allBets');
  return (
    <BoardStats activeTab={tab}>
      <div className='tabs-wrapper'>
        <div onClick={() => setTab('allBets')} className='all-bets-tab tabs'>ALL BETS</div>
        <div onClick={() => setTab('myBets')} className='my-bets-tab tabs'>MY BETS</div>
        <div onClick={() => setTab('highRollers')} className='high-rollers-tab tabs'>HIGH ROLLERS</div>
        <div onClick={() => setTab('jackpots')} className='jackpots-tab tabs'>JACKPOTS</div>
      </div>
    </BoardStats>
  );
}
