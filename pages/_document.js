import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {extractCritical} from 'emotion-server';

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    // Styles components SSR
    let sheet = new ServerStyleSheet();
    let page = renderPage(App => props => {
      return sheet.collectStyles(<App {...props} />);
    });
    let styledComponentsStyles = sheet.getStyleElement();

    // Styles emotion - largely for the SSR rendering of the select box
    let emotionStyles = extractCritical(page.html);

    return {...page, styledComponentsStyles, ...emotionStyles};
  }

  constructor(props) {
    super(props);
    const {__NEXT_DATA__, ids} = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <title>Template</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/static/styles/template.css" />
          {this.props.styledComponentsStyles}
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
