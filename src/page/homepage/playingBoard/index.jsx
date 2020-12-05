import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Board, RegisterButton } from './playingBoard.styled';
import ManualMode from './manualMode';
import FlashMode from './flashMode';
import AutoMode from './autoMode';

export default function PlayingBoard() {
  const [mode, setMode] = useState('auto');
  return (
    <Board mode={mode}>
      <div className='board-header'>
        <div className='mode-wrapper'>
          <Button onClick={() => setMode('manual')} className='btn manual-btn'>Manual</Button>
          <Button onClick={() => setMode('auto')} className='btn auto-btn'>AUTO</Button>
          <Button onClick={() => setMode('flash')} className='btn flash-btn'>FLASH</Button>
        </div>
        <div className='setting-wrapper'>
          <div className='btn-wrapper'>
            <div className='btn chart-btn'>
              <div className='icon-wrapper'>
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </div>
            </div>
            <div className='btn egg-btn'>
              <div className='icon-wrapper'>
                <i className="fas fa-egg"></i>
              </div>
            </div>
          </div>
          <div className='setting-btn'>
            <SettingOutlined />
          </div>
        </div>
      </div>
      <div className='board-info'>
        <div className='game-number'>
          <div className='title'>Luck</div>
          <div className='content'>N/A</div>
        </div>
        <div className='game-number'>
          <div className='title'>Bets</div>
          <div className='content'>0</div>
        </div>
        <div className='game-number'>
          <div className='title'>Wins</div>
          <div className='content'>0</div>
        </div>
        <div className='game-number'>
          <div className='title'>Losses</div>
          <div className='content'>0</div>
        </div>
        <div className='game-number'>
          <div className='title'>Wagered</div>
          <div className='btc-wrapper'>
            <i className="fab fa-btc"></i>
          </div>
          <div className='content'>0.00000000</div>
        </div>
        <div className='game-number'>
          <div className='title'>Profit</div>
          <div className='btc-wrapper'>
            <i className="fab fa-btc"></i>
          </div>
          <div className='content'>0.00000000</div>
        </div>
        <div className='redo-btn'>
          <i className="fas fa-redo"></i>
        </div>
      </div>
      <div className='board-game-main'>
        <div className='egg-number-wrapper'>
          <div className='egg-number'>
            <div className='number'>0</div>
            <i className="fas fa-egg"></i>
          </div>
          <div className='egg-number'>
            <div className='number'>0</div>
            <i className="fas fa-egg"></i>
          </div>
          <div className='egg-number'>
            <div className='number'>0</div>
            <i className="fas fa-egg"></i>
          </div>
          <div className='egg-number'>
            <div className='number'>0</div>
            <i className="fas fa-egg"></i>
          </div>
          <div className='high-number'> <span>&#60;</span> 5000</div>
        </div>
      </div>

      <Formik
        initialValues={{}}
        onSubmit={() => { console.log('submitting'); }}
      >
        {({
          /* eslint-disable */
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched
          /* eslint-enable */
        }) => (
          <>
            <div className='board-button'>
              <Button className='btn low-btn'>LOW</Button>
              <div className='register-btn-wrapper'>
                <RegisterButton>Register and play</RegisterButton>
              </div>
              <Button className='btn high-btn'>HIGH</Button>
            </div>
            <div className='board-input'>
              <ManualMode />
              {mode === 'auto' && <AutoMode />}
              {mode === 'flash' && <FlashMode />}
            </div>
          </>
        )}
      </Formik>
    </Board>
  );
}
