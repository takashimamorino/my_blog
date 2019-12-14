import React from 'react'

import 'glamor/reset'
import '../styles/app.module.scss'

type Props = {
  Component: any
}

const MyApp: React.FC<Props> =({ Component }) => <Component />;

export default MyApp
