import { Table } from 'antd';
import styled from 'styled-components';

export const AllBetsTableStyled = styled(Table)`
  .ant-table-thead > tr > th {
    background: #323a41;
    color: #5c6b78;
    font-weight: 400;
    border: 0;
  }
  .ant-table-tbody > tr:nth-child(even) {
    background: #323a41;
    &:hover {
      background: #323a41;
    }
  }

  .ant-table-tbody > tr:nth-child(odd) {
    background: #3a434b;
    &:hover {
      background: #3a434b;
    }
  }
  .ant-table-tbody > tr > td {
    border: 0;
    .btc-wrapper {
      margin-right: 0.5rem;
      width: 14px;
      height: 14px;
      background: #8a99a5;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      .fa-btc {
        font-size: 12px;
      }
    }
    .bet-id {
      color: #8a99a5;
      text-decoration: underline;
    }
    .time {
      color: #8a99a5;
    }
    .duckling-wrapper {
      display: flex;
      align-items: center;
      .duckling-icon {
        color: #f6a623;
        margin-right: 0.5rem;
        display: flex;
      }
      .name {
        color: #8a99a5;
        cursor: pointer;
        &:hover {
          color: #f6a623;
        }
      }
    }
    .bet-amount-wrapper {
      display: flex;
      align-items: center;
      .bet-amount-icon {
      }
      .content {
        color: #fff;
        font-weight: 600;
      }
    }
    .payout {
      color: #8a99a5;
    }
    .chance {
      color: #8a99a5;
    }
    .game {
      color: #8a99a5;
    }
    .roll {
      color: #8a99a5;
    }
    .profit {
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: transparent;
  }
`;
