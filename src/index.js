import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Helloworld(){    // component ke tarhe treat nhi kiya gya kyuki small mein likha tha 
  return <h3> hi folks </h3>;
}


// embedding expressions in JSX . 
function Mybutton()
{
  const name="Harshit Hatwal"
  return <h1> My name is {name} </h1>
}




const virtualdom = ReactDOM.createRoot(document.getElementById('root'));
virtualdom.render(  
  // <h1> hello world </h1> 
  <React.StrictMode>
    <App />
    <Helloworld />
    <Mybutton/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
