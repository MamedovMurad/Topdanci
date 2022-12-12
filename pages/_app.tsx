import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../layout'

type ComponentsPageLayout= AppProps&{
  Component:AppProps['Component']&{
    PageLayout?:React.ComponentType&any
  }
}
export default function App({ Component, pageProps }: ComponentsPageLayout) {
  return Component.PageLayout? 
  <Component.PageLayout>
    <Component {...pageProps} />
  </Component.PageLayout>
  :<Layout><Component {...pageProps} /></Layout>
}
