import React, { useEffect, useState } from 'react';

// helpers
import styled from 'styled-components';
import { products } from '../../../redux/actions/products';
import { ICategory } from '../../../interfaces/products';
import { RoutesEnum } from '../../../router/routes';
import { StateModel } from '../../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

// components
import Button from '../Button';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const Sidebar = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch: any = useDispatch();

  const [current, setCurrent] = useState('');

  const categories = useSelector<StateModel, ICategory[]>(state => state.products.categories);

  const handleClick = (label: string) => {
    setCurrent(label);
  };

  const handleGoHome = () => {
    setCurrent('');
    navigate(RoutesEnum.Home);
  };

  useEffect(() => {
    dispatch(products.getCategories());
  }, []);

  useEffect(() => {
    if (name) {
      setCurrent(name);
    }
  }, [name]);

  return (
    <>
      <Menu mode='inline'>
        {categories?.map(item => (
          <StyledItem current={current} label={item.label} key={item.key} onClick={() => handleClick(item.label)}>
            <Link to={`${RoutesEnum.Category}/${item.label}`}>{item.label}</Link>
          </StyledItem>
        ))}
        {location.pathname !== RoutesEnum.Home && <Button onClick={handleGoHome}>Go back home</Button>}
      </Menu>
    </>
  );
};

const StyledItem = styled(Menu.Item)<{ current: string; label: string }>`
  height: 30px !important;
  background: ${({ current, label }) => (current === label ? '#c1c1c1' : 'white')} !important;
  color: ${({ current, label }) => (current === label ? 'blue' : 'black')} !important;
`;

export default Sidebar;
