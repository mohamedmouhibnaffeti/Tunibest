import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
/*function Mouhib(){
  return (
    <div className='Mouhib'>
      <App/>
      <Bod/>
    </div>
  );
}*/
function Mouhib(){
  return(
    <React.StrictMode>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
ReactDOM.render(<Mouhib />, document.getElementById('root'))
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
*/
