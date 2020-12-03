/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { Field } from 'formik';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DatePicker, Select } from 'antd';
import { BasicInformationFormStyled } from '../submit.styled';
import LogoImage from './productLogo';
import ImagePreview from './previewImage';
import { CATEGORIES } from '../../../graphql/query';
import { submitForm } from '../../../util/validate';

const { Option } = Select;

const defaultCategories = { categories: { data: [] } };

export default function BasicInfomationForm({ errors, setFieldValue, values }) {
  const { data: categoriesData = defaultCategories } = useQuery(CATEGORIES);
  return (
    <BasicInformationFormStyled lg={24} sm={24}>
      <div className='form-item-title'>Basic Information</div>
      <div className='form-wrapper'>
        <div className='product-logo-name'>
          <div className='product-logo'>
            <div className='title'>Product Logo</div>
            <Field validate={submitForm.required} name="productLogo">
              {() => {
                return (<LogoImage setFieldValue={setFieldValue} imageKey='productLogo' />);
              }}
            </Field>
            {errors.productLogo && <div className='input-error-msg'>{errors.productLogo}</div>}
          </div>
          <div className='product-name'>
            <div className='title'>Project Name</div>
            <Field validate={submitForm.required} className='input project-name-input' placeholder='Project Name' name="name" type="text" />
            {errors.name && <div className='input-error-msg'>{errors.name}</div>}
            <div className='title website-input-title'>Papp Website</div>
            <Field validate={submitForm.required} className='input website-input' placeholder="A URL to visit your product's website" name="website" type="text" />
            {errors.website && <div className='input-error-msg'>{errors.website}</div>}
          </div>
        </div>
        <div className='preview-image-wrapper'>
          <div className='preview-image-wrapper-title'>
            <p className='title-1'>Preview Image</p>
            <p className='title-2'>High quality screenshot or preview image will attract more users and be featured by our editors.</p>
            <p className='title-3'>4 Product Images Max</p>
          </div>
          <div className='preview-image-input-wrapper'>
            <div>
              <Field validate={submitForm.required} name="productImagePreview1">
                {() => {
                  return (<ImagePreview setFieldValue={setFieldValue} imageKey='productImagePreview1' />
                  );
                }}
              </Field>
              {errors.productImagePreview1 && <div className='input-error-msg'>{errors.productImagePreview1}</div>}
            </div>
            <div>
              <Field validate={submitForm.required} name="productImagePreview2">
                {() => {
                  return (<ImagePreview setFieldValue={setFieldValue} imageKey='productImagePreview2' />
                  );
                }}
              </Field>
              {errors.productImagePreview2 && <div className='input-error-msg'>{errors.productImagePreview2}</div>}
            </div>
            <div>
              <Field validate={submitForm.required} name="productImagePreview3">
                {() => {
                  return (<ImagePreview setFieldValue={setFieldValue} imageKey='productImagePreview3' />
                  );
                }}
              </Field>
              {errors.productImagePreview3 && <div className='input-error-msg'>{errors.productImagePreview3}</div>}
            </div>
            <div>
              <Field validate={submitForm.required} name="productImagePreview4">
                {() => {
                  return (<ImagePreview setFieldValue={setFieldValue} imageKey='productImagePreview4' />
                  );
                }}
              </Field>
              {errors.productImagePreview4 && <div className='input-error-msg'>{errors.productImagePreview4}</div>}
            </div>
          </div>
        </div>
        <div className='category-select-wrapper'>
          <div className='category'>
            <div className='title'>Category</div>
            <Field validate={submitForm.required} as='select' name='category' className='category-select'>
              <option value=''>Select your option</option>
              {categoriesData.categories.data.map((category) => {
                return (<option key={category.id} value={category.id}>{category.name}</option>);
              })}
            </Field>
            {errors.category && <div className='input-error-msg'>{errors.category}</div>}
          </div>
          {values.category && <div className='tags'>
            <Field validate={submitForm.required} name="tags">
              {() => {
                return (
                  <>
                    <div className='title'>Tags</div>
                    <Select
                      mode="multiple"
                      className='tags-select'
                      placeholder="Please select"
                      onChange={(value) => { setFieldValue('tags', value); }}
                      value={values.tags}
                    >
                      <Option value='exchange'>Exchange</Option>
                      <Option value='nonCustodial'>Non Custodial</Option>
                      <Option value='dappBrowser'>Dapp Browser</Option>
                      <Option value='buyCrypto'>Buy Crypto</Option>
                      <Option value='openSourced'>Open-Sourced</Option>
                      <Option value='tokenSwap'>token swap</Option>
                      <Option value='hardware'>Hardware</Option>
                      <Option value='nft'>nft</Option>
                      <Option value='custodial'>Custodial</Option>
                      <Option value='portfolioManager'>Portfolio Manager</Option>
                      <Option value='add'>Add</Option>
                    </Select>
                  </>
                );
              }}
            </Field>
            {errors.tags && <div className='input-error-msg'>{errors.tags}</div>}
          </div>}
        </div>
        <div className='product-select-wrapper'>
          <div className='product-status'>
            <div className='title'>Product Status</div>
            <Field validate={submitForm.required} as='select' name='status' className='product-select'>
              <option value=''>Select your option</option>
              <option value='live'>Live</option>
              <option value='inProgress'>In Progress</option>
            </Field>
            {errors.status && <div className='input-error-msg'>{errors.status}</div>}
          </div>
          {values.status === 'inProgress' && <div className='expected-launch'>
            <Field validate={submitForm.required} name="expectedLaunch">
              {() => {
                return (
                  <>
                    <div className='title'>Expected Launch</div>
                    <DatePicker onChange={(date, dateString) => setFieldValue('expectedLaunch', dateString)} />
                  </>
                );
              }}
            </Field>
            {errors.expectedLaunch && <div className='input-error-msg'>{errors.expectedLaunch}</div>}
          </div>}
        </div>
        <div className='description-wrapper'>
          <div className='title'>
            <p className='title-1'>Short Description</p>
            <p className='title-2'>Max of 70 Characters</p>
          </div>
          <Field validate={submitForm.required} name='shortDesc' type='text' placeholder='This is to provide an idea of what does your product do. A good short summary will entice users to click and visit your page.' className='short-description-input' />
          {errors.shortDesc && <div className='input-error-msg'>{errors.shortDesc}</div>}
        </div>
        <div className='description-wrapper'>
          <div className='title'>
            <p className='title-1'>Detail Description</p>
            <p className='title-2'>Max of 500 Characters</p>
          </div>
          <Field validate={submitForm.required} name='detailDesc' component="textarea" className='detail-description-input' data-v-0cec6054="" tabIndex="4" placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page. " />
          {errors.detailDesc && <div className='input-error-msg'>{errors.detailDesc}</div>}
        </div>
        <div className='product-article-wrapper'>
          <div className='title'>
            <p className='title-1'>Product Review Article</p>
            <p className='title-2'>Suggested E.g. http://www.dapp.com/article/beginners-guide-for-my-crypto-heroes</p>
          </div>
          <Field validate={submitForm.required} name='reviewArticle' component="textarea" placeholder='A url link to an article about your product that you want us to know.' className='product-article-input' />
          {errors.reviewArticle && <div className='input-error-msg'>{errors.reviewArticle}</div>}
        </div>
      </div>
    </BasicInformationFormStyled>
  );
}
