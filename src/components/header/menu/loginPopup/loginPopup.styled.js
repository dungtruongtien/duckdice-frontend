import styled from 'styled-components';

export const LoginPopupLeft = styled.div`
    width: 50%;
    background: url(/login-background.jpg);
    background-size: cover;
    background-position: 50%;
    position: relative;
    img {
      display: block;
      width: 100px;
      margin: 56px 0 0 29px;
    }
    .login-description {
      font-size: 24px;
      font-family: Avenir Next,AvenirNext;
      font-weight: 700;
      color: #fff;
      width: 382px;
      position: absolute;
      bottom: 56px;
      left: 0;
      right: 0;
      margin: auto;
      line-height: 36px;
    }
`;

export const LoginPopupRight = styled.div`
    width: 50%;
    .login-title {
      font-size: 24px;
      line-height: 32px;
      font-family: Futura,FuturaLT-Bold;
      font-weight: 700;
      color: #344563;
      margin: 56px auto 0;
      text-align: center;
    }
    .third-party-sec {
      width: 200px;
      margin: 32px auto 0;
      position: relative;
      display: flex;
      justify-content: space-between;
      .third-party-item {
        width: 80px;
        height: auto;
        margin-top: 0;
        border-radius: 8px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        position: relative;
        .name {
          font-size: 14px;
          color: #344563;
          line-height: 20px;
          margin-top: 8px;
        }
        .image-container {
          background: #3c559f;
          width: 48px;
          height: 48px;
          border-radius: 24px;
          margin: auto;
          transition: all .3s ease-in-out;
          img {
            display: block;
            width: 48px;
            height: 48px;
            cursor: pointer;
          }
        }
        .image-container.facebook {
          background: #3c559f;
        }
        .image-container.google {
          background: #4a90e2;
        }
      }
    }
    .or-sec {
      width: 296px;
      font-size: 15px;
      color: #4a4a4a;
      display: flex;
      flex-direction: row;
      margin: 16px auto 0;
      justify-content: space-between;
      align-items: center;
      img {
        width: 125px;
        height: 1px;
        display: block;
      }
    }
    .login-button {
      display: block;
      height: 46px;
      background: #7652ff;
      border-radius: 8px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      transition: all .3s ease-in-out;
      width: 296px;
      margin: 16px auto 0;
    }
    .input-wrapper {
      width: 296px;
      margin: 24px auto 0;
      .input-email .input-password {
        height: 54px;
        width: 100%;
        margin-bottom: 1rem;
      }
    }
`;
