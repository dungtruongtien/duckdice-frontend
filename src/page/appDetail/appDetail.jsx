import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel';
import AppsDetail from './appDetails.mockdata';
import { AboutProjectWrapper, BannerWrapper } from './appDetail.styled';
import AppDetailInfo from './info';
import AppStatistics from './statistics';
import AppComments from './comment';
import Header from '../../components/header';
import Footer from '../../components/footer';

const appDetailDefailt = {
  info: {
    logo: '',
    collects: '',
    appName: '',
    rate: 0,
    description: '',
    tags: [],
    keywords: [],
    userStatistics: {
      lastDay: 0,
      uniqueUsers: 0
    }
  },
  about: {
    ref: {
      title: '',
      article: {
        title: '',
        desc: ''
      },
      img: '',
      link: 'http://localhost:3000'
    },
    sliders: [{ src: '' }]
  },
  statistics: {
    balance: 0,
    smartContracts: {
      total: 4,
      list: []
    },
    chartStatistics: {
      web: {
        title: '',
        options: {},
        statistics: [{ title: '', value: 0 }]
      },
      users: {
        title: '',
        options: {},
        statistics: [{ title: '', value: 0 }]
      },
      transactions: {
        title: '',
        options: {},
        statistics: [{ title: '', value: 0 }]
      },
      volume: {
        title: '',
        options: {},
        statistics: [{ title: '', value: 0 }]
      }
    }
  },
  comments: [
    {
      name: '',
      date: '',
      content: '',
      rate: 0
    }
  ]
};

function AppDetail({ match }) {
  const [appDetail, setAppDetail] = useState(appDetailDefailt);
  const {
    info, about, statistics, comments
  } = appDetail;

  useEffect(() => {
    const { id } = match.params;
    const currentAppDetail = AppsDetail.find((detail) => detail.id === id);
    setAppDetail(currentAppDetail);
  }, []);

  return (
    <>
      <Header />
      <Row>
        <BannerWrapper lg={24} md={24}>
          <img src='https://dappimg.com/media/image/banner/f507926c76f541ce80637cfabe464958.jpg' alt='' />
        </BannerWrapper>
        <AppDetailInfo info={info} />
        <AboutProjectWrapper lg={24} md={24}>
          <div className='about-project-carousel'>
            <Carousel images={about.sliders} imageHeight='448px' />
          </div>
          <div className='about-project-ref'>
            <p className='title'>{about.ref.title}</p>
            <a href={about.ref.link} className='ref-image'>
              <img alt='' src={about.ref.img} />
              <div className='article-title'>{about.ref.article.title}</div>
              <div className='article-desc'>{about.ref.article.desc}</div>
            </a>
          </div>
        </AboutProjectWrapper>
        <AppStatistics statistics={statistics} />
        <AppComments comments={comments} />
      </Row>
      <Footer />
    </>
  );
}

export default AppDetail;
