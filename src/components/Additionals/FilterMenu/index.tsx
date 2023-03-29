import React from 'react';

// components
import { Select } from 'antd';

interface FilterMenuProps {
  onChange: (e: string) => void;
}

const FilterMenu = ({ onChange }: FilterMenuProps) => {
  const filterOption = [
    { label: 'Top sale', value: 'top-sale' },
    { label: 'High price', value: 'high-price' },
    { label: 'Low price', value: 'low-price' },
    { label: 'High discount', value: 'high-discount' },
  ];

  return <Select allowClear style={{ width: '300px' }} placeholder='Filter by' onChange={onChange} options={filterOption} />;
};

export default FilterMenu;
