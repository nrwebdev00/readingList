import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css';

import { Provider } from './context/books';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)