import React from 'react';
import App, {Container} from 'next/app';
import {Navigation} from '../components';
import NProgress from 'nprogress';
import Router from 'next/router';

const configureLoadingProgressBar = () => {
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
};

class Layout extends React.Component {
  componentDidMount() {
    configureLoadingProgressBar();
  }

  render() {
    const {children} = this.props;
    return (
      <div className="layout">
        <Navigation />
        {children}
      </div>
    );
  }
}

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
