import { Col, Row } from 'antd';
import styled from 'styled-components';

export const AppItemsStyled = styled(Row)`
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

export const ItemWrapped = styled(Col)`
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  height: 218px;
  border: 1px solid #f4f5f7;
  border-radius: 8px;
  background: #fff;
`;

export const AppLogo = styled.div`
  margin-bottom: 10px;
  text-align: center;
  height: 100%;
  width: 35;
  margin-right:1rem;
  img {
    width: 80px;
    height: 80px;
  }
`;

export const AppInfo = styled.div`
  margin-bottom: 10px;
  height: 100%;
  width: 65%;
  .app-name-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .app-name {
      display: block;
      font-weight: 600;
      color: #344563; 
      margin: 0;
    }
  }
  .collect {
    display: flex; 
    align-items: center;
    p {
      margin: 0;
      margin-left: 5px;
      font-size: 12px;
      color: #7652ff;
    }
  }
  .rate {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    p {
      margin: 0;
      margin-left: 1rem;
    }
  }
  .description {
    margin-bottom: 10px;
    p {
      margin: 0;
      font-size: 12px;
      line-height: 18px;
      color: #505f79;
    }
  }
  .tags {
    margin-bottom: 10px;
    display: flex;
    .tag-item {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      img {
        height: 16px;
        width: 16px;
      }
      p {
        margin: 0;
        font-size: 12px;
        color: #8993a4;
      }
    }
  }
  .keywords {
    display: flex;
    align-items: center;
    .keyword {
      margin-right: 5px;
      margin-top: 5px;
      border-radius: 8px;
      padding: 4px 4px;
      background: #f4f5f7;
      font-size: 9px;
      color: #a5adba;
      cursor: pointer;
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
