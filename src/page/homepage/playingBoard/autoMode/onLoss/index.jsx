import React, { useState } from 'react';
import { Field } from 'formik';
import CustomRadioCheckbox from '../../../../../components/customRadioCheckbox';

export default function OnLoss() {
  const [value, setValue] = useState(1);

  const onRadioChange = (checkValue) => {
    setValue(checkValue);
  };

  return (
    <div className='on-loss-wrapper'>
      <div className='on-loss-btn-wrapper'>
        <CustomRadioCheckbox onChange={() => onRadioChange(1)} checked={value === 1} />
        <div>
          <div className='title'>CHANGE BET BY</div>
          <Field name='changeBetBy'>
            {() => {
              return (<input
                disabled={value !== 1}
                onChange={() => { }}
                className='change-by-set-input'
                value='0.00000001' />);
            }}
          </Field>
        </div>
      </div>
      <div className='on-loss-btn-wrapper'>
        <CustomRadioCheckbox onChange={() => onRadioChange(2)} checked={value === 2} />
        <div className='title'>RESET TO BASE BET</div>
      </div>
      <div className='on-loss-btn-wrapper'>
        <CustomRadioCheckbox onChange={() => onRadioChange(3)} checked={value === 3} />
        <div className='title'>STOP AUTOBET</div>
      </div>
    </div>
  );
}
