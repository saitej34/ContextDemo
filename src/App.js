import React from 'react'
import {useState,createContext} from 'react';
import Comp from './components/Comp';

export const studentcontext = createContext();

const App = () => {
  const [student,setstudent] = useState([{
      name:"saiteja"
  },{
    name:"teja"
  }])
  return (
    <div>
        <studentcontext.Provider value={[student,setstudent]}>
            <Comp />
        </studentcontext.Provider>
    </div>
  )
}

export default App