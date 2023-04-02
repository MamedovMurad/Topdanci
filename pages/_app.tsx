import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar';
type ComponentsPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType & any
  }
}
export default function App({ Component, pageProps }: ComponentsPageLayout) {



  return Component.PageLayout ?
    <Component.PageLayout>
      <NextNProgress color="#E61C23" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </Component.PageLayout>
    : <Layout>
      <NextNProgress color="#E61C23" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </Layout>

}
