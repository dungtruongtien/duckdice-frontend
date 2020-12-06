import { Field } from 'formik';
import React from 'react';
import HighLowMode from './highLowMode';
import OnLoss from './onLoss';
import Save from './save';

export default function FlashMode() {
  return (
    <div className='auto-mode'>
      <div className='auto-mode-input-wrapper'>
        <div className='limits'>
          <div className='title'>LIMITS</div>
          <div className='limits-input-wrapper'>
            <div className='max-bet-amount'>
              <div className='title'>MAX BET AMOUNT</div>
              <div className='input-wrapper'>
                <div className='btc-icon-wrapper'>
                  <div className='btc-wrapper'>
                    <i className="fab fa-btc"></i>
                  </div>
                </div>
                <Field name='maxBetAmount'>
                  {() => {
                    return (<input className='max-bet-amount-input' onChange={() => { }} value='0.00000001' />);
                  }}
                </Field>
              </div>
            </div>
            <div className='bet'>
              <div className='title'>BET</div>
              <div className='input-wrapper'>
                <Field name='bet'>
                  {() => {
                    return (<input className='bet-amount-input' onChange={() => { }} value='0.00000001' />);
                  }}
                </Field>
              </div>
            </div>
          </div>
        </div>

        <div className='on-loss'>
          <div className='title'>ON LOSS</div>
          <div className='on-loss-input-wrapper'>
            <OnLoss />
          </div>
        </div>

        <div className='on-loss'>
          <div className='title'>ON WIN</div>
          <div className='on-loss-input-wrapper'>
            <OnLoss />
          </div>
        </div>

        <div className='limits'>
          <div className='title'>STOP IF</div>
          <div className='limits-input-wrapper'>
            <div className='max-bet-amount'>
              <div className='title'>BALANCE IS ABOVE</div>
              <div className='input-wrapper'>
                <div className='btc-icon-wrapper'>
                  <div className='btc-wrapper'>
                    <i className="fab fa-btc"></i>
                  </div>
                </div>
                <Field name='balanceAbove'>
                  {() => {
                    return (<input className='max-bet-amount-input' onChange={() => { }} value='0.00000001' />);
                  }}
                </Field>
              </div>
            </div>
            <div className='bet'>
              <div className='title'>BALANCE IS BELOW</div>
              <div className='input-wrapper'>
                <div className='btc-icon-wrapper'>
                  <div className='btc-wrapper'>
                    <i className="fab fa-btc"></i>
                  </div>
                </div>
                <Field name='balanceBelow'>
                  {() => {
                    return (<input className='bet-amount-input' onChange={() => { }} value='0.00000001' />);
                  }}
                </Field>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='high-low-mode-wrapper'>
        <div className='high-low-outer-wrapper'>
          <HighLowMode />
        </div>
        <div className='save-outer-wrapper'>
          <Save />
        </div>
      </div>
    </div>
  );
}
