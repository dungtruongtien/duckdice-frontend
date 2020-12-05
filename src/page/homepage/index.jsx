import React from 'react';
import Header from '../../components/header';
import { HomepageWrapper } from './homepage.styled';
import PlayingBoard from './playingBoard';

export default function HomePage() {
  return (
    <>
      <Header />
      <HomepageWrapper>
        <div className='board-wrapper'>
          <PlayingBoard />
        </div>
      </HomepageWrapper>
    </>
  );
}
