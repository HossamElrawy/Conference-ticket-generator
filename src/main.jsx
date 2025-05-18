import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import global styles
import App from './App.jsx' // Import the main App component

import circlePattern from "../assets/images/pattern-circle.svg"
import linesPattern from "../assets/images/pattern-lines.svg"
import topPattern from "../assets/images/pattern-squiggly-line-top.svg"
import bottomDesktopPattern from "../assets/images/pattern-squiggly-line-bottom-desktop.svg"
import bottomMobilePattern from "../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
import logo from "../assets/images/logo-full.svg"

// Create a root React DOM node and render the application
createRoot(document.getElementById('root')).render(
  // StrictMode helps catch potential problems in the application
  <StrictMode>
    {/* Main container for all content */}
    <main>
      {/* Decorative background patterns - empty alt tags as they're purely decorative */}
      <img src={circlePattern} className="pattern-circle-1" alt="" />
      <img src={linesPattern} className="pattern-lines" alt="" />
      <img src={topPattern} className="pattern-top" alt="" />
      <img src={bottomDesktopPattern} className="pattern-bottom-desktop" alt="" />
      <img src={bottomMobilePattern} className="pattern-bottom-mobile" alt="" />
      <img src={circlePattern} className="pattern-circle-2" alt="" />

      {/* Main content container */}
      <div className='main-con'>
        {/* Application logo - consider adding meaningful alt text if this is important content */}
        <img src={logo} className='logo-pic' alt="Conference Ticket Generator Logo" />
        
        {/* The main App component that contains the application logic */}
        <App />
      </div>
    </main>
  </StrictMode>,
)