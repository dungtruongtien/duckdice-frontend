/* eslint-disable max-len */
import React from 'react';
import { Button, Input, Modal } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { connect } from 'react-redux';
import SocialLogin from './socialLogin';
import { LoginPopupLeft, LoginPopupRight } from './loginPopup.styled';
import OrDivide from './orDivide';
import { FACEBOOK_LOGIN, GOOGLE_LOGIN } from '../../../../graphql/mutation';
import { SET_USER_AUTH_SAGA } from '../../../../constant';
import { setToken } from '../../../../util/authen';

function LoginPopup({
  isOpen, handleOk, handleCancel, dispatch
}) {
  const [loginFacebook, { loading: facebookLoginLoading }] = useMutation(FACEBOOK_LOGIN, {
    onCompleted: (data) => {
      dispatch({ type: SET_USER_AUTH_SAGA, payload: { ...data.facebookLogin.data } });
      setToken(data.facebookLogin.accessToken);
      handleCancel();
    }
  });

  const [googleFacebook, { loading: googleLoginLoading }] = useMutation(GOOGLE_LOGIN, {
    onCompleted: (data) => {
      dispatch({ type: SET_USER_AUTH_SAGA, payload: { ...data.googleLogin.data } });
      setToken(data.googleLogin.accessToken);
      handleCancel();
    }
  });

  const handleFacebookLogin = async (data) => {
    loginFacebook({ variables: { token: data.accessToken } });
  };

  const handleGoogleLogin = (response) => {
    googleFacebook({ variables: { token: response.getAuthResponse().id_token } });
  };

  return (
    <>
      <Modal
        width={848}
        bodyStyle={{ padding: '0px' }}
        visible={isOpen}
        title={null}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: 'flex', width: '100%', height: '560px' }}>
          <LoginPopupLeft lg={12}>
            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABaBAMAAAAP2ATlAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAx3y0wKIWnTfa6lmDsdBNAAACq0lEQVRo3u2YMU8bMRTHD1KSVCwUIaYb2lQIKnXIgChDBhBtlzIg1KnKACoCwRSBxIAYIjpVZEAdKoastFWUgaFDhy5HiIDgD8XZPp+f3/khUGGgvDed/Lf9e/a703vvggBZVQgxFNyzMYQhDGEIQ/57yE6r1SrfN2Q1tqWAjY0N2/7WW2OLdUcpjk8a5d2Eu2jvo1HmNtGisXS7N3/M4BcBLDoG0wfnofQB7vQbKh1nUQilaT1YEI6d2u89X3WlKbvTZ1c5A4vmXWnbNyh+pfOXkXKRXkuxiaTRdNFXpHQk/4mgtsqHWPpudlrHSmSOUmxjaSYefS18o557lF4ZSCUj1RIl47M4icnCN6qskZWSAA9mlfNkUdZnUfe4Ky5Id0066xPkIZvCc8gNNaOU2Hhbo1VI5GNv0UifgL/qjEdGeakW6aCoi+ltGkn5+UPN79mPaUWOPrd3cmg/sdDepLyTqO6+UPom++Xje7uorTyT8y/t+5+Xo2U7H3zL0p0z/bgLgmDc157lpM8gs/5VnrXVeaxV0psvgPCYQHTwJBuIGp6kbENtIp048FYrEhIBJedCYLUROpAuUJ7K/RlyU8g6XxfHhCEckwcLwUmrSiatayBNEqKTFkq/AILTLw0B6RdDdPpFhYRK30O+QuIaCCgk+mwhAAoJVRJ1S6mFKQSVRKVXLuRbKoyBkkhCIrtbVZdEA4Is4SpkCUcrnrIvjlaRhjRuAzmnIXVv8ZpABm4DWSAhJ6Zm9EKyrQMNMa2DBzLja4Js3bZ8c8hoQEF057ZGQnA7R0O6SyRk29OYQghqTGnI6XFAQaZtt/zMsRrolmcdZVgPv3AGR0BfXnB3wn05G9sjMvq/bl5Kd/eHesGr5GLl591AKuAPjGs4x/8jpMwQhjCEIQx5GJArvvBDYE0cPtgAAAAASUVORK5CYII=" className="logo" />
            <div className='login-description'>
              To understand and enjoy the decentralized technology with confidence.
            </div>
          </LoginPopupLeft>
          <LoginPopupRight>
            <div className='login-title'>
              Log In With
            </div>
            <SocialLogin
              handleFacebookLogin={handleFacebookLogin}
              handleGoogleLogin={handleGoogleLogin}
              facebookLoginLoading={facebookLoginLoading}
              googleLoginLoading={googleLoginLoading}
            />
            <OrDivide />
            <div className='input-wrapper'>
              <Input className='input-email' placeholder="Email" />
              <Input.Password className='input-password' style={{ height: '54px', width: '100%' }} placeholder="Password" />
            </div>
            <Button className='login-button'>Log In</Button>
          </LoginPopupRight>
        </div>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  const { me } = state;
  return { me };
}

export default connect(mapStateToProps)(LoginPopup);
