import { Col } from 'antd';
import styled from 'styled-components';

export const SearchBarWrapper = styled(Col)`
  padding: 5rem 3rem 0rem 3rem;
  margin: 0;
  display: flex; 
  justify-content: center;
  .input-wrapper {
    width: 100%;
    position: relative;
    img {
      width: 50px;
      height: 50px; 
      position: absolute;
      right: 10px;
      top: 15px;
    }
    input {
      ::placeholder {
        color: #D8D8D8;
      }
      border: 0;
      font-size: 1.5rem;
      padding-left: 3rem;
      width: 100%; 
      height: 80px;
    }
  }
`;

export const ExploreAppsWrapper = styled(Col)`
  padding: 0rem 3rem 0rem 3rem;
  .title {
    font-family: Helvetica;
    /* font-size: 20px;
    color: #000000;
    letter-spacing: 0; */
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
  }
  .apps-wrapper {
    margin-top: 2rem;
    .app {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      .logo {
        img {
          width: 70px;
          height: 70px;
        }
      }
      .info {
        margin-left: 1rem;
        .name {
          color: black;
          font-size: 1.75rem;
          font-weight: 500;
        }
        .desc {
          color: black;
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const ExploreAppsButton = styled(Col)`
  padding: 0rem 3rem 0rem 3rem;
  .title {
    font-family: Helvetica;
    /* font-size: 20px;
    color: #000000;
    letter-spacing: 0; */
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
  }
  .desc {
    color: black;
    font-size: 1.25rem;
  }
  .button-wrapper {
    .button {
      background: #333335;
      border-radius: 25px;
      font-family: Helvetica;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      width: 48%;
      height: 80px;
    }
    margin-top: 1.5rem;
    display: flex; 
    justify-content: space-between;
  }
`;

export const ListYourAppWrapper = styled(Col)`
  padding: 0rem 3rem 0rem 3rem;
  .title {
    font-family: Helvetica;
    /* font-size: 20px;
    color: #000000;
    letter-spacing: 0; */
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
  }
  .desc {
    color: black;
    font-size: 1.25rem;
  }
`;
