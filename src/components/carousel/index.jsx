/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const CarouselStyled = styled.div`
  .mySlides {display: none}
  img {vertical-align: middle;}

/* Slideshow container */
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    width: 100%;
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .prev, .next,.text {font-size: 11px}
  }
`;

export default function Carousel({ images, imageHeight }) {
  let slideIndex = 1;
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    // const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    slides[slideIndex - 1].style.display = 'block';
    // dots[slideIndex - 1].className += ' active';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  useEffect(() => {
    showSlides(slideIndex);
  }, []);
  return (
    <CarouselStyled>
      <div className="slideshow-container">
        {images.map((image, idx) => {
          return (
            <div key={idx} className="mySlides fade">
              <img alt='' src={image.src} style={{ width: '100%', height: imageHeight }} />
            </div>
          );
        })}
        <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
        <span className="next" onClick={() => plusSlides(1)}>&#10095;</span>

      </div>

    </CarouselStyled>
  );
}
