import React from 'react'
import PropTypes from 'prop-types'
import "./popup.style.css"

const Popup = ({info, closePopup, imgUrl1, imgUrl2, imgUrl3})=> {
  return (
      <div className='popup-container'>
          <div className='popup-main'>
              <div className='popup-img-box'>
                  <div>
                      
              <img className='popup-img1' src= {imgUrl1} />
              <img className='popup-img2' src= {imgUrl2} />
                  </div>
              <img className='popup-img3' src= {imgUrl3} />
                  
              </div>
              <p className='popup-text'>{info}</p>

              <button onClick={closePopup} className='btn-popup'>X</button>
          </div>
    </div>
  )
}

Popup.propTypes = {}

export default Popup