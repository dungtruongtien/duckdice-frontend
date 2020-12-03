import React from 'react';
import { Rate } from 'antd';
import Menu from './menu';
import { HeaderInfo } from './menu/header.styled';

export default function Header() {
  return (
    <>
      <HeaderInfo>
        <div className='left-header-info'>
          <div className='winner-wrapper'>
            <span class="fa fa-star rating"></span>
            <div className='congrats'>Congrats</div>
            <div className='winner-name'>NINJA</div>
            <div className='winner-amount'>
              <div className='btc-wrapper'>
                <i className="fa fa-btc" aria-hidden="true"></i>
              </div>
              <p>0.09900000</p>
            </div>
          </div>
        </div>

        <div className='right-header-info'>
          <div className='news-wrapper'>
            <div className='news-content'>
              <div className='title'>Online</div>
              <div className='content'>595</div>
            </div>
            <div className='news-content'>
              <div className='title'>BTC Price</div>
              <div className='content'>$19372.12</div>
            </div>
            <div className='news-content'>
              <div className='title'>Bets</div>
              <div className='content'>11,522,210,506</div>
            </div>
            <div className='news-content'>
              <div className='title'>Won Last 24h</div>
              <div className='btc-wrapper'>
                <i className="fa fa-btc" aria-hidden="true"></i>
              </div>
              <div className='content'>10.67929201</div>
            </div>
            <div className='news-content'>
              <div className='title'>Jackpot</div>
              <div className='btc-wrapper'>
                <i className="fa fa-btc" aria-hidden="true"></i>
              </div>
              <div className='content'>2.43605563</div>
            </div>
          </div>
        </div>
      </HeaderInfo>
      <Menu />
    </>
  );
}
