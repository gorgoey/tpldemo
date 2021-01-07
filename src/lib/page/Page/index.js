import { Fragment } from 'react'

import * as layouts from '@components/_layouts'

import Meta from './Meta'
import Stats from './Stats'

export default function Page({ children, data, metaConfig, options = {} }) {
  const Layout = layouts[options.layout || 'main']
  const restricted = options.restricted || false

  return (
    <Fragment>
      <Meta data={data} metaConfig={metaConfig} />
      <Stats data={data} metaConfig={metaConfig} />
      <Layout restricted={restricted}>{children}</Layout>
    </Fragment>
  )
}
