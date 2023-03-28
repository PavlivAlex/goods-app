import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Text from '../Text';
import { Footer as AntdFooter } from 'antd/es/layout/layout';

// styles
import './style.scss';

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
  text-align: center;
`;

export default Footer;
