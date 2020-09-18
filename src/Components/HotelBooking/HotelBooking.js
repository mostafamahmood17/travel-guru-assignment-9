import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import hotelData from '../../hotelData';
import HotelInfo from '../HotelInfo/HotelInfo';
import GoogleMap from '../GoogleMap/GoogleMap';




const HotelBooking = () => {
    const [hotel, setHotel] = useState(hotelData)
    const {id} = useParams();
   const hotelInfo = hotel.filter(hotels => hotels.id == id);
   
   
    
    return (
        <div>
           <hr width="75%"/>
           <h2 className="text-bark text-center">welcome to Travel Guru</h2>
         
          <div className="row">
          
            <div className="col row-md-8">
           
           {
             hotelInfo.map(info => <HotelInfo info={info} key={info.idu}></HotelInfo>)
           }
            </div>
           
         
            <div className="col row-md-8">
            
              <GoogleMap></GoogleMap>
              
           </div>
         </div>   
        </div>
    );
};

export default HotelBooking;

