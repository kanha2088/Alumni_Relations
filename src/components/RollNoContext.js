import React, { createContext, useState } from 'react';

// Create the context
export const RollNoContext = createContext();

// Create a provider component
export const RollNoProvider = ({ children }) => {
  const [rollNo, setRollNo] = useState(null);
  const [profileid, setprofileid] = useState({});

  return (
    <RollNoContext.Provider value={{ rollNo, setRollNo ,profileid,setprofileid}}>
      {children}
    </RollNoContext.Provider>
  );
};
