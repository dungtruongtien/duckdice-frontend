import { CommentOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import React from 'react';
import { AppReviewWrapper } from '../appDetail.styled';

export default function AppComments({ comments }) {
  return (
    <AppReviewWrapper lg={24} md={24}>
      <div className='review-title'>
        <div className='title'>Reviews</div>
        <div className='rating'>Rating and Reviews</div>
      </div>
      <div className='review-content'>
        {comments.map((comment, idx) => {
          const {
            name, date, content, rate, avatar
          } = comment;
          return (
            <div key={idx} className='review-item'>
              <div className='review-info'>
                <div className='reviewer-info'>
                  <img className='avatar' src={avatar} alt='' />
                  <div className='name'>{name}</div>
                  <div className='rating'>
                    <Rate allowHalf disabled value={rate} style={{ color: '#f68922', fontSize: '13px' }} />
                  </div>
                </div>
                <div className='review-date'>{date}</div>
              </div>
              <div className='review-comment'>{content}</div>
              <div className='comment-btn'>
                <CommentOutlined />
                <p>Comment</p>
              </div>
            </div>
          );
        })}
      </div>
    </AppReviewWrapper>
  );
}
