import React, { useState } from 'react'
import Comp1 from './components/Comp1.jsx'
import Comp2 from './components/Comp2.jsx'
import Comp3 from './components/Comp3.jsx'
import DataProvider from './context/DataContext.jsx'

const App = () => {
  return (
    <>
      <DataProvider>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </DataProvider>
    </>
  )
}

export default App