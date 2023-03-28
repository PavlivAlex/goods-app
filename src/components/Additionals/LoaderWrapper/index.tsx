import React, { ReactNode } from 'react';

// helpers
import styled from 'styled-components';

// components
import Spin from '../../Antd/Spin';
import { Content } from 'antd/es/layout/layout';

interface LoaderWrapperProps {
  loading: boolean;
  children: ReactNode;
}

const LoaderWrapper = ({ loading, children }: LoaderWrapperProps) => {
  return <StyledContet>{loading ? <Spin size='large' /> : children}</StyledContet>;
};

const StyledContet = styled(Content)`
  ${({ theme }) => [theme.centerColumnSnippet, theme.fullWidthHeight]};
`;

export default LoaderWrapper;
