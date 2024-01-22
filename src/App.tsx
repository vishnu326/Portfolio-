import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Landinpage from './Application/Landinpage';
import Header from './Application/Header';
import Home from './Application/Home';

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
          <Route path='/Home' element={<Header />}>
            <Route index path='main' element={<Home />} />
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
