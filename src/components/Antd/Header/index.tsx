import React from 'react';

// components
import Text from '../Text';
import { Layout } from 'antd';

// styles
import './style.scss';

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader>
      <Text>Logo here</Text>
    </AntdHeader>
  );
};

export default Header;
