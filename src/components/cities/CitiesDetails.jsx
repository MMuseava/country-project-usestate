import { budapestInfo } from '../../assets/data/countryInfo'
import { parisInfo } from '../../assets/data/countryInfo'
import { brusselsInfo } from '../../assets/data/countryInfo'
import { berlinInfo } from '../../assets/data/countryInfo'

import Popup from '../popup/Popup'
import React, { useState } from 'react'


import "./citiesDetails.style.css"


const CitiesDetails = () => {

    const [isBudapestOpen, setIsBudapestOpen] = useState(false)
    const [isParisOpen, setIsParisOpen] = useState(false)
    const [isBrusselsOpen, setIsBrusselsOpen] = useState(false)
    const [isBerlinOpen, setIsBerlinOpen] = useState(false)


    const onBudapestClick = () => {
        setIsBudapestOpen(!isBudapestOpen)
    }
    const onParisClick = () => {
        setIsParisOpen(!isParisOpen)
    }
    const onBrusselsClick = () => {
        setIsBrusselsOpen(!isBrusselsOpen)
    }
    const onBerlinClick = () => {
        setIsBerlinOpen(!isBerlinOpen)
    }


  return (
      <div className='container'>
          <div className='city-box-one'>
          <div>
              <img className='img-budapest' onClick={onBudapestClick}
                      src='https://i.pinimg.com/564x/66/82/e0/6682e045ff32a662a9b54b6b94ad4844.jpg'
                      alt='budapest'
                  
              />
              {isBudapestOpen ? (<Popup 
                info= {budapestInfo.discription}
              imgUrl1={budapestInfo.imgUrl1}
              imgUrl2={budapestInfo.imgUrl2}
              imgUrl3={budapestInfo.imgUrl3}
              closePopup={() => setIsBudapestOpen(false)} /> ) : null} 
              
          </div>
          <div>
              <img className='img-paris' onClick={onParisClick}
                      //   src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=680'
                      src='https://i.pinimg.com/474x/f3/f2/df/f3f2dfdf4510346081483d3aed6adf0e.jpg'
                      alt='paris'
                  
              />
               {isParisOpen? (<Popup 
                info= {parisInfo.discription}
              imgUrl1={parisInfo.imgUrl1}
              imgUrl2={parisInfo.imgUrl2}
              imgUrl3={parisInfo.imgUrl3}
              closePopup={() => setIsParisOpen(false)} /> ) : null} 
              
              </div>
          </div>
          
          <div className='city-box-two'>
          <div>
              <img className='img-brussels' onClick={onBrusselsClick}
                      src='https://biovox.eu/wp-content/uploads/2020/09/belgian-flag-over-ghent.jpg'
                      alt='brussels'
                  
              />
               {isBrusselsOpen ? (<Popup 
                info= {brusselsInfo.discription}
              imgUrl1={brusselsInfo.imgUrl1}
              imgUrl2={brusselsInfo.imgUrl2}
              imgUrl3={brusselsInfo.imgUrl3}
              closePopup={() => setIsBrusselsOpen(false)} /> ) : null} 
              
          </div>
          <div>
              <img className='img-berlin' onClick={onBerlinClick}
                      src='https://i.pinimg.com/564x/65/14/7b/65147bfe78410ae2ddcb684727771ed1.jpg'
                      alt='berlin'
                   
              />
               {isBerlinOpen ? (<Popup 
                info= {berlinInfo.discription}
              imgUrl1={berlinInfo.imgUrl1}
              imgUrl2={berlinInfo.imgUrl2}
              imgUrl3={berlinInfo.imgUrl3}
              closePopup={() => setIsBerlinOpen(false)} /> ) : null} 
              
              </div>
              </div>
          


    </div>
  )
}



export default CitiesDetails