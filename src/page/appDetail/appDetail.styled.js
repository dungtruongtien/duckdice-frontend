import { Col } from 'antd';
import styled from 'styled-components';

export const AppInfoWrapper = styled(Col)`
display: flex;
padding: 1rem 2rem 1rem 2rem;
.app-logo {
  width: 12%;
  text-align: center;
  .app-image {
    width: 144px;
    height: 144px;
    img {
      width: 144px;
      height: 144px;
    }
  }
  .view-button {
    border-radius: 8px; 
    font-size: 12px; 
    font-weight: 500;
    height: 30px; 
    background: #7652ff; 
    color: white;    
  }
  .edit-app-btn {
    margin-top: 0.5rem;
    a {
      text-decoration: underline; 
      color: #a5adba; 
      font-size: 14px; line-height: 19px;
      width: 144px;
    }
  }
}
.app-info {
  width: 58%;
  .app-title {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    .app-name {
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
      color: #344563;
    }
    .action-icon {
      display: flex;
      .action-icon-item {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
        p {
          margin: 0;
          margin-left: 0.5rem;
          color: #7652ff;
          cursor: pointer;
        }
      }
    }
  }
  .app-rating {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    p {
      margin: 0;
      margin-left: 0.5rem;
      margin-top: 4px;
      font-weight: 500;
      line-height: 24px;
      font-size: 14px;
    }
  }
  .app-description {
    margin-top: 0.5rem;
    font-size: 14px;
    width: 100%;
    word-break: break-all;
    line-height: 19px;
    color: #344563;
  }
  .app-tags {
    margin-top: 0.5rem;
    display: flex;
    .tag-item {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      img {
        height: 16px;
        width: 16px;
        margin-right: 0.25rem;
      }
      p {
        margin: 0;
        font-size: 12px;
        color: #7652ff;
      }
    }
  }
  .app-keywords {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    .keyword {
      margin-right: 0.75rem;
      border-radius: 8px;
      padding: 1px 9px;
      background: rgba(220,211,255,.5);
      font-size: 12px;
      color: #4312ff;
      cursor: pointer;
    }
  }
}
.app-users-statistics {
  width: 31%;
  padding-left: 1rem;
  .users-statistics {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebecf0;
    .total-unique-users {
      margin-right: 4rem;
    }
    .name {
      color: #8993a4;
      font-size: 12px;
      font-weight: 500;
    }
    .statistics {
      font-size: 24px;
      color: #344563;
      font-weight: 500;
      vertical-align: baseline;
    }
  }
  .get-updates {
    margin-top: 0.5rem;
    font-size: 12px;
    line-height: 18px;
    color: #8993a4;
    span {
      cursor: pointer;
    }
  }
}
`;

export const BannerWrapper = styled(Col)`
padding: 1rem 2rem 1rem 2rem;
width: 100%;
img {
  width: 100%;
  height: 100%;
}
`;

export const AboutProjectWrapper = styled(Col)`
display: flex;
justify-content: space-between;
padding: 1rem 2rem 2rem 2rem;
.about-project-carousel {
  width: 60%;
}
.about-project-ref {
  overflow: hidden;
  width: 35%;
  .title {
    width: 1320px;
    font-size: 24px;
    margin: 40px auto 0;
    margin-top: 0;
    font-family: Futura;
    font-weight: 700;
    line-height: 36px;
    color: #344563;
  }
  .ref-image {
    display: block;
    margin-top: 16px;
    width: 100%;
    height: 216px;
    background: #fff;
    border-radius: 8px;
    position: relative;
    transition: all .3s ease-in-out;
    overflow: hidden;
    box-shadow: 0 5px 10px 0 rgba(23,43,77,.05), 0 5px 20px 0 rgba(23,43,77,.05);
    img {
      height: 128px;
      width: 100%;
    }
    .article-title {
      width: 392px;
      margin: 8px auto 0;
      font-weight: 600;
      color: #344563;
      font-size: 16px;
      line-height: 22px;
      max-height: 22px;
      overflow: hidden;
    }
    .article-desc {
      width: 392px;
      margin: 2px auto 0;
      color: #344563;
      font-size: 16px;
      line-height: 22px;
      max-height: 44px;
      overflow: hidden;
    }
  }
}
`;

export const AppStatisticsWrapper = styled(Col)`
background: #fafbfc;
padding: 1rem 2rem 1rem 2rem;
overflow: hidden;
.title {
  margin: 1rem auto 1rem auto;
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
  color: #344563;
  width: 1320px;
}
.balance-contracts {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 54px;
  color: #7652ff;
  text-align: center;
  font-weight: 600;
  .balance {
    width: 24%;
    box-shadow: 0 0 10px 0 #f4f5f7;
    border-radius: 8px;
    background: #fff;
  }
  .smart-contracts {
    width: 75%;
    box-shadow: 0 0 10px 0 #f4f5f7;   
    border-radius: 8px;
    background: #fff;
    transition: all .3s ease-in-out;
    &:hover {
      cursor: pointer;
      color: #4312ff;
      box-shadow: 0 5px 20px 0 rgba(23,43,77,.05), 0 5px 10px 0 rgba(23,43,77,.05);
    }
  }
}
.statistics-charts {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  .statistics {
    .statistics-title {
      margin: 0;
      margin-left: 48px;
      margin-bottom: 0.25rem;
      font-size: 14px;
      line-height: 21px;
      color: #344563;
    }
    span {
      font-size: 14px;
      line-height: 21px;
      font-weight: 700;
      margin-left: 8px;
      color: #7652ff;
    }
  }
  .web-chart {
    span {
      color: #7652ff;
    }      
  }
  .user-chart {
    span {
      color: #f68924;
    }      
  }
  .transaction-chart {
    span {
      color: #48bf5c;
    }    
  }
  .volume-chart {
    span {
      color: #3c6eff;
    }    
  }
  .chart-title {
    margin-left: 48px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: #344563;
    font-weight: 600;
    line-height: 24px;
    font-size: 16px;
  }
  .app-chart {
    font-family: Avenir Next,AvenirNext;
    margin-bottom: 1rem;
    box-shadow: 0 0 10px 0 #f4f5f7;   
    border-radius: 8px;
    background: #fff;
    height: 350px;
    width: 24%;
    background: white;
  }
}
`;

export const AppReviewWrapper = styled(Col)`
  padding: 1rem 2rem 1rem 2rem;
  font-family: Avenir Next,AvenirNext;
  margin-bottom: 1rem;
  .review-title {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 24px;
      line-height: 31px;
      font-weight: 700;
      color: #344563;
    }
    .rating {
      color: #7652ff;
      font-size: 18px;
      vertical-align: middle;
      font-family: 400;
      transition: all .3s ease-in-out;
      line-height: 31px;
      font-weight: 700;
      &:hover {
        cursor: pointer;
        color: #4312ff;
      }
    }
  }
  .review-content {
    .review-item {
      :last-child {
        border: 0;
      }
      border-bottom: 1px solid #ebecf0;
      padding-bottom: 1rem;
      margin-top: 1rem;
      .review-info {
        display: flex;
        justify-content: space-between;
        .reviewer-info {
          align-items: center;
          display: flex;
          .avatar {
            height: 40px;
            width: 40px;
            margin-right: 1rem;
          }
          .name {
            margin-right: 1rem;
          }
        }
        .review-date {
          font-size: 14px;
          line-height: 40px;
          color: #a5adba;
          font-weight: 500;
        }
      }
      .review-comment {
        font-size: 16px;
        line-height: 24px;
        color: #344563;
        margin-top: 1rem;
      }
      .comment-btn {
        margin-top: 1rem;
        font-size: 12px;
        color: #7652ff;
        display: flex;
        align-items: center;
        p {
          margin: 0;
          margin-left: 0.25rem;
          line-height: 0;
        }
      }
    }
  }
`;
