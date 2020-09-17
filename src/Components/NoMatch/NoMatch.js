import React from 'react';
import image from '../../Image/Rectangle1.png'

const NoMatch = () => {
    const noMatchStyle={
        
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            fontFamily: "'Ubuntu', sans-serif",
            color:"#fff",
            backgroundRepeat: "noRepeat",
            height:"100vh",
            width:"100%"

    }
    return (
        <div style={noMatchStyle}>
            <h1 className="border border-danger rounded text-danger text-center p-5 font-weight-bold">Sorry!!! NO PAGE FOUND</h1>
        </div>
    );
};

export default NoMatch;