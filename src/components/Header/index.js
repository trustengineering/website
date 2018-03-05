import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rgb(34, 68, 119)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Trust Engineering
        </Link>
      </h1>
      <h2 style={{
          color: 'rgba(0,0,0, 0.5)',
          marginTop: '4px'
      }}>Build. Deploy. Trust.</h2>
    </div>
  </div>
)

export default Header
