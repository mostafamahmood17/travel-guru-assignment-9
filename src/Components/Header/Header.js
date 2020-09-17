import React, { createContext, useState } from 'react';
import '../Header/Header.css'
import destination from '../../destination/destination'
import DestinationPicture from '../DestinationPicture/DestinationPicture';
import DestinationInfo from '../DestinationInfo/DestinationInfo';

export const DestContext = createContext();

const Header = () => {


    const [destinationPlace, setDestinationPlace] = useState(destination);

    return (
         <div className="image">
           <div>
            <div className='row'>   
             <div className='col-lg-3 mt-5'>
               <DestinationInfo destinationPlace={destinationPlace}></DestinationInfo>
             </div>
                    {
                    destinationPlace.map(dest => <DestinationPicture key={dest.id} dest={dest}></DestinationPicture>)
                    }

                </div>
            </div>      
        </div>         
         
    );
};

export default Header;

