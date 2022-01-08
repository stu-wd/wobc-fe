import React from 'react';
import { Input, Select, Space } from 'antd';
import authedAxios from '../../../../Utils/authedAxios';

const SearchBike = () => {
    const { Search } = Input

    const onSearch = (serial) => {
        authedAxios()
            .get(`/bikes/${serial}`)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <Space direction='vertical'>
            <Search placeholder='search serial' onSearch={onSearch} style={{ width: 200 }} />
        </Space>
);
};

export default SearchBike;