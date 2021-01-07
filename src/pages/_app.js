import App from 'next/app'
import Router from 'next/router'

import { ErrorProvider } from '@lib/error'
import { font as fontConfig } from '@modules/_ui/config'

import '@modules/_ui/styles/index.css'
import '../../public/static/css/globals.css'

export default class MyApp extends App {
  componentDidMount() {
    const WebFont = require('webfontloader')
    WebFont.load(fontConfig)

    Router.events.on('routeChangeStart', url => {
      if (window.__NEXT_DATA__.props.isSSR === undefined) {
        window.__NEXT_DATA__.props.isSSR = false
      }
    })
  }

  render() {
    const { Component, router, pageProps } = this.props

    return (
      <ErrorProvider>
        <Component {...pageProps} router={router} />
      </ErrorProvider>
    )
  }
}
