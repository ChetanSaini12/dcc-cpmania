import React from 'react'
import withAuth from './Components/AuthHOC'

function about() {
  return (
    <div>
      Hello, I am about page
    </div>
  )
}

export default withAuth(about);
