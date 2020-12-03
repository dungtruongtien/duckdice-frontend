import { Rate, Pagination } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { FolderOpenOutlined } from '@ant-design/icons';
import {
  AppItemsStyled, ItemWrapped, AppLogo, AppInfo, PaginationWrapper
} from './appItems.styled';

export default function AppItems({ appItems }) {
  const renderKeywords = (item) => {
    const { keywords } = item;
    return (
      <div className='keywords'>
        {keywords.map((keyword, idx) => {
          return (
            <div key={idx} className='keyword'>{keyword}</div>
          );
        })}
      </div>
    );
  };

  const renderTags = (item) => {
    const { tags } = item;
    return (
      <div className="tags">
        {tags.map((tag, idx) => {
          const { name, logo } = tag;
          return (
            <div key={idx} className='tag-item'>
              <img src={logo} alt='' />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  };
  const renderAppInfo = (item) => {
    const { appName, rate, description } = item;
    return (
      <AppInfo>
        <div className='app-name-wrapper'>
          <Link to='/detail/123' className='app-name'>{appName}</Link>
          <div className='collect'>
            <FolderOpenOutlined style={{ color: '#7652ff' }} />
            <p>Game</p>
          </div>
        </div>
        <div className='rate'>
          <Rate allowHalf defaultValue={rate} />
          <p>{rate}</p>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
        {renderTags(item)}
        {renderKeywords(item)}
      </AppInfo>
    );
  };

  const renderLogo = (item) => {
    const { logo, collects } = item;
    return (
      <AppLogo>
        <Link to='/detail/123' style={{ display: 'block' }}>
          <img alt='' src={logo} />
          <p>{collects} Collects</p>
        </Link>
      </AppLogo>
    );
  };

  return (
    <AppItemsStyled>
      {appItems.map((item, idx) => {
        return (
          <ItemWrapped lg={7} md={24} key={idx}>
            {renderLogo(item)}
            {renderAppInfo(item)}
          </ItemWrapped>
        );
      })}
      <PaginationWrapper>
        <Pagination defaultCurrent={1} total={50} />
      </PaginationWrapper>
    </AppItemsStyled>
  );
}
