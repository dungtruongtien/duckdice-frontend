import { Button } from 'antd';
import { Field } from 'formik';
import React from 'react';

export default function Save() {
  return (
    <div className='save-wrapper'>
      <div className='save-btn-wrapper'>
        <Button className='save-btn'>SAVE CURRENT SETTINGS AS A PRESET</Button>
      </div>
      <div className='presets-wrapper'>
        <div className='title'>MY PRESETS</div>
        <div className='input-wrapper'>
          <Field name='betAmount'>
            {() => {
              return (<input className='preset' onChange={() => { }} value='0.00000001' />);
            }}
          </Field>
        </div>
      </div>
    </div>
  );
}
