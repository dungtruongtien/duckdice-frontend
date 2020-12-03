import { CloseCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ImageInputPlaceHolder from '../../../../../components/imageInputPlaceHolder';

export default function ImageForm({
  productImagePreviewRef1,
  productImagePreviewRef2,
  productImagePreviewRef3,
  productImagePreviewRef4,
  setImagesInput
}) {
  const [images, setImages] = useState({
    productImagePreview1: {
      file: null,
      imagePreview: null
    },
    productImagePreview2: {
      file: null,
      imagePreview: null
    },
    productImagePreview3: {
      file: null,
      imagePreview: null
    },
    productImagePreview4: {
      file: null,
      imagePreview: null
    }
  });

  const onCancelImagePreview = (key) => {
    setImages({
      ...images,
      [key]: { file: null, imagePreview: null }
    });
    setImagesInput(key, { file: null, imagePreview: null });
  };

  const renderImagePreview = (key) => {
    return (
      <div style={{ position: 'relative', zIndex: 10 }}>
        <CloseCircleOutlined
          onClick={() => onCancelImagePreview(key)}
          style={{
            zIndex: 1000, color: 'white', right: '0px', fontSize: '16px', position: 'absolute'
          }}
        />
        <img style={{ borderRadius: '8px', width: 200, height: 116 }} src={images[key].imagePreview} alt='' />
      </div>
    );
  };

  const handleImageChange = (key, e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages({
          ...images,
          [key]: { file, imagePreview: reader.result }
        });
        setImagesInput(key, { file, imagePreview: reader.result });
      };
    }
  };

  const onImagePreviewClick = (inputRef) => {
    inputRef.current.click();
  };

  const renderImage = (key) => {
    let ref = null;
    switch (key) {
    case 'productImagePreview1':
      ref = productImagePreviewRef1;
      break;
    case 'productImagePreview2':
      ref = productImagePreviewRef2;
      break;
    case 'productImagePreview3':
      ref = productImagePreviewRef3;
      break;
    case 'productImagePreview4':
      ref = productImagePreviewRef4;
      break;
    default:
      break;
    }
    return images[key].imagePreview
      ? renderImagePreview(key)
      : <ImageInputPlaceHolder onClick={() => onImagePreviewClick(ref)} />;
  };

  return (
    <div className='image-form'>
      <div className='form-title'>Product Images</div>
      <div className='image-wrapper'>
        <input
          style={{ display: 'none' }}
          className='video-upload-input'
          onChange={(e) => handleImageChange('productImagePreview1', e)}
          ref={productImagePreviewRef1}
          key={new Date().getTime() + 1}
          type='file'
        />
        <input
          style={{ display: 'none' }}
          className='video-upload-input'
          onChange={(e) => handleImageChange('productImagePreview2', e)}
          ref={productImagePreviewRef2}
          key={new Date().getTime() + 2}
          type='file'
        />
        <input
          style={{ display: 'none' }}
          className='video-upload-input'
          onChange={(e) => handleImageChange('productImagePreview3', e)}
          ref={productImagePreviewRef3}
          key={new Date().getTime() + 3}
          type='file'
        />
        <input
          style={{ display: 'none' }}
          className='video-upload-input'
          onChange={(e) => handleImageChange('productImagePreview4', e)}
          ref={productImagePreviewRef4}
          key={new Date().getTime() + 4}
          type='file'
        />
        <div className='preview-image-input'>
          {renderImage('productImagePreview1')}
        </div>
        <div className='preview-image-input'>
          {renderImage('productImagePreview2')}
        </div>
        <div className='preview-image-input'>
          {renderImage('productImagePreview3')}
        </div>
        <div className='preview-image-input'>
          {renderImage('productImagePreview4')}
        </div>
      </div>

    </div>
  );
}
