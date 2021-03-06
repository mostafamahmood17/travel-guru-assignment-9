import React from 'react';
import {useHistory } from 'react-router-dom';
import '../Header/Header.css'


const DestinationPicture = (props) => {
    
    let history = useHistory();
    const {id, name, image} = props.dest

    function handleClick(id) {
        history.push(`/booking/${id}`);
      }
    

    const picStyle = {
        backgroundImage: `url(${image}`
    }
    

    return (
        
            <div className='col mt-5'>     
                     <h1 onClick={()=>handleClick(id)}c lassName='picture float-left' id='pictureOne' style={picStyle}>{name}</h1>     
            </div>
            
        
        
    )
}

export default DestinationPicture;