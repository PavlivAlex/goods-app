import React from 'react';
import { useSelector } from 'react-redux';
import { ICategory } from '../../../../interfaces/products';
import { StateModel } from '../../../../redux/reducers';
import Select from '../../../Antd/Select';

interface CategorySelectProps {
  value: any;
  placeholder: string;
  onChange: (e: any) => void;
}

const CategorySelect = ({ value, placeholder, onChange }: CategorySelectProps) => {
  const selectOptions = useSelector<StateModel, ICategory[]>(state => state.products.categories);
  return (
    <Select
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      options={selectOptions.map(option => ({ label: option.label, value: option.key }))}
    />
  );
};

export default CategorySelect;
