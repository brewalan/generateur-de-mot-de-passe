import * as React from 'react'

const Seo = ({ title, description }) => {
  return (
    <React.Fragment>  
        <title>{title}</title>
        <meta name="description" content={description} />  
        <script src="https://kit.fontawesome.com/dd35bbd14e.js" crossorigin="anonymous"></script>
    </React.Fragment>  
  )
}

export default Seo
