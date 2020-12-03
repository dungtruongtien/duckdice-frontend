import React, { lazy, Suspense, useEffect } from 'react';
import {
  Route, Switch, BrowserRouter, Redirect
} from 'react-router-dom';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import HomePage from '../page/homepage';
import Submit from '../page/submit';
import { ME } from '../graphql/query';
import { isAuthenticated } from '../util/authen';
import { SET_USER_AUTH_SAGA } from '../constant';
import 'antd/dist/antd.css';

const SuspenseSpin = styled.div`
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

const routers = [
  {
    path: '/submit',
    component: Submit
  },
  {
    isExact: true,
    path: '/',
    component: connect()(HomePage)
  },
  {
    path: '/detail/:id',
    isPrivate: false,
    component: lazy(() => import('../page/appDetail'))
  },
  {
    path: '/user-page',
    isPrivate: true,
    component: lazy(() => import('../page/userPage'))
  }
];

function App({ dispatch }) {
  const [
    getUserInfo
  ] = useLazyQuery(ME, {
    onCompleted: (userInfo) => {
      dispatch({ type: SET_USER_AUTH_SAGA, payload: { ...userInfo.me.data } });
    }
  });

  useEffect(() => {
    if (isAuthenticated()) {
      getUserInfo();
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={ <SuspenseSpin><Spin /></SuspenseSpin>}>
            {routers.map((route, idx) => {
              const {
                path, component, isExact, isPrivate
              } = route;
              return isPrivate ? (<PrivateRoute key={idx} exact={isExact} path={path} component={component} />)
                : (<Route key={idx} exact={isExact} path={path} component={component} />);
            })}
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  );

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (isAuthenticated() ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location
              }
            }}
          />
        ))
        }
      />
    );
  }

//   function PublicRoute({ path, component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         path={path}
//         render={(props) => (isAuthenticated() ? (
//           <Redirect
//             to={{
//               pathname: '/'
//             }}
//           />
//         ) : (
//           React.createElement(component, props)
//         ))
//         }
//       />
//     );
//   }
}

const mapStateToProps = (state) => {
  const { me } = state;
  return { me };
};

export default connect(mapStateToProps)(App);
