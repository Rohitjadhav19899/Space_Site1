import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";
import Home from '../Components/Home'
import Destination from '../Components/Destination'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
