import logo from './logo.svg';
import './App.css';
import {  createContext, useContext, useState } from "react";
import Home from './Home';
export const UserContext = createContext();

function App() {

  const [val,setval] = useState("cutomers")
  return (
    <>
    <UserContext.Provider value={val}>
    <Home/>
    </UserContext.Provider>
    </>

  );
}

export default App;
