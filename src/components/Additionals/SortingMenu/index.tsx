import React, { useState } from 'react';

// components
import Select from '../../Antd/Select';

const SortingMenu = () => {
  const typeSortingOptions = [
    { value: 'asc', label: 'Asc' },
    { value: 'desc', label: 'Desc' },
  ];
  const categotySortingOptions = [
    { label: 'Id', value: 'id' },
    { label: 'Title', value: 'title' },
    { label: 'Category', value: 'category' },
    { label: 'Rate', value: 'rating' },
    { label: 'Stock', value: 'stock' },
    { label: 'Price', value: 'price' },
    { label: 'Discount', value: 'discountPercentage' },
    { label: 'Brand', value: 'brand' },
  ];
  const [typeOfSorting, setTypeOfSorting] = useState(typeSortingOptions[0].label);
  const [categoryOfSorting, setCategoryOfSorting] = useState('');
  const handleChangeTypeOfSorting = (e: string) => {
    setTypeOfSorting(e);
  };
  const handleChangeCategoryOfSorting = (e: string) => {
    setCategoryOfSorting(e);
  };
  return (
    <div>
      <Select onChange={handleChangeCategoryOfSorting} placeholder='Sort by' value={categoryOfSorting} options={categotySortingOptions} />
      <Select onChange={handleChangeTypeOfSorting} value={typeOfSorting} options={typeSortingOptions} />
    </div>
  );
};

export default SortingMenu;
