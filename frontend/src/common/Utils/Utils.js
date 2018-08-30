import React from 'react'

const Loading = () => <div>Loading...</div>

const Error = ({ error }) => (
  <div>
    <h2>Error</h2>
    <div>{error}</div>
    <div>Please try again.</div>
  </div>
)

export { Loading, Error }
