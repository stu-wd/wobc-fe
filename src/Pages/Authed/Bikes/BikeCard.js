import React from 'react';
import { useBikes } from '../../../Contexts/bikes.context';

const BikeCard = (props) => {
    const { brand, condition, future, type, serial, size, user_id } = props.bike;
    const { toggleCardView } = useBikes()

    return (
        <div style={{display: 'flex', margin: '5px', border: '2px solid red', maxWidth: '200px'}}>
            <div>
                <h5>{future}</h5>
                <h5>{condition}</h5>
                <h5>{serial}</h5>
                <h5>{size}</h5>
                <h5>{brand}</h5>
                <h5>{user_id}</h5>
                <h5>{type}</h5>
            </div>
            <div style={{ padding: '2px'}}>
                <button onClick={toggleCardView}>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default BikeCard;