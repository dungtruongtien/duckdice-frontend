import { Field } from 'formik';
import React from 'react';
import { submitForm } from '../../../util/validate';
import { AffiliateReferralProgramStyled } from '../submit.styled';

export default function AffiliateReferralProgramForm({ errors, values }) {
  return (
    <AffiliateReferralProgramStyled lg={24} sm={24}>
      <div className='form-item-title'>Affiliate/Referral Program</div>
      <div className='form-wrapper'>
        <div className='form-inside-title'>Do you have an affiliate or referral program?</div>
        <div className='form-radio-wrapper'>
          <div className='form-radio'>
            <Field
              validate={submitForm.required}
              name="affiliateReferralProgramStatus"
              className='form-radio-btn'
              type="radio"
              value="yes"
            />
                  Yes, here is an affiliate link for Dapp.com.
            {values.affiliateReferralProgramStatus === 'yes' && <Field
              validate={submitForm.required}
              name="affiliateLink"
            >
              {() => {
                return (
                  <div>
                    <Field
                      className='affiliate-link'
                      type='text'
                      placeholder='Please fill in your form.'
                      name='affiliateLink'
                    />
                    {errors.affiliateLink && <div className='input-error-msg'>{errors.affiliateLink}</div>}
                  </div>
                );
              }}
            </Field>}
          </div>
          <div className='form-radio'>
            <Field
              validate={submitForm.required}
              name="affiliateReferralProgramStatus"
              className='form-radio-btn'
              type="radio"
              value="separately"
            />
                  Yes, but you will have to apply separately.
          </div>
          <div className='form-radio'>
            <Field validate={submitForm.required}
              className='form-radio-btn' type="radio" name="affiliateReferralProgramStatus" value="no" />
                  Sorry, we don’t.
          </div>
        </div>
        {errors.affiliateReferralProgramStatus
        && <div className='input-error-msg'>{errors.affiliateReferralProgramStatus}</div>}
      </div>
    </AffiliateReferralProgramStyled>
  );
}
