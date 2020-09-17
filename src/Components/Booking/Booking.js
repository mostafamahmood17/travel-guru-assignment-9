import React from 'react';
import {Link, useParams} from 'react-router-dom';
import "./Booking.css"
import destination from '../../destination/destination';
const Booking = () => {
    
    const {id} = useParams()

    const selectedDestination = destination.find(n => n.id === id)
    console.log(selectedDestination)
    
    
    return (
        <div className="image row" >
            <div className="col-5 ml-5 mt-5">
                <blockquote className='col ml-3'>
                    <h1 className=''>Cox's Bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it obviously longest beach</p>
                    
                </blockquote>
            </div>
            <div className="ml-5 col-5 mt-5 text-center bg-white text-dark rounded" style={{height:"400px"}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="Origin">Origin</label>
                        <input type="text" className="form-control" id="Origin" placeholder="Dhaka" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Destination">Destination</label>
                        <input type="text" className="form-control" id="Destination" placeholder="Cox's Bazar" />
                    </div>
                    <div className="row ">
                        <div className="form-group col">
                            <label htmlFor="from">From</label>
                            <input type="date" className="form-control" id="from"/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="from">To</label>
                            <input type="date" className="form-control" id="from"/>
                        </div>
                    </div>
                   
                    <Link to="/hotel"><button type="submit" className="btn btn-warning">Booking now</button></Link>
                </form>
                



            </div>
        </div>
    );
};

export default Booking;