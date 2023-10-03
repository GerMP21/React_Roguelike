import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const font = new FontFace("VT323", "url(assets/VT323-Regular.ttf)", {
  style: "regular",
  weight: "400",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
