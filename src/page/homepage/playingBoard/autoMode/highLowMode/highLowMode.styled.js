import styled from 'styled-components';

export const HighLowModeStyled = styled.div`
  background: #353e46;
  padding: 10px;
  height: 180px;
  .high-low-mode-title {
    display: flex;
    justify-content: space-between;
  }
  .method-wrapper {
    .title {
      margin-bottom: 0.25rem;
    }
    .btn-wrapper {
      width: 25%;
      display: flex;
      justify-content: space-between;
      background: #465059;
      height: 30px;
      padding: 0.15rem;
      border-radius: 6px;
      margin-right: 0.25rem;
      margin-bottom: 1rem;
      .btn {
        width: 50%;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        color: #8a99a5;
        font-size: 10px;
        border-radius: 6px;
        ${(props) => props.isHighMode && `&:hover {
          color: #f6a623;
          background: #323a42;
        }`}
      }
      .auto-btn {
        cursor: ${(props) => (props.isHighMode ? 'pointer' : 'not-allowed')} ;
        background: ${(props) => (props.isHighMode && props.method === 'auto' ? '#323a42' : '#465059')};
        color: ${(props) => (props.isHighMode && props.method === 'auto' ? '#f6a623' : '#8a99a5')};
      }
      .manual-btn {
        cursor: ${(props) => (props.isHighMode ? 'pointer' : 'not-allowed')} ;
        background: ${(props) => (props.isHighMode && props.method === 'manual' ? '#323a42' : '#465059')};
        color: ${(props) => (props.isHighMode && props.method === 'manual' ? '#f6a623' : '#8a99a5')};
      }
    }
    .method-content {
      .method-radio-wrapper {
        display: flex;
        .method-btn {
          display: flex;
          margin-right: 1rem;
          .title {
            margin-left: 0.25rem;
          }
        }
      }
      .method-text {
        color: #5c6b78;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
`;
