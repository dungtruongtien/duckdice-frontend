/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { useQuery } from '@apollo/react-hooks';
import { Field } from 'formik';
import React from 'react';
import { BLOCKCHAINS } from '../../../graphql/query';
import { submitForm } from '../../../util/validate';
import { TokenFormStyled } from '../submit.styled';
import TokenLogo from './tokenLogo';

const defaultBlockchains = { blockchains: { data: [] } };

export default function TokenForm({ setFieldValue, errors }) {
  const { data: blockChainsData = defaultBlockchains } = useQuery(BLOCKCHAINS);
  return (
    <TokenFormStyled lg={24} sm={24}>
      <div className='form-item-title'>Token Info</div>
      <div className='form-wrapper'>
        <div className='form-inside-title'>Does your product has its tokens or cryptocurrencies?</div>
        <div className='form-radio-wrapper'>
          <label className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="isOwnTokensOrCrypto" value="true" />
                  Yes we do.
          </label>
          <label className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="isOwnTokensOrCrypto" value="false" />
                  No we don't.
          </label>
        </div>
        {errors.isOwnTokensOrCrypto && <div className='input-error-msg'>{errors.isOwnTokensOrCrypto}</div>}
        <div className='title token-logo-title'>Token Logo</div>
        <Field validate={submitForm.required} name="tokenLogo" >
          {() => {
            return (<TokenLogo setFieldValue={setFieldValue} imageKey='tokenLogo' />);
          }}
        </Field>
        {errors.tokenLogo && <div className='input-error-msg'>{errors.tokenLogo}</div>}
        <div className='token-info'>
          <div className='issue'>
            <div className='title'>On which blockchain do you issue your token?</div>
            <Field validate={submitForm.required} as='select' name='blockChainTokenIssueId' className='category-select'>
              <option value="" >Choose Blockchain</option>
              {blockChainsData.blockchains.data.map((blockchain) => {
                return (<option key={blockchain.id} value={blockchain.id}>{blockchain.name}</option>);
              })}
            </Field>
            {errors.blockChainTokenIssueId && <div className='input-error-msg'>{errors.blockChainTokenIssueId}</div>}
          </div>
          <div className='ticket'>
            <div className='title'>
              <span className='title-1'>Ticker of your token.</span>
              <span className='title-2'>E.g.BTC</span>
            </div>
            <Field validate={submitForm.required} type='text' name='tokenTicket' placeholder='Your Token Ticker.' className='category-select' />
            {errors.tokenTicket && <div className='input-error-msg'>{errors.tokenTicket}</div>}
          </div>
          <div className='token-contract'>
            <div className='title'>Token Contract</div>
            <Field validate={submitForm.required} type='text' name='tokenContract' placeholder='Smart Contract address of your token.' className='category-select' />
            {errors.tokenContract && <div className='input-error-msg'>{errors.tokenContract}</div>}
          </div>
          <div className='decimal'>
            <div className='title'>Decimal</div>
            <Field validate={submitForm.required} type='text' name='decimal' placeholder='Decimal of your token.' className='category-select' />
            {errors.decimal && <div className='input-error-msg'>{errors.decimal}</div>}
          </div>
          <div className='token-listed'>
            <div className='title'>
              <span className='title-1'>Is your token listed on Coingecko?</span>
              <span className='title-2'>Suggested E.g. http://www.coingecko.com/en.coins/ethereum</span>
            </div>
            <Field validate={submitForm.required} type='text' name='coingeckoLink' placeholder='Please provide the link to your token’s Coingecko profile.' className='category-select' />
            {errors.coingeckoLink && <div className='input-error-msg'>{errors.coingeckoLink}</div>}
          </div>
        </div>
      </div>
    </TokenFormStyled>
  );
}
