import { Col, Row } from 'antd';
import { Form } from 'formik';
import styled from 'styled-components';

export const ProfileTitle = styled(Col)`
  div {
    padding: 1rem 2rem 1rem 2rem;
    font-size: 24px;
    margin: 40px auto 0;
    font-family: Futura;
    font-weight: 700;
    line-height: 36px;
    color: #344563;
  }
`;

export const NavBarWrapper = styled(Col)`
  padding: 1rem 2rem 1rem 2rem;
  .avatar {
    margin-top: 1rem;
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ebecf0;
    img {
      width: 112px;
      height: 112px;
      margin-bottom: 1rem;
    }
    .user-name {
      font-size: 20px;
      line-height: 22px;
      font-weight: 600;
      text-align: center;
      margin-top: 24px;
      color: #172b4d;
    }
  }
`;

export const StoreStyled = styled(Row)`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const CreateStoreFormStyled = styled(Form)`
  padding: 3rem;
  .create-form-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .form-wrapper {
    display: flex;
    .basic-info-form {
      padding-right: 3rem;
      border-right: 1px solid #ebecf0;
      width: 50%;
      .form-title {
        margin-top: 1rem;
      }
      .price-wrapper {
        display: flex;
        .price-sell-wrapper {
          width: 100%;
          margin-right: 1rem;
        }
        .price-discount-wrapper {
          width: 100%;
        }
        .input {
          width: 100%;
        }
      }
      .status-wrapper {
        margin-top: 1rem;
        display: flex;
        align-items: center;
      }
      .product-status {
        display: flex;
        align-items: center;
        margin-right: 2rem;
        .input {
          width: 20%;
        }
        .form-title {
          margin: 0 0.5rem 0 0;
        }
      }
      .out-off-stock-wrapper {
        display: flex;
        align-items: center;
        .form-title {
          margin: 0 0 0 0.5rem;
        }
      }
      .long-desc {
        resize: none;
        height: 120px !important;
      }
      .input {
        background: #fff;
        display: block;
        height: 40px;
        border: 1px solid #c1c7d0;
        padding-left: 24px;
        padding-right: 24px;
        font-size: 16px;
        border-radius: 8px;
        outline: none;
        color: #172b4d;
        box-sizing: border-box;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
    .image-form {
      padding-left: 3rem;
      width: 50%;
      .form-title {
        margin-top: 1rem;
      }
      .image-wrapper {
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        .preview-image-input {
          cursor: pointer;
          margin-bottom: 3rem;
          width: 200px;
          height: 116px;
          border: 1px dashed #b1b7c2;
          border-radius: 8px;
        }
      }
    }
  }
  .submit-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    .submit-btn {
      width: 100px;
      height: 40px;
      line-height: 44px;
      color: #fff;
      background: #7652ff;
      text-align: center;
      font-size: 12px;
      border-radius: 8px;
      font-weight: 600;
      border: 0;
      cursor: pointer;
      transition: all .3s ease-in-out;
    }
    .cancel-btn {
      width: 100px;
      height: 40px;
      line-height: 44px;
      color: #fff;
      background: transparent;
      color: black;
      border: 1px solid black;      
      margin-right: 1rem;
      text-align: center;
      font-size: 12px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all .3s ease-in-out;
    }
  }
`;
