import React, { useState } from 'react';
import authedAxios from '../../../../Utils/authedAxios';

const SearchBike = () => {
    const [ search, setSearch ] = useState()

    const onChange = (e) => {
        const { name, value } = e.target
        setSearch({
            ...search,
            [name]: value
        })
    }

    // const formSubmit = e => {
    //     e.preventDefault()
    // }


    const searchBikes = (e) => {
        // formSubmit()
        e.preventDefault()
        const searchedSerial = {
            serial: search
        }
        authedAxios()
            .post('/bikes/filter', searchedSerial)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }

    return (
        <div>
            <form 
                onSubmit={searchBikes}
            >
                <input
                    type='text'
                    name='serial'
                    onChange={onChange}
                    // value={search}
                    />

                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBike;