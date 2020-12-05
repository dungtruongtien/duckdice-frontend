import { Button } from 'antd';
import { Field } from 'formik';
import React from 'react';

export default function ManualMode() {
  return (
    <div className='manual-mode'>
      <div className='bet-amount'>
        <div className='title'>BET AMOUNT</div>
        <div className='input-wrapper'>
          <div className='btc-icon-wrapper'>
            <div className='btc-wrapper'>
              <i className="fab fa-btc"></i>
            </div>
          </div>
          <Field name='betAmount'>
            {() => {
              return (<input className='bet-amount-input' value='0.00000001' />);
            }}
          </Field>
        </div>
        <div className='formula-wrapper'>
          <Button className='formula-btn'>min</Button>
          <Button className='formula-btn'>/2</Button>
          <Button className='formula-btn'>x2</Button>
        </div>
      </div>
      <div className='win-chance'>
        <div className='title'>WIN CHANCE</div>
        <div className='input-wrapper'>
          <Field name='betAmount'>
            {() => {
              return (<input className='bet-amount-input' value='0.00000001' />);
            }}
          </Field>
        </div>
        <div className='formula-wrapper'>
          <Button className='formula-btn'>min</Button>
          <Button className='formula-btn'>-5</Button>
          <Button className='formula-btn'>+5</Button>
          <Button className='formula-btn'>max</Button>
        </div>
      </div>
      <div className='payout'>
        <div className='title'>PAYOUT</div>
        <div className='input-wrapper'>
          <Field name='betAmount'>
            {() => {
              return (<input className='bet-amount-input' value='0.00000001' />);
            }}
          </Field>
        </div>
      </div>
      <div className='profit'>
        <div className='title'>PROFIT ON WIN</div>
        <div className='input-wrapper'>
          <div className='btc-icon-wrapper'>
            <div className='btc-wrapper'>
              <i className="fab fa-btc"></i>
            </div>
          </div>
          <Field name='betAmount'>
            {() => {
              return (<input className='bet-amount-input' value='0.00000001' />);
            }}
          </Field>
        </div>
      </div>
    </div>
  );
}
