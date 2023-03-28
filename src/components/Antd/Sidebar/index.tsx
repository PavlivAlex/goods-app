import React, { useEffect, useState } from 'react';

// helpers
import { useFetch } from '../../../hooks/useFetch';
import { RoutesEnum } from '../../../router/routes';
import { productsAPI } from '../../../api/products';

// components
import Text from '../Text';
import LoaderWrapper from '../../Additionals/LoaderWrapper';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// styles
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../../redux/actions/products';
import { StateModel } from '../../../redux/reducers';
import { ICategory } from '../../../interfaces/products';
import Button from '../Button';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [current, setCurrent] = useState(location.pathname);
  const categories = useSelector<StateModel, ICategory[]>(state => state.products.categories);

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    dispatch(products.getCategories());
  }, []);

  return (
    <>
      <Menu mode='inline' selectedKeys={[current]} onClick={handleClick}>
        {categories?.map(item => (
          <Menu.Item key={item.key}>
            <Link to={`${RoutesEnum.Category}/${item.label}`}>{item.label}</Link>
          </Menu.Item>
        ))}
        {location.pathname !== RoutesEnum.Home && <Button onClick={() => navigate(RoutesEnum.Home)}>Go back home</Button>}
      </Menu>
    </>
  );
};

export default Sidebar;
