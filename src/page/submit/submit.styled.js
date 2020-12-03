import { Col } from 'antd';
import { Form } from 'formik';
import styled from 'styled-components';

export const SubmitTitle = styled(Col)`
background: url(/submit-background.png);
width: 100%;
height: 110px;
position: relative;
.submit-content {
  top: 10%;
  left: 10%;
  position: absolute;
  .submit-title {
    font-size: 40px;
    font-family: Futura,FuturaLT-Bold;
    font-weight: 700;
    color: #fff;
  }
  .submit-desc {
    font-size: 16px;
    color: #fff;
    line-height: 24px;
    font-family: Futura,FuturaLT-Bold;
  }
}
`;

export const SubmitForm = styled(Form)`
font-family: Avenir Next,AvenirNext;
padding-top: 1rem;
padding-left: 10%;
padding-right: 10%;
.input-error-msg {
  color: red;
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
}
.form-radio-btn {
  margin-right: 0.5rem;
}
.form-item-title {
  color: #172b4d;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.form-item-desc {
  color: #344563;
  font-size: 16px;
  line-height: 24px;
}
.form-wrapper {
  background: #fff;
  box-sizing: border-box;
  padding: 40px 44px;
  border: 1px solid #f4f5f7;
  border-radius: 16px;
  .form-inside-title {
    color: #344563;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-left: 4px;
  }
}
.submit-btn {
  width: 200px;
  height: 48px;
  line-height: 48px;
  color: #fff;
  background: #7652ff;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 40px;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
`;

export const IdentificationFormStyled = styled(Col)`
margin-top: 1rem;
.form-radio-wrapper {
  margin-top: 1rem;
  .form-radio {
    margin-right: 2rem;
  }
}
.email-input-title {
  color: #344563;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-left: 4px;
  margin-top: 1rem;
}
.email-input {
  margin-top: 0.25rem;
  background: #fff;
  display: block;
  width: 496px;
  height: 40px;
  border: 1px solid #c1c7d0;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 16px;
  border-radius: 8px;
  outline: none;
  color: #172b4d;
  box-sizing: border-box;
}
`;

export const BasicInformationFormStyled = styled(Col)`
margin-top: 1rem;
.product-logo-name {
  display: flex;
  justify-content: space-between;
  .product-logo {
    width: 15%;
    .product-logo-input {
      width: 142px;
      height: 142px;
      border-radius: 8px;
      border: 1px dashed #b1b7c2;
      .product-logo-input-title {
        cursor: pointer;
      }
    }
    .title {
      color: #344563;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      padding-left: 4px;
    }
  }
  .product-name {
    width: 80%;
    .title {
      color: #344563;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      padding-left: 4px;
    }
    .project-name-input {
      width: 100%;
      margin-top: 0.5rem;
    }
    .website-input-title {
      margin-top: 1rem;
    }
    .website-input {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
}
.preview-image-wrapper {
  .preview-image-input {
    cursor: pointer;
    width: 200px;
    height: 116px;
    border: 1px dashed #b1b7c2;
    border-radius: 8px;
  }
  .preview-image-wrapper-title {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    .title-1 {
      color: #344563;
      font-size: 14px;
      font-weight: 500;
      padding-left: 4px;
    }
    .title-2 {
      font-size: 14px;
      color: #6165b3;
      font-weight: 400;
    }
    .title-3 {
      font-weight: 400;
      color: #6165b3;
    }
  }
  .preview-image-input-wrapper {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
}
.category-select-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  .title {
    color: #344563;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
  .category {
    width: 48%;
    .category-select {
      margin-top: 0.25rem;
      height: 48px;
      width: 100%;
      border: 1px solid #c1c7d0;
      border-radius: 8px;
      padding: 0rem;
    }
  }
  .tags {
    width: 48%;
    .tags-select {
      width: 100%;
    }
    .ant-select-selector {
      margin-top: 0.25rem;
      width: 100%;
      border: 1px solid #c1c7d0;
      border-radius: 8px;
      padding: 0.5rem 0 0.5rem 0.5rem;
    }
  }
}
.product-select-wrapper  {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  .title {
    color: #344563;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
  .product-status {
    width: 48%;
    .product-select {
      width: 100%;
      height: 48px;
      border: 1px solid #c1c7d0;
      border-radius: 8px;
      padding: 0rem;
    }
  }
  .expected-launch {
    width: 48%;
    .ant-picker {
      width: 100%;
      height: 48px;
      border: 1px solid #c1c7d0;
      border-radius: 8px;
      padding: 0 0.5rem 0 0.5rem;
    }
  }
}
.description-wrapper {
  margin-top: 1.5rem;
  p { margin: 0; }
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .title-1 {
      color: #344563;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
    .title-2 {
      font-weight: 400;
      color: #6165b3;
    }
  }
  .short-description-input {
    border: 1px solid #c1c7d0;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  }
  .detail-description-input {
    outline: none;
    border: 1px solid #c1c7d0;
    background: transparent;
    resize: none;
    width: 100%;
    height: 120px;
    color: #626262;
    display: block;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 16px;
    line-height: 24px;
    font-size: 16px;
    font-family: Avenir Next,AvenirNext;
  }
}
.product-article-wrapper {
  margin-top: 1.5rem;
  p { margin: 0; }
  .title {
    display: flex;
    width: 100%;
    .title-1 {
      margin-right: 1rem;
      color: #344563;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
    .title-2 {
      font-weight: 400;
      color: #6165b3;
    }
  }
  .product-article-input {
    border: 1px solid #c1c7d0;
    border-radius: 8px;
    padding-left: 24px;
    padding-right: 24px;
    height: 48px;
    width: 100%;
  }
}
`;

export const TokenFormStyled = styled(Col)`
margin-top: 1rem;
font-family: Avenir Next,AvenirNext;
.form-wrapper {
  .form-radio-wrapper {
    margin-top: 1rem;
    .form-radio {
      margin-right: 2rem;
    }
  }
  .token-logo-title {
    margin-top: 1rem;
  }
  .token-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .issue {
      margin-top: 1.5rem;
      width: 48%;
      .title {
        color: #344563;
        font-size: 14px;
        font-weight: 400;
      }
      .category-select {
        width: 100%;
        margin-top: 0.25rem;
        height: 48px;
        border: 1px solid #c1c7d0;
        border-radius: 8px;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .ticket {
      margin-top: 1.5rem;
      width: 48%;
      .title-1 {
        color: #344563;
        font-size: 14px;
        font-weight: 400;
      }
      .title-2 {
        margin-left: 1rem;
        font-size: 14px;
        color: #6165b3;
        font-weight: 400;
      }
      .category-select {
        width: 100%;
        margin-top: 0.25rem;
        height: 48px;
        border: 1px solid #c1c7d0;
        border-radius: 8px;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .token-contract {
      margin-top: 1.5rem;
      width: 48%;
      .category-select {
        .title {
          color: #344563;
          font-size: 14px;
          font-weight: 400;
        }
        width: 100%;
        margin-top: 0.25rem;
        height: 48px;
        border: 1px solid #c1c7d0;
        border-radius: 8px;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .decimal {
      margin-top: 1.5rem;
      width: 48%;
      .category-select {
        .title {
          color: #344563;
          font-size: 14px;
          font-weight: 400;
        }
        width: 100%;
        margin-top: 0.25rem;
        height: 48px;
        border: 1px solid #c1c7d0;
        border-radius: 8px;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .token-listed {
      margin-top: 1.5rem;
      width: 100%;
      .title-1 {
        color: #344563;
        font-size: 14px;
        font-weight: 400;
      }
      .title-2 {
        margin-left: 1rem;
        font-size: 14px;
        color: #6165b3;
        font-weight: 400;
      }
      .category-select {
        width: 50%;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 0.25rem;
        height: 48px;
        border: 1px solid #c1c7d0;
        border-radius: 8px;
      }
    }
  }
  .token-logo-wrapper {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
    }
    .desc {
      margin-left: 12px;
      font-size: 14px;
      line-height: 20px;
      color: #8993a4;
    }
  }
}
`;

export const SmartContractsInfoFormStyled = styled(Col)`
  margin-top: 1rem;
  .form-radio-wrapper {
    margin-top: 1rem;
    .form-radio {
      margin-top: 0.5rem;
    }
  }
  .input-title {
    margin-top: 1rem;
    color: #344563;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-left: 4px;
    margin-top: 1rem;
  }
  .ant-select {
    width: 100%;
    .ant-select-selector {
      background: #fff;
      height: 40px;
      border: 1px solid #c1c7d0;
      padding: 0 0.5rem 0 0.5rem;
      font-size: 16px;
      border-radius: 8px;
      outline: none;
      color: #172b4d;
      box-sizing: border-box;
      width: 50%;
    }
  }
  .contract-address {
    margin-top: 1.5rem;
    .title {
      display: flex;
      .icon {
        width: 20px;
        height: 20px;
      }
      p { 
        margin: 0; 
        margin-left: 4px;
        font-weight: 500;
        color: #344563;
      }
    }
    .desc {
      font-size: 16px;
      line-height: 24px;
      color: #344563;
      margin-top: 8px;
    }
    .content {
      outline: none;
      border: 1px solid #c1c7d0;
      background: transparent;
      resize: none;
      width: 100%;
      height: 120px;
      color: #626262;
      display: block;
      border-radius: 8px;
      box-sizing: border-box;
      padding: 16px;
      line-height: 24px;
      font-size: 16px;
    }
  }
`;

export const SocialMediaOptionalInfoStyled = styled(Col)`
.form-input-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .form-input {
    position: relative;
    margin-top: 1rem;
    width: 49%;
    .social-id-icon {
      width: 40px;
      height: 33px;
      line-height: 52px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 3px;
      margin: auto;
      z-index: 0;
      .fill-area {
        fill:#6b778c;
      }
    }
    .social-input {
      padding-left: 3rem;
      padding-right: 1rem;
      width: 100%;
    }
  }
}
`;

export const AffiliateReferralProgramStyled = styled(Col)`
  margin-top: 1rem;
  .form-radio-wrapper {
    margin-top: 1rem;
    .form-radio {
      margin-top: 0.5rem;
    }
  }
  .affiliate-link {
    background: #fff;
    display: block;
    height: 40px;
    width: 40%;
    border: 1px solid #c1c7d0;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    color: #172b4d;
    box-sizing: border-box;
  }
`;
