/* eslint-disable max-len */
import { CloseCircleOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';

export default function TokenLogo({ setFieldValue, imageKey }) {
  const logoInputRef = useRef(document.createElement('input'));
  const [image, setImage] = useState({ file: null, imagePreview: '' });

  const onCancelImagePreview = () => {
    setImage({ file: null, imagePreview: null });
    setFieldValue(imageKey, null);
  };

  const renderImagePreview = () => {
    return (
      <div style={{
        position: 'relative', zIndex: 10, width: 48, height: 48
      }}>
        <CloseCircleOutlined
          onClick={() => onCancelImagePreview()}
          style={{
            zIndex: 1000, color: 'white', right: '0px', fontSize: '16px', position: 'absolute'
          }}
        />
        <img style={{ borderRadius: '8px', width: 48, height: 48 }} src={image.imagePreview} alt='' />
      </div>
    );
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage({ file, imagePreview: reader.result });
        setFieldValue(imageKey, file);
      };
    }
  };

  const onImagePreviewClick = (inputRef) => {
    inputRef.current.click();
  };

  const renderImage = () => {
    return image.imagePreview
      ? renderImagePreview()
      : <div className='token-logo-wrapper' onClick={() => onImagePreviewClick(logoInputRef)}>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAM1BMVEVHcEymrruJlKWKlKSKlKWLlaaZorKVnq+lrrmXobGmrrulrrumrruJlKWTnayJk6SlrboiX0WvAAAAD3RSTlMAecLuqmQwRAoc89e82o23UPfMAAACvklEQVRo3u2ay5asIAxFkWeigvz/116o1hZLoFTIHfSqTFw6YPNITgLC2LsNo99s2D7dfAeWMTDrc/DNgHka4Nzvcf0GWf4tm7wfh8MXnL2fkXUz89aenvxoWFdTo59+CTh17f7WabfPv5+Adbe0SYPsa3/WAGjbH4J6IJACHJu9oQMYPwdh0nQA7acAIIwyDIDREy4C+JEe4D2ln84zMSCmt+mrN138WYolb4L3iFMsNf9CqHaAXKrWLmaiDljKYzDX4K9uQtZUfQwhyrS+BihWWFVCAFyJ5BpgJWg6wA9B9gMYKc2ZILoBVMZtyiN8ALDxxRICXjEhrgIu5oO0AZlZ0qoTXMkHaQPIl4XjHS9jd90U8Z4bs4dxICUtwCTOSgGA4K4CaQAQ23WpMzUDUKe6Lhdk+pBqygDzIBkFreA/8RwiGj5H8oV8gFrvngkxlO2Wy1yzVIBaCwqufiDumC11I0Al6Vg42MRuN94EiLKQmg391eKc8J8C0J5qIPOKsMMnfAwAm6mywhjQHOz5CLLlloVbObuWD5Kp4AnL3S0KivlgnyCbOqfAu1VHaQe6d1puxU+pTnwEcCUA7wTgJcDSCbAugVRKRdcMj21M2AcgllMBJJdCGdoAENAGqOSDdYqElDL4jQ4PXpoifJQPiossoggeTDwqflUJ8OZTZef9AMBKoGVU6sEGRKYCt7/EZT/JrH2yhUq0QtijUuijYFcOjqty7XJyze85ez2jZaba3jx/q+8PQLa2/3F/8DZLsv/pG8oLrtKIUNwKYbkjPF79GqUZQwyI+YCS8V/OrsmP98l/UJD/YnF+oAPEn0RDgNBN0WDCOoyUfhqHYdjX/qiBOS133/bnQ4C53tcezOgnfcD5uSPCnC+CxCsz46x7KcT71ZM4iGHyv8K6XdCBm++bQmQuz7zUe4BGQKbZf6ubUPtXQOnLAAAAAElFTkSuQmCC' alt='' />
        <div className='desc'>JPG,PNG with ratio of 1:1. 48*48px or larger recommended. Must be less than 50.</div>
      </div>;
  };

  return (
    <>
      {renderImage()}
      <input
        style={{ display: 'none' }}
        className='product-logo-input'
        onChange={handleImageChange}
        ref={logoInputRef}
        type='file'
      />
    </>
  );
}
