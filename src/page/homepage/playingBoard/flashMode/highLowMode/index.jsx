/* eslint-disable max-len */
import { Switch } from 'antd';
import React, { useState } from 'react';
import CustomRadioCheckbox from '../../../../../components/customRadioCheckbox';
import { HighLowModeStyled } from './highLowMode.styled';

export default function HighLowMode() {
  const [isHighMode, setMode] = useState(false);
  const [methodRadioValue, setMethodRadioValue] = useState('onLoss');

  return (
    <HighLowModeStyled isHighMode={isHighMode}>
      <div className='high-low-mode-title'>
        <div className='title'>ALLOW SWITCH HIGH/LOW MODE</div>
        <Switch checked={isHighMode} onChange={() => setMode(!isHighMode)} />
      </div>
      <div className='method-wrapper'>
        <div className='method-content'>
          <div className='method-radio-wrapper'>
            <div className='method-btn'>
              <CustomRadioCheckbox
                isDisabled={!isHighMode}
                onChange={() => setMethodRadioValue('onLoss')}
                checked={isHighMode && methodRadioValue === 'onLoss'}
              />
              <div className='title'>ON LOSS</div>
            </div>
            <div className='method-btn'>
              <CustomRadioCheckbox
                isDisabled={!isHighMode}
                onChange={() => setMethodRadioValue('onWin')}
                checked={isHighMode && methodRadioValue === 'onWin'}
              />
              <div className='title'>ON WIN</div>
            </div>
            <div className='method-btn'>
              <CustomRadioCheckbox
                isDisabled={!isHighMode}
                onChange={() => setMethodRadioValue('eachBet')}
                checked={isHighMode && methodRadioValue === 'eachBet'}
              />
              <div className='title'>EACH BET</div>
            </div>
          </div>
        </div>
      </div>
    </HighLowModeStyled>
  );
}
