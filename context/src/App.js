import React from 'react'
import Main from './components/Main'
import PlaceholderProvider from './context/PlaceholderProvider'

const App = () => {
  return (
    <PlaceholderProvider>
      <Main/>
    </PlaceholderProvider>
  )
}

export default App