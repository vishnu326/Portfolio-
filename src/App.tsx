import React, { createContext, useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import Landinpage from './Application/Landinpage';

interface IMode {
  ModeState: boolean,
  handleModeStatus: () => void,
}

export const Context = createContext<IMode>({ ModeState: false, handleModeStatus: () => { }, });

const App: React.FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(true)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const darkModeData: IMode = {
    ModeState: darkMode,
    handleModeStatus: handleDarkMode
  }

  return (
    <div>
      <Context.Provider value={darkModeData}>
        <Routes>
          <Route path='/' element={<Landinpage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
