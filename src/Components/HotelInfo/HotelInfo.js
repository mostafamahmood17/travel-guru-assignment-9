import React from 'react';

const HotelInfo = (props) => {
  const { condition, description, size, image, price, pros, rating, name, cost } = props.info;
  return (
    // hotel info with dynamiv information
    <div>
      <section className="container">
      <h3 className="text-left ml-2">welcome {name}</h3>
        <p className="text-left ml-2">Book today for special discount</p>
        
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img h-100 w-100" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{description}</h2>
                <p className="card-text">{size}</p>
                <p className="card-text">{condition}</p>
                <p className="card-text">{pros}</p>
                <div className="row pt-3 pb-0 text-color">
                  <div className="col-7">
                    <div className="row"><img style={{ marginTop: "4px", width: "15px", height: "15px" }} className="icon" src="https://i.imgur.com/l5xEODm.png" alt="" />
                      <p>{rating}</p>
                    </div>
                  </div>
                  <div className="col-5">
                    <strong>{price}</strong><small> {cost}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default HotelInfo;