import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background: #3a434b;
  .footer-content {
    padding-bottom: 2rem;
    padding-top: 2rem;
    max-width: 968px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .links {
      a {
       color: #8a99a5;
       text-decoration: underline;
       &:hover {
        color: #f6a623;
       }
      }
    }
    .rate-wrapper {
      .title {
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 12px;
        color: #8a99a5;
      }
      .rate {
        margin-bottom: 0.5rem;
        .ant-rate-star {
          color: #f6a623;
        }
      }
      .rate-info {
        font-weight: 600;
        font-size: 12px;
        color: #f6a623;
        margin-bottom: 0.5rem;
        span {
          font-size: 14px;
        }
      }
      .rate-image {
        .image {
          width: 50px;
          height: 50px;
          margin-right: 0.5rem;
        }
        .img-duckdice {
          width: 100px;
        }
      }
    }
    .about-us {
      width: 300px;
      font-size: 13px;
      line-height: 18px;
      color: #8a99a5;
      font-style: normal;
      div {
        margin-bottom: 1rem;
      }
    }
  }
`;
