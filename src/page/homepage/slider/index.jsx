import { Col, Row } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const MenuSliderSyled = styled.div`
    height: 30%;
    width: 100%;
    cursor: pointer;
    background-size: cover;
    border-radius: 8px;
    background-color: linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) );
    position: relative;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${(props) => props.background});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;  
    margin-bottom: ${(props) => !props.isLastItem && '5%'};
    p {
      position: absolute;
      bottom: 0;
      left: 10px;
      color: white;
    }
`;

const MenuMainSlider = styled.div`
  background-image: url(${({ background }) => background});
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  background-size: cover;
  p {
      position: absolute;
      bottom: 0;
      left: 10px;
      font-size: 24px;
      line-height: 26px;
      color: #fff;
      font-weight: 600;
    }
`;

const sliders = [
  {
    title: 'Create Your Own Branded Currency in a Few Simple Steps',
    value: 'ANOX',
    background: 'homepage-slider-1.jpg'
  },
  {
    title: 'Submit Your Own Branded Defi App in a Few Simple Steps',
    value: 'bbb',
    background: 'homepage-slider-2.png'
  },
  {
    title: 'Lottery game comming soon Win Up to 50000 PRV !',
    value: 'ccc',
    background: 'homepage-slider-3.jpg'
  }
];

export default function Slider() {
  const [slider, setSlider] = useState(sliders[0]);

  const renderMainSlider = () => {
    const { title, background } = slider;
    return (
      <MenuMainSlider background={background}>
        <p>{title}</p>
      </MenuMainSlider>
    );
  };

  const renderMenuSlider = () => {
    return sliders.map((sliderItem, idx) => {
      const { title, background } = sliderItem;
      return (
        <MenuSliderSyled
          key={idx}
          onMouseEnter={() => { setSlider(sliders[idx]); }}
          background={background}
          isLastItem={idx === sliders.length - 1}
        >
          <p>{title}</p>
        </MenuSliderSyled>
      );
    });
  };

  return (
    <Row style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem 1rem 2rem'
    }}>
      <Col style={{ height: '360px' }} lg={17} md={24}>
        {renderMainSlider()}
      </Col>
      <Col lg={6} md={24} style={{ height: '360px' }}>
        {renderMenuSlider()}
      </Col>
    </Row>
  );
}
