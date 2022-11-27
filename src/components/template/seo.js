import * as React from 'react'

const Seo = ({ title, description, children } ) => {
  return (
    <React.Fragment>  
        <title>{title}</title>
        <meta name="description" content={description} />  
        {children}
    </React.Fragment>  
  )
}

export default Seo
