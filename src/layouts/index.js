import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Dander App Landing Page"
      meta={[
        {name: 'description', content: 'Landing page for Dander App.'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]}
      script={[
        {src: 'https://use.fontawesome.com/releases/v5.0.0/js/all.js', defer: true},
        {src: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css'}
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
