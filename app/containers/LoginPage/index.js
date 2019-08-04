/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// Components
import Button from '../../components/Button';
import H2 from '../../components/H2';
import A from '../../components/A';
import Input from '../../components/Input/Loadable';

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div className="login-page">
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <div className="content">
        <img src="" alt="" />
        <form name="login-form">
          <section className="form-header">
            <H2 className="header-message">Welcome to WINFOOZ</H2>
            <div className="header-message">
              <span>No Account?</span>
              &nbsp;
              <A href="/">Register</A>
            </div>
          </section>
          <section className="form-body">
            <label htmlFor="email">Email</label>
            <Input name="email" type="email" />
            <label htmlFor="password">Password</label>
            <Input name="password" type="password" />
            <Button handleRoute>IGNITION</Button>
          </section>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
