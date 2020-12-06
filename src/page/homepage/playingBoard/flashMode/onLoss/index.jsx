import React, { useState } from 'react';
import { Field } from 'formik';

export default function OnLoss() {
  const [value, setValue] = useState(1);

  const onChange = (checkValue) => {
    setValue(checkValue);
  };

  return (
    <div className='on-loss-wrapper'>
      <div className='on-loss-btn-wrapper'>
        <input onChange={() => onChange(1)} checked={value === 1} type='radio' className='on-loss-radio-btn' />
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
        <input onChange={() => onChange(2)} checked={value === 2} type='radio' className='on-loss-radio-btn' />
        <div className='title'>RESET TO BASE BET</div>
      </div>
      <div className='on-loss-btn-wrapper'>
        <input onChange={() => onChange(3)} checked={value === 3} type='radio' className='on-loss-radio-btn' />
        <div className='title'>STOP AUTOBET</div>
      </div>
    </div>
  );
}
