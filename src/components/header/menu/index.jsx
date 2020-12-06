/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  LoginButton,
  RegisterButton,
  LeftMenuHeader,
  RightMenuHeader,
  HeaderStyled
} from './menu.styled';
import LoginPopup from './loginPopup';

function Menu({ me, dispatch }) {
  const [isOpen, setOpen] = useState(false);

  const showLoginModal = () => {
    setOpen(true);
  };

  const handleCancelLogin = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    setTimeout(() => {
      setOpen(false);
    }, 50);
  };

  return (
    <HeaderStyled>
      <LeftMenuHeader span={16}>
        <div className='app-logo'>
          <Link to="/" >
            <img alt='' src="https://duckdice.io/assets/images/logo.svg" />
            <p>DuckDice</p>
          </Link>
        </div>
        <div className='menu-item'>
          <a href="https://we.incognito.org" >Forum</a>
        </div>
        <div className='menu-item'>
          <a href="https://we.incognito.org" >Bonuses</a>
        </div>
        <div className='menu-item'>
          <a href="https://we.incognito.org" >Stats</a>
        </div>
        <div className='menu-item'>
          <a href="https://we.incognito.org" >Contest</a>
        </div>
        <div className='menu-item'>
          <a href="https://we.incognito.org" >Lottery</a>
        </div>
        <div className='menu-item'>
          <a href="https://we.incognito.org" >Races</a>
        </div>
      </LeftMenuHeader>
      <RightMenuHeader span={8}>
        <RegisterButton>Register and play</RegisterButton>
        <LoginButton>LOG IN</LoginButton>
        <div className='location-btn'>
          <i className="fa fa-compass" aria-hidden="true"></i>
        </div>
        <div className='message-btn'>
          99+
        </div>
      </RightMenuHeader>
      <LoginPopup isOpen={isOpen} handleOk={handleLogin} handleCancel={handleCancelLogin} />
    </HeaderStyled>
  );
}

function mapStateToProps(state) {
  const { me } = state;
  return { me };
}

export default connect(mapStateToProps)(Menu);
