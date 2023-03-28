import React from 'react';
import { Select } from 'antd';

const FilterMenu = () => {
  const filterOption = [
    { label: 'Top sale', value: 'top-sale' },
    { label: 'High price', value: 'high-price' },
    { label: 'Low price', value: 'low-price' },
    { label: 'High discount', value: 'high-discount' },
    { label: 'My products', value: 'my-products' },
  ];
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select mode='multiple' allowClear style={{ width: '300px' }} placeholder='Filter by' onChange={handleChange} options={filterOption} />
  );
};

export default FilterMenu;
