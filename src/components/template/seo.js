import * as React from 'react'

const Seo = ({ title, description }) => {
  return (
    <React.Fragment>  
        <title>{title}</title>
        <meta name="description" content={description} />  
    </React.Fragment>  
  )
}

export default Seo
