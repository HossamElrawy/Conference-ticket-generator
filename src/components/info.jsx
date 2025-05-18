import { useRef } from "react";
import uploadIcon from "../../assets/images/icon-upload.svg" 
import iconInfo from "../../assets/images/icon-info.svg"

function Info(props) {
  // Create a ref to access the file input element
  const fileInputRef = useRef(null);

  // Handle file selection and validation
  function handleChange(event) {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return; // Exit if no file selected
    
    // Reset input value to allow re-uploading same file
    event.target.value = null;
    
    // Check file size (500KB limit)
    if (uploadedFile.size > 500000) {
      props.setShow(prev => ({
        ...prev,
        showUploadError: true,  // Show upload error
        previewImage: null       // Clear any existing preview
      }));
      return;
    }

    // Create FileReader to process the image
    const reader = new FileReader();

    // Successful file load handler
    reader.onloadend = () => {
      props.setShow(prev => ({
        ...prev,
        showUploadError: false, // Clear any errors
        previewImage: reader.result // Set image preview
      }));
    };

    // Error handler for file reading
    reader.onerror = () => {
      props.setShow(prev => ({
        ...prev,
        showUploadError: true // Show upload error
      }));
    };

    // Read the file as data URL
    reader.readAsDataURL(uploadedFile);
  }

  // Handle removal of uploaded image
  function handleRemove() {
    // Clear the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // Clear the preview image in state
    props.setShow(prev => ({
      ...prev,
      previewImage: null
    }));
  }

  // Validate email and handle form submission
  function handleClick() {
    // Basic email validation
    if (props.email.includes("@") && props.email.includes(".")) {
      props.setShow((prev) => ({
          ...prev,
          showEmailError: false, // Clear email error
          showTicket: true       // Show ticket component
      }));
    } else {
      props.setShow((prev) => ({
          ...prev,
          showEmailError: true, // Show email error
          showTicket: false     // Stay on form
      }));
    }
  }

  return (
    <>
      <div className='inputs-div'>
        {/* Avatar Upload Section */}
        <p className='upload-para'>Upload Avatar</p>
        
        {/* Image upload area with drag-and-drop functionality */}
        <div className='image-div' tabIndex={0}>
          <label htmlFor="fileInput" className="upload-label">
            {props.previewImage ? (
              // Show preview if image exists
              <img 
                src={props.previewImage} 
                alt="Uploaded preview" 
                className="uploaded-image"
              />
            ) : (
              // Show upload icon if no image
              <div className='icon-upload-div'>
                <img 
                  src={uploadIcon}
                  alt="Upload icon" 
                  className="upload-icon"
                />
              </div>
            )}
          </label>
          
          {/* Hidden file input */}
          <input 
            type="file" 
            id="fileInput" 
            onChange={handleChange}
            ref={fileInputRef}
            accept="image/jpeg,image/png" // Limit to JPG/PNG
          />
          
          {/* Action buttons when image is uploaded */}
          {props.previewImage ? (
            <div className='actions-div'>
              <button className='action-but' onClick={handleRemove}>
                Remove image
              </button>
              <label className='action-but' htmlFor='fileInput' tabIndex={0}>
                Change image
              </label>
            </div>
          ) : (
            // Upload prompt when no image
            <p className='drag-para'>
              Drag and drop or click to upload
            </p>
          )}
        </div>
        
        {/* Upload status messages */}
        <div className='warn-div'>
          {!props.showUploadError && (
            // Default upload instructions
            <>
              <img src={iconInfo} alt="" />
              <p className='JPG-para'>
                Upload your photo (JPG or PNG, max size: 500KB).
              </p>
            </>
          )}
          {props.showUploadError && (
            // Error message for large files
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path stroke="hsl(7, 88%, 67%)" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/>
                <path fill="hsl(7, 88%, 67%)" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/>
                <path stroke="hsl(7, 88%, 67%)" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/>
              </svg>
              <p className='JPG-para red-paar'>
                File too large. Please upload a photo under 500KB
              </p>
            </>
          )}
        </div>
        
        {/* Name Input Field */}
        <p className='full-para'>Full Name</p>
        <input 
          type="text" 
          onChange={(e) => props.setShow((prev) => ({...prev, name: e.target.value}))}
        />
        
        {/* Email Input Field */}
        <p className='email-para'>Email Address</p>
        <input 
          type="text" 
          placeholder='example@email.com' 
          className={props.showEmailError ? "less-padding" : ""} 
          onChange={(e) => props.setShow((prev) => ({...prev, email: e.target.value}))}
        />
        
        {/* Email Error Message */}
        {props.showEmailError && (
          <div className='warn-deev'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path stroke="hsl(7, 88%, 67%)" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/>
              <path fill="hsl(7, 88%, 67%)" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/>
              <path stroke="hsl(7, 88%, 67%)" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/>
            </svg>
            <p className='JPG-para red-paar'>
              Please enter a valid email address
            </p>
          </div>
        )}
        
        {/* GitHub Username Input */}
        <p className='git-para'>GitHub Username</p>
        <input 
          type="text" 
          placeholder='@yourusername' 
          onChange={(e) => props.setShow((prev) => ({...prev, github: e.target.value}))}
        />  
        
        {/* Submit Button */}
        <button className='generate-button' onClick={handleClick}>
          Generate My Ticket
        </button>
      </div>
    </>
  )
}

export default Info