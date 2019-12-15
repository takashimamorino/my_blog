import React from 'react'

import 'glamor/reset'
import '../styles/app.module.scss'

type Props = {
  Component: any
  pageProps: any
}

const MyApp: React.FC<Props> =({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp
