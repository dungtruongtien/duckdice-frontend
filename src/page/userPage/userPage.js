import {
  SecurityScanOutlined, SettingOutlined, ShoppingOutlined, WalletOutlined
} from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import React, { useState } from 'react';
import Store from './components/store';
import { NavBarWrapper, ProfileTitle } from './userPage.styled';
import Header from '../../components/header';
import Footer from '../../components/footer';

const listMenu = [
  {
    text: 'Store',
    key: 'store',
    icon: <ShoppingOutlined />
  },
  {
    text: 'Wallet',
    key: 'wallet',
    icon: <WalletOutlined />
  },
  {
    text: 'Profile Setting',
    key: 'profileSetting',
    icon: <SettingOutlined />
  },
  {
    text: 'Security Center',
    key: 'securityCenter',
    icon: <SecurityScanOutlined />
  }
];

function UserPage() {
  const [selectedKey, setSelectedKeys] = useState(['store']);

  return (
    <>
      <Header />
      <Row>
        <ProfileTitle lg={24} sm={24}>
          <div>Users Center</div>
        </ProfileTitle>
        <NavBarWrapper lg={6}>
          <div className='avatar'>
            <img src='default-avatar.png' />
            <p className='user-name'>Name</p>
          </div>
          <Menu
            selectedKeys={selectedKey}
            style={{ borderRight: 0 }}
            onClick={({ key }) => { setSelectedKeys(key); }}
            mode="vertical"
          >
            {listMenu.map((menu) => {
              const { icon, key, text } = menu;
              return (
                <Menu.Item key={key} icon={icon}>
                  {text}
                </Menu.Item>
              );
            })}
          </Menu>
        </NavBarWrapper>
        <Col lg={14}>
          <Store isOpen={selectedKey.includes('store')} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default UserPage;
