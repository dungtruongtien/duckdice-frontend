/* eslint-disable max-len */
import { Button, notification, Row } from 'antd';
import { Formik } from 'formik';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SubmitForm, SubmitTitle } from './submit.styled';
import IdentificationForm from './forms/identificationForm';
import BasicInformationForm from './forms/basicInfomationForm';
import TokenForm from './forms/tokenForm';
import SmartContractsInfoForm from './forms/smartContractsInfoForm';
import SocialMediaOptionalInfoForm from './forms/socialMediaOptionalInfoForm';
import AffiliateReferralProgramForm from './forms/affiliateReferralProgramForm';
import { CREATE_APP } from '../../graphql/mutation';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Submit() {
  const [createApp, { loading }] = useMutation(CREATE_APP, {
    onCompleted: (data) => {
      if (data.createApp.status === 200) {
        notification.success({
          message: 'Create App Successfully.'
        });
      }
    }
  });

  const getIsOwnerOrIsAdmin = (value) => {
    if (value.identificationUser === 'adminOrOwner') return { adminOrOwner: true, isSupporter: false };
    return { adminOrOwner: false, isSupporter: true };
  };

  const formatContractAddress = (value) => {
    const { contractAddress } = value;
    const obj = {};
    Object.keys(contractAddress).forEach((key) => {
      const contractValue = contractAddress[key];
      obj[key] = contractValue.split('\n');
    });
    return obj;
  };

  return (
    <>
      <Header />
      <Row>
        <SubmitTitle lg={24} sm={24}>
          <div className='submit-content'>
            <div className='submit-title'>Submit App</div>
            <div className='submit-desc'>Dapp.com is the largest marketplace of blockchain and service. Submit your products today and get more exposure.</div>
          </div>
        </SubmitTitle>
        <Formik
          initialValues={{
            adminOrOwner: '',
            isSupporter: '',
            email: '',
            name: '',
            website: '',
            shortDesc: '',
            detailDesc: '',
            reviewArticle: '',
            isOwnTokensOrCrypto: '',
            status: '',
            category: '',
            onChainFunctions: [],
            tags: [],
            expectedLaunch: '',
            contractAddress: {},
            tokenTicket: '',
            tokenContract: '',
            decimal: '',
            coingeckoLink: '',
            social: '',
            affiliateReferralProgramStatus: '',
            affiliateLink: '',
            blockChainTokenIssueId: '',
            onChainStatus: ''
          }}
          onSubmit={async (values) => {
            const { adminOrOwner, isSupporter } = getIsOwnerOrIsAdmin(values);

            const input = {
            // Identification
              adminOrOwner,
              isSupporter,
              email: values.email,
              // Basic Information
              name: values.name,
              website: values.website,
              logo: values.productLogo,
              imagesPreview: [values.productImagePreview1, values.productImagePreview2, values.productImagePreview3, values.productImagePreview4],
              categoryId: values.category || null,
              tags: values.tags,
              status: values.status,
              expectedLaunch: values.expectedLaunch || null,
              shortDesc: values.shortDesc,
              detailDesc: values.detailDesc,
              reviewArticle: values.reviewArticle,
              // Token Info
              isOwnTokensOrCrypto: values.isOwnTokensOrCrypto === 'true',
              tokenLogo: values.tokenLogo,
              blockChainTokenIssueId: values.blockChainTokenIssueId || null,
              tokenTicket: values.tokenTicket,
              tokenContract: values.tokenContract,
              decimal: values.decimal,
              coingeckoLink: values.coingeckoLink,
              // Smart Contracts Info
              onChainStatus: values.onChainStatus,
              contractAddress: formatContractAddress(values),
              // Social Media
              social: values.social,
              // Affiliate/Referral Program
              affiliateLink: values.affiliateLink,
              affiliateReferralProgramStatus: values.affiliateReferralProgramStatus

            };
            createApp({ variables: { input } });
          }}
        >
          {({
          /* eslint-disable */
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched
          /* eslint-enable */
          }) => (
            <SubmitForm>
              <IdentificationForm errors={errors} />
              <BasicInformationForm
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
              />
              <TokenForm setFieldValue={setFieldValue} errors={errors}/>
              <SmartContractsInfoForm setFieldValue={setFieldValue} values={values} errors={errors} />
              <SocialMediaOptionalInfoForm errors={errors} />
              <AffiliateReferralProgramForm errors={errors} values={values} />
              <Button loading={loading} className='submit-btn' htmlType='submit'>Submit Your Project</Button>
            </SubmitForm>
          )}
        </Formik>
      </Row>
      <Footer />
    </>
  );
}

export default Submit;
