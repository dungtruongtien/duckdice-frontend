/* eslint-disable max-len */
import React from 'react';
import Media from 'react-media';
import { Button, Row, Spin } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import { useQuery } from '@apollo/react-hooks';
import AppItems from './appItems';
import Slider from './slider';
import { homepageMockData } from './homepage-mockdata';
import { APPS } from '../../graphql/query';
import {
  ExploreAppsButton,
  ExploreAppsWrapper,
  ListYourAppWrapper,
  SearchBarWrapper
} from './desktopHomepage.styled';
import Header from '../../components/header';
import Footer from '../../components/footer';

const defaultAppData = { apps: { data: [] } };

function Homepage() {
  const { data: appsData = defaultAppData, loading } = useQuery(APPS);
  const renderDesktopHomepage = () => {
    return (
      <>
        <Header />
        <Slider />
        <AppItems appItems={homepageMockData} />
        <Footer />
      </>
    );
  };

  const renderMobileHomepage = () => {
    return (
      <Row style={{ height: '100vh', background: 'white' }}>
        <SearchBarWrapper xs={24}>
          <div className='input-wrapper'>
            <LeftCircleFilled style={{
              fontSize: '1.5rem', position: 'absolute', left: 10, top: 28
            }} />
            <img src='/PRV.png' />
            <input placeholder='https://incognito.org' />
          </div>
        </SearchBarWrapper>
        <ExploreAppsWrapper xs={24}>
          <div className='title'>Explore pApps</div>
          {loading ? <Spin /> : <div className='apps-wrapper'>
            {appsData.apps.data.map((app) => {
              const {
                id, logo, name, shortDesc
              } = app;
              return (
                <div key={id} className='app'>
                  <div className='logo'>
                    <img src={logo} alt='' />
                  </div>
                  <div className='info'>
                    <div className='name'>{name}</div>
                    <div className='desc'>{shortDesc}</div>
                  </div>
                </div>
              );
            })}
          </div>}
        </ExploreAppsWrapper>
        <ExploreAppsButton xs={24}>
          <div className='title'>Explore pApps</div>
          <div className='desc'>Add privacy for existing applications on Ethereum, or create a pApp from scratch on Incognito</div>
          <div className='button-wrapper'>
            <Button className='button'>SDK</Button>
            <Button className='button'>pEthereum</Button>
          </div>
        </ExploreAppsButton>
        <ListYourAppWrapper xs={24}>
          <div className='title'>List Your pApp</div>
          <div className='desc'>Ready to take on the world ? Send a note to <b><u>go@incognito.org</u></b> to get set up.</div>
        </ListYourAppWrapper>
      </Row>
    );
  };

  return (
    <>
      <Media queries={{
        small: '(max-width: 1199px)',
        large: '(min-width: 1200px)'
      }}>
        {(matches) => {
          return (
            <>
              {matches.small && renderMobileHomepage()}
              {matches.large && renderDesktopHomepage()}
            </>
          );
        }}
      </Media>
    </>
  );
}

export default Homepage;
