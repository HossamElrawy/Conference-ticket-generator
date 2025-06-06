import ticket from "../../assets/images/pattern-ticket.svg" 
import logoPart from "../../assets/images/logo-mark.svg" 
import gitHubIcon from "../../assets/images/icon-github.svg" 

function Ticket(props) {
    return (<>
        <div className='ticket-con'>
          {/* Main ticket background pattern/image */}
          <img 
            src={ticket}
            className='ticket-sel' 
            alt="Ticket background pattern" // Added descriptive alt text
          />
          
          {/* Container for all ticket content */}
          <div className='inside-info'>
            {/* Conference logo and name */}
            <div className='logo-con'>
              <img 
                src={logoPart}
                className='inside-logo' 
                alt="Conference logo" 
              />
              <p>
                Coding Conf
              </p>
            </div>

            {/* Event date and location */}
            <p className='date-para'>
              Jan 31, 2025 / Austin, TX
            </p>

            {/* Attendee information section */}
            <div className='info-div'>
              {/* User's uploaded avatar */}
              <img 
                src={props.previewImage} 
                alt="Attendee avatar" 
                className="uploaded-image"
              />
              
              {/* Attendee name and GitHub info */}
              <div className='ano-div'>
                <p className='fin-name'>
                  {props.name || "Attendee Name"} 
                </p>
                <div className='git-hub'>
                  <img 
                    src={gitHubIcon}
                    alt="GitHub icon" 
                  />
                  <p className='at-para'>
                    {props.github || "@username"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical ticket number */}
          <p className='vert-div'>
            #01609
          </p>
        </div>
    </>)
}

export default Ticket