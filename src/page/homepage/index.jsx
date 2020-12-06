import React from 'react';
import Header from '../../components/header';
import { HomepageWrapper } from './homepage.styled';
import PlayingBoard from './playingBoard';
import BoardGameStats from './playingBoard/stats';

export default function HomePage() {
  return (
    <>
      <Header />
      <HomepageWrapper>
        <div className='board-wrapper'>
          <PlayingBoard />
        </div>
        <div className='board-stats'>
          <BoardGameStats />
        </div>
      </HomepageWrapper>
    </>
  );
}
