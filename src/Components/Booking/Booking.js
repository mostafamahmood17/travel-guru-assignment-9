import React, { useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import "./Booking.css"
import destination from '../../destination/destination';
const Booking = () => {
    
    const {id} = useParams()
    const history = useHistory()
    const [validate, setValidate] = useState("")
    const handleClick = () => {
        validate && history.push(`/hotel/${id}`);
      }
    

    const selectedDestination = destination.find(dest => dest.id == id);
    const {name, description} = selectedDestination;
    
    
    return (
        <div className="image row" >
            <div className="col-5 ml-5 mt-5">
                <blockquote className='col ml-3'>
                    <h1 className=''>{name}</h1>
                    <p>{description}</p>
                    
                </blockquote>
            </div>
            <div className="ml-5 col-5 mt-5 text-center bg-white text-dark rounded" style={{height:"400px"}}>
                <form onSubmit={handleClick}> 
                    <div className="form-group">
                        <label htmlFor="Origin">Origin</label>
                        <input onChange={(e)=>setValidate(e.target.value)} type="text" className="form-control" id="Origin" placeholder="Dhaka" value={validate} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Destination">Destination</label>
                        <input type="text" className="form-control" id="Destination" placeholder="Cox's Bazar" required/>
                    </div>
                    <div className="row ">
                        <div className="form-group col">
                            <label htmlFor="from">From</label>
                            <input type="date" className="form-control" id="from" required/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="from">To</label>
                            <input type="date" className="form-control" id="from" required/>
                        </div>
                    </div>
                   
                    <button type="submit"  className="btn btn-warning">Start Booking</button>
                </form>

            </div>
        </div>
    );
};

export default Booking;