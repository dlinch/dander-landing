import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="columns">
    <h1 className="column">Hi people</h1>
    <p className="column">Welcome to the Dander site.</p>
    <p className="column">We are so glad you could make it.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
