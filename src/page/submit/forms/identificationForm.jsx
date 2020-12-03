/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { Field } from 'formik';
import React from 'react';
import { submitForm } from '../../../util/validate';
import { IdentificationFormStyled } from '../submit.styled';

export default function IdentificationForm({ errors }) {
  return (
    <IdentificationFormStyled lg={24} sm={24}>
      <div className='form-item-title'>Identification</div>
      <div className='form-item-desc'>Using an official email address within your organization will allow us to verify your admin role of your product. A verified admin will be able to submit changes, receive weekly profile stats, reply comments of other users, and unlock more functions on Dapp.com.</div>
      <div className='form-wrapper'>
        <div className='form-inside-title'>Are You the Owner/Admin?</div>
        <div className='form-radio-wrapper'>
          <label className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="identificationUser" value="adminOrOwner" />
                  Yes I'm the admin/owner.
          </label>
          <label className='form-radio'>
            <Field validate={submitForm.required} className='form-radio-btn' type="radio" name="identificationUser" value="isSupporter" />
                  No. I'm just a supporter.
          </label>
          {errors.identificationUser && <div className='input-error-msg'>{errors.identificationUser}</div>}
          <div className='email-input-title'>Your email Address</div>
          <Field
            validate={submitForm.required}
            className='input email-input'
            placeholder='Please enter your email address.'
            name="email"
            type="email"
          />
          {errors.email && <div className='input-error-msg'>{errors.email}</div>}
        </div>
      </div>
    </IdentificationFormStyled>
  );
}
