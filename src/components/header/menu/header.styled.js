import styled from 'styled-components';

export const HeaderInfo = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  background: #323a41;
  .btc-wrapper {
    margin-right: 0.25rem;
    width: 10px;
    height: 10px;
    background: #8a99a5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    .fa-btc {
      font-size: 8px;
    }
  }
  .left-header-info {
    .winner-wrapper {
      display: flex;
      align-items: center;
      .winner-name {
        margin-right: 0.25rem;
        color: #f6a623;
        font-weight: 600;
        font-size: 12px;
      }
      .winner-amount {
        display: flex;
        align-items: center;
        p {
          color: #f6a623;
          font-weight: 600;
          margin: 0;
          font-size: 12px;
        }
      }
      .rating {
        color: #f6a623;
        margin-right: 0.25rem;
      }
      .congrats {
        font-weight: 600;
        font-size: 12px;
        color: #8a99a5;
        margin-right: 0.25rem;        
      }
    }
  }

  .right-header-info {
    .news-wrapper {
      display: flex;
      .news-content {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        .title {
          margin-right: 0.25rem;
          font-weight: 600;
          font-size: 12px;
          color: #8a99a5;
          margin-right: 0.25rem;
        }
        .content {
          color: #f6a623;
          font-weight: 600;
          margin: 0;
          font-size: 12px;
        }
      }
      .news-content:last-child {
        margin: 0;
      }
    }
  }
`;