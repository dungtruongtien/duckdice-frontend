/* eslint-disable max-len */
import {
  FolderOpenOutlined, HeartOutlined, ShareAltOutlined, TwitterOutlined
} from '@ant-design/icons';
import { Button, Rate } from 'antd';
import React from 'react';
import { AppInfoWrapper } from '../appDetail.styled';

export default function AppDetailInfo({ info }) {
  const {
    logo, appName, rate, description, tags, keywords, userStatistics: { lastDay, uniqueUsers }
  } = info;

  const renderTags = (appTags) => {
    return appTags.map((tag, idx) => {
      const { name, logo: tagsLogo } = tag;
      return (
        <div key={idx} className='tag-item'>
          <img src={tagsLogo} alt='' />
          <p>{name}</p>
        </div>
      );
    });
  };

  const renderKeywords = (appKeywords) => {
    return appKeywords.map((keyword, idx) => {
      return (
        <div key={idx} className='keyword'>{keyword}</div>
      );
    });
  };

  return (
    <AppInfoWrapper lg={24} md={24}>
      <div className='app-logo'>
        <div className='app-image'>
          <img src={logo} alt='' />
        </div>
        <div>
          <Button className='view-button'>View Website</Button>
        </div>
        <div className='edit-app-btn'>
          <a href='http://localhost:3000'>Edit This App</a>
        </div>
      </div>
      <div className='app-info'>
        <div className='app-title'>
          <div className='app-name'>{appName}</div>
          <div className='action-icon'>
            <div className='action-icon-item collect'>
              <FolderOpenOutlined style={{ color: '#7652ff' }} />
              <p>Collect</p>
            </div>
            <div className='action-icon-item like'>
              <HeartOutlined style={{ color: '#7652ff' }} />
              <p>Like</p>
            </div>
            <div className='action-icon-item share'>
              <ShareAltOutlined style={{ color: '#7652ff' }} />
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className='app-rating'>
          <Rate allowHalf value={rate} />
          <p>{rate} Ratings</p>
        </div>
        <div className='app-description'>{description}</div>
        <div className="app-tags">
          {renderTags(tags)}
        </div>
        <div className='app-keywords'>
          {renderKeywords(keywords)}
        </div>
      </div>
      <div className='app-users-statistics'>
        <div className='users-statistics'>
          <div>
            <p className='name'>24Hr Users</p>
            <p className='statistics'>{lastDay}</p>
          </div>
          <div className='total-unique-users'>
            <p className='name'>Total Unique Users</p>
            <p className='statistics'>{uniqueUsers}</p>
          </div>
        </div>
        <div className='get-updates'>
          <p className='title'>Get updates on its social media.</p>
          <div className='icon'>
            <span>
              <TwitterOutlined style={{ color: '#2ed3fd' }} />
            </span>
          </div>
        </div>
      </div>
    </AppInfoWrapper>
  );
}
