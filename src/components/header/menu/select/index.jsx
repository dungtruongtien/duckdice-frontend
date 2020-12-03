import { Divider } from 'antd';
import React from 'react';
import { MenuStyled, OptionDropdown, ItemOption } from './select.styled';

export default function Select({ title, options = [] }) {
  const renderOption = (data) => {
    return data.map((select, idx) => {
      return (
        <div key={idx}>
          <ItemOption isLastItem={idx === data.length - 1}>
            <p className='option-title'>{select.title}</p>
            {select.childOptions.map((childOption, index) => {
              return (
                <div className='option-wrapper' key={index}>
                  <a className='option-item' href={childOption.value}>
                    <img src={childOption.icon} alt="" className="icon" />
                    {childOption.text}
                  </a>
                </div>
              );
            })}
          </ItemOption>
          {idx < options.length - 1 && <Divider style={{ height: 'auto', margin: 0 }} type='vertical' />}
        </div>
      );
    });
  };
  return (
    <>
      <MenuStyled>
        <p className='title'>{title}</p>
        <OptionDropdown className='dropdown'>
          <div className='option-margin'></div>
          <div className='option-main'>
            {renderOption(options)}
          </div>
        </OptionDropdown>
      </MenuStyled>
    </>
  );
}
