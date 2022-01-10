import React, { useEffect } from 'react';
import { Input, Space } from 'antd';
import { useBikes } from '../../../../Contexts/bikes.context';
import BikeCard from '../BikeCard';
import BikeActions from './BikeActions';

const SearchBike = () => {
    const { Search } = Input
    const { handleSerialSearch, searchedBikeBySerial, searchSerial, serialSearchDetails } = useBikes()


    const onSearch = (serial) => {
        searchSerial(serial)
    }

    return (
        <>
        <Space direction='vertical'>
            <Search
                placeholder='search by serial'
                onSearch={onSearch}
                style={{ width: 200 }} />
        </Space>

        {
            serialSearchDetails.value ? 
                serialSearchDetails.value.map((match, idx) => {
                    return(
                        <>
                        <BikeActions key={idx} serialMatch={match} />
                        {console.log(serialSearchDetails)}
                        </>
                    )
                })
            :
            <></>
        }
        </>

);
};

export default SearchBike;