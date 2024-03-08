import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Plugin from './components/Plugin';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Home></Home>} path="/" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Register />} path="register" />  
          <Route element={<Plugin/>} path="plugin" />  
          <Route element={<Dashboard/>} path="Dashboard" />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
