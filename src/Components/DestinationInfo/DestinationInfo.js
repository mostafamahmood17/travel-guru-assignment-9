import React from 'react';
import { Link } from 'react-router-dom';

const DestinationInfo = (props) => {
    const {id, name, description} = props.destinationPlace[0];
    return (
        <blockquote className='col row-lg-12 ml-3'>
        <h1 className =''>{name}</h1>
        <p>{description}</p>
        <Link to={`/booking/${id}`}><button className="btn btn-warning text-dark">Booking Now</button></Link>
        </blockquote>
    );
};

export default DestinationInfo;