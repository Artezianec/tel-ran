import React, { createContext, useState } from 'react'

export const SWContext = createContext(null);
const PlaceholderProvider = ({children}) => {

    const [currentPage, setCurrentPage] = useState('Hone');

const values = {

}

  return (
    <SWContext.Provider value={values}>
        {children}
    </SWContext.Provider>
  )
}

export default PlaceholderProvider;