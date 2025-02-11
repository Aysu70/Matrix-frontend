import React,{ StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client'
import Api from './api'
class App extends Component{
  render(){
    return(
      <Api/>
    )
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
