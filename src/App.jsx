import { useState } from 'react'
import './App.css'
import Info from './components/info';
import Ticket from './components/ticket';

function App() {
  // State management for the entire application
  const [show, setShow] = useState({
    showTicket: false,       // Controls ticket visibility
    showUploadError: false,  // Tracks image upload errors
    email: "",               // User's email input
    showEmailError: false,   // Tracks email validation errors
    previewImage: null,      // User's uploaded image preview
    name: "",                // User's name
    github: ""               // User's GitHub username
  });

  return (
    <>
      {/* Initial form state - shown when ticket isn't generated yet */}
      {!show.showTicket && <>
         <p className='Journey-para'>
          Your Journey to Coding Conf 2025 Starts Here!
        </p>
        <p className='Secure-para'>
          Secure your spot at next year's biggest coding conference.
        </p>
        <Info 
          previewImage={show.previewImage}
          showUploadError={show.showUploadError}
          showEmailError={show.showEmailError}
          email={show.email}
          setShow={setShow}
        />
      </>
      }

      {/* Ticket display state - shown after form submission */}
      {show.showTicket && <div className='page-div'>
        <p className='congrats-para'>
          Congrats, <span className='name-span'>{show.name}</span>! Your ticket is ready.
        </p>
        <p className='emailed-para'>
          We've emailed your ticket to <span className='mail-span'>{show.email}</span> and will send updates in the run up to the event.
        </p>
        <Ticket 
          name={show.name}
          github={show.github}
          previewImage={show.previewImage}
        />
      </div>
      }
    </>
  )
}

export default App