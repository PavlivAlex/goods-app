import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Text from '../Text';
import { Footer as AntdFooter } from 'antd/es/layout/layout';

const Footer = () => {
  return (
    <StyledFooter>
      <Text>© Copyright Oleksandr Pavliv 2023</Text>
    </StyledFooter>
  );
};

const StyledFooter = styled(AntdFooter)`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 60px;
`;

export default Footer;
