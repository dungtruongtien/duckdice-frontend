/* eslint-disable max-len */
import React from 'react';
import Footer from '../../components/footer';
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
        <div className='introduction'>
          <p>DuckDice is a design-driven Bitcoin dice game with Faucet. Aiming to become the best cryptocurrency dice game available on the internet! We are working hard to maintain our reputation of fair Bitcoin dice among many other online casinos and your trust is our priority.</p>
          <p>DuckDice offers free features:</p>
          <ul>
            <li>Multiple currencies: Bitcoin (BTC), Litecoin (LTC), Dogecoin (DOGE), Ethereum (ETH), Dash (DASH), Bitcoin Cash (BCH), Monero (XMR), Ripple (XRP), Ethereum Classic (ETC), Bitcoin Gold (BTG), Stellar (XLM), Zcash (ZEC), Tether (USDT), Duck's Toilet Paper (DTP);</li>
            <li>Free Bitcoin Faucet</li>
            <li>Rain that triggers coins giveaway</li>
            <li>Tips</li>
            <li>Affiliate Program</li>
            <li>Autoplay that allows you to use Bitcoin dice roll automatically (aka Autobet)</li>
            <li>Various bonuses will take place from time to time</li>
            <li>Bitcoin dice mobile version</li>
            <li>Telegram Game Bot</li>
          </ul>
          <p>By using Faucet you can experience a game in a "Bitcoin dice simulator" mode which will cost you absolutely nothing. There are many cryptocurrency game Faucets available but our Faucet is highly competitive! Our Faucet allows you to play without any risk, satoshis are given to you for free so there is no reason to worry about losing it, you can check various gambling strategies instead.</p>
          <p>Feel free to join <a className="link" href="https://bitcointalk.org/index.php?topic=1676313" target="_blank" rel="noopener noreferrer">our community</a> under the Bitcoin dice gambling topic on the biggest Bitcoin forum. You are always welcome to make your improvement suggestions regarding our game, with your help we'll become one of the top Bitcoin gambling!</p>
        </div>
      </HomepageWrapper>
      <Footer />
    </>
  );
}
