import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { RatingProvider } from '@/contexts/RatingProvider'

import { App } from './App'

/*
|-------------------------------------------------------------------------------
| Main
|-------------------------------------------------------------------------------
*/

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </React.StrictMode>
)
