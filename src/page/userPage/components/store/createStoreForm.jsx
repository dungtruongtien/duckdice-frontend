import React from 'react';
import { Field, Formik } from 'formik';
import { Modal } from 'antd';
import { CreateStoreFormStyled } from '../../userPage.styled';
import ImageForm from './imageForm';

export default function CreateStoreForm({
  isOpen,
  onCloseCreateForm,
  productImagePreviewRef1,
  productImagePreviewRef2,
  productImagePreviewRef3,
  productImagePreviewRef4
}) {
  let imagesInput = {
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
  };

  const setImagesInput = (key, { file, imagePreview }) => {
    imagesInput = {
      ...imagesInput,
      [key]: { file, imagePreview }
    };
  };

  return (
    <Modal
      bodyStyle={{ padding: '0px' }}
      visible={isOpen}
      title={null}
      footer={null}
      // onOk={handleOk}
      width='1024px'
      onCancel={onCloseCreateForm}
    >
      <div style={{ width: '100%' }}>
        <Formik
          initialValues={{ name: '', email: '' }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          <CreateStoreFormStyled>
            <div className='create-form-title'>Create Store</div>
            <div className='form-wrapper'>
              <div className='basic-info-form'>
                <div className='title-wrapper'>
                  <div className='form-title'>Title</div>
                  <Field name='title' className='input email' type='text' />
                </div>
                <div className='price-wrapper'>
                  <div className='price-sell-wrapper'>
                    <div className='form-title'>Price Sell</div>
                    <Field name='priceSell' className='input price-sell' type='text' />
                  </div>
                  <div className='price-discount-wrapper'>
                    <div className='form-title'>Price Discount</div>
                    <Field name='priceDiscount' className='input price-discount' type='text' />
                  </div>
                </div>
                <div>
                  <div className='form-title'>Short Desc</div>
                  <Field name='shortDesc' className='input short-desc' type='text' />
                </div>
                <div>
                  <div className='form-title'>Long Desc</div>
                  <Field name='longDesc' className='input long-desc' type='text'>
                    {() => {
                      return (
                        <textarea className='input long-desc' data-v-0cec6054="" tabIndex="4"></textarea>
                      );
                    }}
                  </Field>
                </div>
                <div className='status-wrapper'>
                  <div className='product-status'>
                    <div className='form-title'>Status</div>
                    <Field value='active' as="select" name="color">
                      <option value="active">Active</option>
                      <option value="disable">Disable</option>
                    </Field>
                  </div>
                  <div className='out-off-stock-wrapper'>
                    <Field type="checkbox" name="outOffStock" value="Two" />
                    <span className='form-title'>Out Off Stock</span>
                  </div>
                </div>
              </div>
              <ImageForm
                productImagePreviewRef1={productImagePreviewRef1}
                productImagePreviewRef2={productImagePreviewRef2}
                productImagePreviewRef3={productImagePreviewRef3}
                productImagePreviewRef4={productImagePreviewRef4}
                setImagesInput={setImagesInput}
              />
            </div>
            <div className='submit-wrapper'>
              <input className='cancel-btn' onClick={onCloseCreateForm} type='button' value='Cancel' />
              <input className='submit-btn' type='submit' value='Submit' />
            </div>
          </CreateStoreFormStyled>
        </Formik>
      </div>
    </Modal>
  );
}
