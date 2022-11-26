import React from 'react'
import PlaceholderProvider from './const/Const'
import { Main } from './pages/Main'

const App = () => {
  return (
    <PlaceholderProvider>
      <Main/>
    </PlaceholderProvider>
  )
}

export default App