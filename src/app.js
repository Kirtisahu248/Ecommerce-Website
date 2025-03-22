import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';

const AppLayout = () => {
  return <div>
   <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
