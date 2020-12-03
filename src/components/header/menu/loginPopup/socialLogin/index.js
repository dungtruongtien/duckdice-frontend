/* eslint-disable max-len */
import { Spin } from 'antd';
import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import config from '../../../../../config';

export default function SocialLogin({
  handleFacebookLogin, handleGoogleLogin, facebookLoginLoading, googleLoginLoading
}) {
  return (
    <div data-v-f46bb73a="" className="third-party-sec">
      {/* Facebook */}
      <FacebookLogin
        appId={config.facebookClientId}
        fields="name,email,picture"
        callback={handleFacebookLogin}
        autoLoad={false}
        render={(renderProps) => (
          <div data-v-f46bb73a="" className="third-party-item item-facebook">
            { facebookLoginLoading ? <Spin />
              : <>
                <div onClick={renderProps.onClick} data-v-f46bb73a="" className="image-container facebook">
                  <img data-v-f46bb73a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAFVBMVEVHcEz///////////////////////+3ygHaAAAABnRSTlMAoSDpWQ6pIT68AAAAfklEQVRYw+2SOwqAMBBEI35qwTtYCwvpRbC2so+Rvf8RZEm03i3EgPPqeZnArHMAAAAy8+CZWZ9fWIjqfMMJtbCyraH1xob7R+qGio0NdXqfSCt0kg+bfoVdhMkw8yhC/yuByOcZlDvwQ7QKoTzhfF04cHwQIEAoRAAAgO+4ABo2byb0QeGkAAAAAElFTkSuQmCC" alt="" className="icon" />
                </div>
                <div data-v-f46bb73a="" className="name">Facebook</div>
              </>
            }
          </div>
        )}
      />
      {/* Google */}
      <GoogleLogin
        render={(renderProps) => (
          <div data-v-f46bb73a="" className="third-party-item item-google" id="button-google">
            {googleLoginLoading ? <Spin />
              : <>
                <div onClick={renderProps.onClick} data-v-f46bb73a="" className="image-container google">
                  <img data-v-f46bb73a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAAC3RSTlMA5wzQlHv1r20vRR8Uma0AAAFYSURBVFjDY2AYBaNgFIyCUUAfMMNZLNHcS4FY5UzNu8Fg+wIi1QfuhoLNxOmYvBsOthPjKo7dSMCSCA3eyBq2EFbPgqx+twNhDdFghckeHc7EWcAFVi8B8qxq9u4AwhoUwS6HBI76VgbiXLRxApRDRDQwZQM1ZJKQiFiB6rctIEEDI1DDVlKS6WygBiFSNEQTF1kIUA3UMIEUDdZAP0NYjoJQII5XgzQwEyDsgmQKvBqA0bAdTcNGQhrQbdhNyEkb0TRsI+Tp3QqkOAkRrER6uhuoogCSDJWAQItgJgIljSTU/LqDYOLbgpqddhJM3rsXoCQtAxIyEDiDBxCRRWFWLANFgwIRhcBWJPcRKmk4wWFvATJWAxSLhLMTpCBL92h1z96NGgJEFZXEZHBvUgtXDhItQKlQNhJXRMGrrG1OpFWKm4NIqXa3CXuQVN6MglEwCkbBKCAfAABbzBKcXtcA1QAAAABJRU5ErkJggg==" alt="" className="icon" />
                </div>
                <div data-v-f46bb73a="" className="name">Google</div>
              </>
            }
          </div>
        )}
        clientId={config.googleClientId}
        buttonText="Login"
        onSuccess={handleGoogleLogin}
        onFailure={(err) => console.log('err---------', err)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
