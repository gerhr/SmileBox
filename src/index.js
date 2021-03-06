import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from 'Scenes';
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from "@material-ui/core/styles"
import { SlotProvider } from "react-view-slot"


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SlotProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SlotProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
