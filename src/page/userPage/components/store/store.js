import React, { useRef, useState } from 'react';
import { Button, Col } from 'antd';
import CreateStoreForm from './createStoreForm';
import { StoreStyled } from '../../userPage.styled';

export default function Store({ isOpen }) {
  const [isOpenCreateForm, setOpenCreateForm] = useState(false);
  const productImagePreviewRef1 = useRef(document.createElement('input'));
  const productImagePreviewRef2 = useRef(document.createElement('input'));
  const productImagePreviewRef3 = useRef(document.createElement('input'));
  const productImagePreviewRef4 = useRef(document.createElement('input'));

  const onCloseCreateForm = () => {
    setOpenCreateForm(false);
  };

  return (
    <StoreStyled isOpen={isOpen}>
      <Col lg={24} sm={24}>
        <Button onClick={() => setOpenCreateForm(true)}>Create Store</Button>
        <CreateStoreForm
          isOpen={isOpenCreateForm}
          onCloseCreateForm={onCloseCreateForm}
          productImagePreviewRef1={productImagePreviewRef1}
          productImagePreviewRef2={productImagePreviewRef2}
          productImagePreviewRef3={productImagePreviewRef3}
          productImagePreviewRef4={productImagePreviewRef4}
        />
      </Col>
    </StoreStyled>
  );
}
