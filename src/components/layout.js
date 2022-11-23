import * as React from 'react'
import {
  container,
  heading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </div>
  )
}

export default Layout