/* eslint-disable max-len */
import { Rate } from 'antd';
import React from 'react';
import { FooterWrapper } from './footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='footer-content'>
        <div className='links link-1'>
          <p><a href='http://localhost:3000'>Terms Of Use</a></p>
          <p><a href='http://localhost:3000'>Privacy Policy</a></p>
          <p><a href='http://localhost:3000'>About Us</a></p>
          <p><a href='http://localhost:3000'>Gamble Aware</a></p>
        </div>
        <div className='links link-2'>
          <p><a href='http://localhost:3000'>Fair</a></p>
          <p><a href='http://localhost:3000'>Help Center</a></p>
          <p><a href='http://localhost:3000'>FAQ</a></p>
        </div>
        <div className='rate-wrapper'>
          <div className='title'>AVERAGE SATISFACTION LEVEL</div>
          <div className='rate'>
            <Rate disabled defaultValue={5} />
          </div>
          <div className='rate-info'>Rated <span>5/5</span> based on 98 user reviews</div>
          <div className='rate-image'>
            <img className='image img-curacao' src='https://curacaolicense.net/wp-content/themes/dldglobal/assets/images/mini-slider-4.png' alt='' />
            <img className='image img-duckdice' src='https://duckdice.io/assets/images/cgf-white.svg' alt='' />
            <img className='image img-itech' src='https://duckdice.io/assets/images/img-itech-labs.svg' alt='' />
          </div>
        </div>
        <div className='about-us'>
          <div>
              Sabant B.V. reg. number 147211. Heelsumstraat 51, E-Commercepark Unit 102, Curacao. Licence #8048/JAZ2018-018
          </div>
          <div>
              Payment agent - Defraya Ltd. HE 408759. Loutrakiou 5, Chara Venezia Bld, 1st floor, Office 101, 2027 Nicosia, Cyprus.
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
