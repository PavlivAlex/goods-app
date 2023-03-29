import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Text from '../Text';
import { Layout } from 'antd';

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <StyledHeader>
      <Text>Logo here</Text>
    </StyledHeader>
  );
};

const StyledHeader = styled(AntdHeader)`
  position: fixed;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  height: 60px;
  padding: 0 60px;
  article {
    color: white;
    margin: 0;
    font-size: 36px;
  }
`;

export default Header;
