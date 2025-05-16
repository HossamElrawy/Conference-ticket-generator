import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import global styles
import App from './App.jsx' // Import the main App component

// Create a root React DOM node and render the application
createRoot(document.getElementById('root')).render(
  // StrictMode helps catch potential problems in the application
  <StrictMode>
    {/* Main container for all content */}
    <main>
      {/* Decorative background patterns - empty alt tags as they're purely decorative */}
      <img src="./assets/images/pattern-circle.svg" className="pattern-circle-1" alt="" />
      <img src="./assets/images/pattern-lines.svg" className="pattern-lines" alt="" />
      <img src="./assets/images/pattern-squiggly-line-top.svg" className="pattern-top" alt="" />
      <img src="./assets/images/pattern-squiggly-line-bottom-desktop.svg" className="pattern-bottom-desktop" alt="" />
      <img src="./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" className="pattern-bottom-mobile" alt="" />
      <img src="./assets/images/pattern-circle.svg" className="pattern-circle-2" alt="" />

      {/* Main content container */}
      <div className='main-con'>
        {/* Application logo - consider adding meaningful alt text if this is important content */}
        <img src="./assets/images/logo-full.svg" className='logo-pic' alt="Conference Ticket Generator Logo" />
        
        {/* The main App component that contains the application logic */}
        <App />
      </div>
    </main>
  </StrictMode>,
)