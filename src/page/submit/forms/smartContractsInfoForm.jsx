/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Field } from 'formik';
import React from 'react';
import { Select } from 'antd';
import { SmartContractsInfoFormStyled } from '../submit.styled';
import { submitForm } from '../../../util/validate';

const { Option } = Select;

const contractAddress = [
  {
    key: 'ethereum',
    desc: 'Ethereum Mainnet Smart Contract Addresses',
    icon: 'https://dappimg.com/media/image/chain/6e3a4ec13942406e88fcd54d037d0928.png'
  },
  {
    key: 'blockstack',
    desc: 'Blockstack Mainnet Smart Contract Addresses',
    icon: 'https://dappimg.com/media/image/chain/522480d7779f477883e843ac9d557524.png'
  },
  {
    key: 'bitcoin',
    desc: 'Bitcoin Mainnet Smart Contract Addresses',
    icon: 'https://dappimg.com/media/image/chain/46de0ff47d3b46d1aa7c586ac962fa35.png'
  },
  {
    key: 'tron',
    desc: 'TRON Mainnet Smart Contract Addresses',
    icon: 'https://dappimg.com/media/image/chain/37734ac2d2c04cf8b2a28c931bf883af.png'
  }
];

export default function SmartContractsInfoForm({ errors, setFieldValue, values }) {
  const renderOntractAddress = () => {
    return values.onChainFunctions.map((onChainFunction) => {
      const onChainFunctionInfo = contractAddress.find((contract) => contract.key === onChainFunction);
      if (onChainFunctionInfo) {
        const { key, desc, icon } = onChainFunctionInfo;
        return (
          <div key={key} className='contract-address'>
            <div className='title'>
              <img className='icon' src={icon} />
              <p>{desc}</p>
            </div>
            <div className='desc'>Please list all the mainnet smart contracts of your product, excluding your token contract. Use "Enter" / "Return" to separate multiple smart contracts. For Steem and Hive based products, please list all relevant accounts.</div>
            <textarea onChange={(e) => { setFieldValue('contractAddress', { ...values.contractAddress, [key]: e.target.value }); }} placeholder='Please list all the mainnet smart contracts of your project. Use "Enter" / "Return" to separate multiple smart contracts, e.g. contract address 1↵ contract address 2↵' className='content' tabIndex="4"></textarea>
          </div>
        );
      }
      return <></>;
    });
  };

  return (
    <SmartContractsInfoFormStyled lg={24} sm={24}>
      <div className='form-item-title'>Smart Contracts Info</div>
      <div className='form-item-desc'>Dapp.com’s user will be able to see your product’s onchain stats via your smart contracts info if your product is blockchain based.</div>
      <div className='form-wrapper'>
        <div className='form-inside-title'>Is your product fully on-chain?</div>
        <div className='form-radio-wrapper'>
          <div className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="onChainStatus" value="yes" />
                  Yes, it is 100% on-chain.
          </div>
          <div className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="onChainStatus" value="some" />
                  There are some off-chain element.
          </div>
          <div className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="onChainStatus" value="no" />
                  No, it is not running on a blockchain.
          </div>
          {errors.onChainStatus && <div className='input-error-msg'>{errors.onChainStatus}</div>}
          <div className='input-title'>On which blockchain did you build your on-chain function?</div>
          <Field validate={submitForm.required} name="onChainFunctions">
            {() => {
              return (
                <>
                  <Select
                    mode="multiple"
                    className='tags-select'
                    placeholder="Please select"
                    onChange={(value) => { setFieldValue('onChainFunctions', value); }}
                    value={values.onChainFunctions}
                  >
                    <Option value='ethereum'>Ethereum</Option>
                    <Option value='blockstack'>Blockstack</Option>
                    <Option value='bitcoin'>Bitcoin</Option>
                    <Option value='tron'>TRON</Option>
                  </Select>
                </>
              );
            }}
          </Field>
          {errors.onChainFunctions && <div className='input-error-msg'>{errors.onChainFunctions}</div>}
          <Field validate={submitForm.required} name="contractAddress">
            {() => {
              return renderOntractAddress(values, setFieldValue);
            }}
          </Field>
          {errors.contractAddress && <div className='input-error-msg'>{errors.contractAddress}</div>}
        </div>
      </div>
    </SmartContractsInfoFormStyled>
  );
}
