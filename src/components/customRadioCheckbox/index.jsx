import React from 'react';
import { CheckBoxStyled } from './checkbox.styled';

export default function CustomRadioCheckbox({
  style, isDisabled, onChange, checked
}) {
  return (
    <>
      <input
        disabled={isDisabled}
        type='radio'
        style={{ width: 0, height: 0, visibility: 'hidden' }}
        {...style}
      />
      <CheckBoxStyled onClick={onChange} isDisabled={isDisabled} checked={checked}>
        <div className='custom-radio-checkbox-inner'></div>
      </CheckBoxStyled>
    </>
  );
}
