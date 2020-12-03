/* eslint-disable max-len */
import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';

const FooterLeft = styled(Col)`
  padding-right: 2rem;
  .description {
    color: #8993a4;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    margin-top: 16px;
  }
`;

const FooterRight = styled(Col)`
  display: flex;
  justify-content: space-between;
  a {
    color: #7652ff;
    font-size: 12px;
    line-height: 18px;
    margin-top: 8px;
    font-weight: 500;
    display: block;
    transition: all .3s ease-in-out;
  }
`;

export default function Footer() {
  return (
    <Row style={{ padding: '2rem', borderTop: '1px solid #ebecf0' }}>
      <FooterLeft span={12}>
        <div>
          <a href="http://localhost:3000" >
            <img alt=''  src="/logo.png" />
          </a>
        </div>
        <p className='description'>
          Where decentralization becomes reality for all. PApp is the platform for everyone to discover, use, and enjoy Papps 
          with ease. Explore Papps built on Incognito Chain.
        </p>
      </FooterLeft>
      <FooterRight span={12}>
        <Col span={4}>
          <p>
            Quick Access
          </p>
          <a href="http://localhost:3000">Submit App</a> 
          <a href="http://localhost:3000">SDK</a>
          <a href="http://localhost:3000">Contact Us</a>
        </Col>
        <Col span={4}>
          <p>Products</p>
          <a href="http://localhost:3000">Market</a>
          <a href="http://localhost:3000">Report</a>
        </Col> 
        <Col span={4}>
          <p>Terms</p>
          <a href="http://localhost:3000">Terms of User</a>
          <a href="http://localhost:3000">Privacy Policy</a>
          <a href="http://localhost:3000">Disclaimer</a>
        </Col> 
      </FooterRight>
    </Row>
  );
}
