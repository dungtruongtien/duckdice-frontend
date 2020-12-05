import { Switch } from 'antd';
import React, { useState } from 'react';
import { HighLowModeStyled } from './highLowMode.styled';

export default function HighLowMode() {
  const [isHighMode, setMode] = useState(false);
  const [method, setMethod] = useState('auto');
  const [methodRadioValue, setMethodRadioValue] = useState('onLoss');

  return (
    <HighLowModeStyled method={method}>
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
          <div className='method-radio-wrapper'>
            <div className='method-btn'>
              <input
                onChange={() => setMethodRadioValue('onLoss')}
                checked={methodRadioValue === 'onLoss'}
                type='radio'
              />
              <div className='title'>ON LOSS</div>
            </div>
            <div className='method-btn'>
              <input
                onChange={() => setMethodRadioValue('onWin')}
                checked={methodRadioValue === 'onWin'}
                type='radio'
              />
              <div className='title'>ON WIN</div>
            </div>
            <div className='method-btn'>
              <input
                onChange={() => setMethodRadioValue('eachBet')}
                checked={methodRadioValue === 'eachBet'}
                type='radio'
              />
              <div className='title'>EACH BET</div>
            </div>
          </div>
        </div>
      </div>
    </HighLowModeStyled>
  );
}
