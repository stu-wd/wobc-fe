import React from 'react';

const BikeCard = (props) => {
    const { brand, condition, future, type, serial, size, user_id } = props.bike;

    return (
        <div style={{ border: '3px solid black'}}>
         <h5>{serial}</h5>
         <h5>{future}</h5>
         <h5>{condition}</h5>
         <h5>{brand}</h5>
         <h5>{type}</h5>
         <h5>{size}</h5>
         <h5>{user_id}</h5>
         <button>Edit</button>
         <button>Delee</button>
        </div>
    );
};

export default BikeCard;