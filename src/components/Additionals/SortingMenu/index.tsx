import React from 'react';

// helpers
import styled from 'styled-components';
import { ISorting } from '../../../redux/reducers/settings';
import { StateModel } from '../../../redux/reducers';
import { useSelector } from 'react-redux';

// components
import Select from '../../Antd/Select';
import { Content } from 'antd/es/layout/layout';

interface SortingMenuProps {
  handleSort: (e: any) => void;
  handleSortType: (e: any) => void;
}

const SortingMenu = ({ handleSort, handleSortType }: SortingMenuProps) => {
  const sorting = useSelector<StateModel, ISorting>(state => state.settings.sorting);

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

  return (
    <StyledSortingMenu>
      <Select onChange={handleSort} placeholder='Sort by' value={sorting?.option} options={categotySortingOptions} />
      <Select onChange={handleSortType} value={sorting?.type} options={typeSortingOptions} />
    </StyledSortingMenu>
  );
};

const StyledSortingMenu = styled(Content)`
  flex: initial !important;
  .ant-select:first-child {
    width: 200px;
    margin-right: 10px;
  }
  .ant-select:last-child {
    width: 100px;
  }
`;

export default SortingMenu;
