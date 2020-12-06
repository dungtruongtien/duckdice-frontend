import styled from 'styled-components';

export const HighLowModeStyled = styled.div`
  background: #353e46;
  padding: 10px;
  height: 180px;
  .high-low-mode-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .method-wrapper {
    .title {
    }
    .method-content {
      .method-radio-wrapper {
        .method-btn {
          display: flex;
          align-items: center;
          margin-right: 1rem;
          margin-bottom: 1rem;
          .title {
            margin-left: 0.25rem;
          }
          /* .custom-radio-checkbox {
            width: 1rem;
            height: 1rem;
            border: 1px solid #5c6b78;
            border-radius: 50%;
            padding: 0.15rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:hover {
              border-color: #f6a623;
            }
            .custom-radio-checkbox-inner { 
              background: #f6a623;
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
            }
          } */
          input {
            width: 0;
            height: 0;
            visibility: hidden;
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
