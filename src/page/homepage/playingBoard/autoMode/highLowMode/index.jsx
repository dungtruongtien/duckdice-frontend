/* eslint-disable max-len */
import { Switch } from 'antd';
import React, { useState } from 'react';
import CustomRadioCheckbox from '../../../../../components/customRadioCheckbox';
import { HighLowModeStyled } from './highLowMode.styled';

export default function HighLowMode() {
  const [isHighMode, setMode] = useState(false);
  const [method, setMethod] = useState('auto');
  const [methodRadioValue, setMethodRadioValue] = useState('onLoss');

  return (
    <HighLowModeStyled isHighMode={isHighMode} method={method}>
      <div className='high-low-mode-title'>
        <div className='title'>ALLOW SWITCH HIGH/LOW MODE</div>
        <Switch checked={isHighMode} onChange={() => setMode(!isHighMode)} />
      </div>
      <div className='method-wrapper'>
        <div className='title'>METHOD</div>
        <div className='btn-wrapper'>
          <div onClick={() => setMethod('auto')} className='btn auto-btn'>AUTO</div>
          <div onClick={() => setMethod('manual')} className='btn manual-btn'>MANUAL</div>
        </div>
        <div className='method-content'>
          {method === 'auto' ? <div className='method-radio-wrapper'>
            <div className='method-btn'>
              {/* <input
                disabled={!isHighMode}
                onChange={() => setMethodRadioValue('onLoss')}
                checked={isHighMode && methodRadioValue === 'onLoss'}
                type='radio'
              /> */}
              <CustomRadioCheckbox
                isDisabled={!isHighMode}
                onChange={() => setMethodRadioValue('onLoss')}
                checked={isHighMode && methodRadioValue === 'onLoss'}
              />
              <div className='title'>ON LOSS</div>
            </div>
            <div className='method-btn'>
              {/* <input
                disabled={!isHighMode}
                onChange={() => setMethodRadioValue('onWin')}
                checked={isHighMode && methodRadioValue === 'onWin'}
                type='radio'
              /> */}
              <CustomRadioCheckbox
                isDisabled={!isHighMode}
                onChange={() => setMethodRadioValue('onWin')}
                checked={isHighMode && methodRadioValue === 'onWin'}
              />
              <div className='title'>ON WIN</div>
            </div>
            <div className='method-btn'>
              {/* <input
                disabled={!isHighMode}
                onChange={() => setMethodRadioValue('eachBet')}
                checked={isHighMode && methodRadioValue === 'eachBet'}
                type='radio'
              /> */}
              <CustomRadioCheckbox
                isDisabled={!isHighMode}
                onChange={() => setMethodRadioValue('eachBet')}
                checked={isHighMode && methodRadioValue === 'eachBet'}
              />
              <div className='title'>EACH BET</div>
            </div>
          </div>
            : <div className='method-text'>
              High/Low mode may switch later than expected in case of the slow Internet connection and cause unsuspected effects
            </div>}
        </div>
      </div>
    </HighLowModeStyled>
  );
}
