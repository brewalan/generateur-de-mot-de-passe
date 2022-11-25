import * as React from 'react'
import {
  container,
  heading
} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout