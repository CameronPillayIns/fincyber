import React from 'react'
import { Helmet } from "react-helmet";
const CookiePolicy = () => {
  return (
    <div className=' mx-auto'>
          <Helmet>
        <title>Cookie Policy</title>
        <meta name="description" content="Cookie Policy" />
        <meta name='keywords' content='Cookie Policy'></meta>
      </Helmet>
      <iframe src="IDAS Cookie Policy PDF (1).pdf" frameborder="0" className='mx-auto w-[100%] h-[900px]'></iframe>
    </div>
  )
}

export default CookiePolicy
