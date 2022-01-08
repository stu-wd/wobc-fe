import React, { useEffect } from 'react';
import { Input, Space } from 'antd';
import { useBikes } from '../../../../Contexts/bikes.context';
import BikeCard from '../BikeCard';

const SearchBike = () => {
    const { Search } = Input
    const { handleSerialSearch, searchedBikeBySerial } = useBikes()

    const onSearch = (serial) => {
        handleSerialSearch(serial)

        if (!searchedBikeBySerial) {
            console.log('nothing found')
        }
    }

    return (
        <>
        <Space direction='vertical'>
            <Search
                placeholder='search by serial'
                onSearch={onSearch}
                style={{ width: 200 }} />
        </Space>
        </>

);
};

export default SearchBike;