import React, { ReactNode, MouseEvent } from 'react';

// components
import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

type SizeType = 'small' | 'middle' | 'large';
type HtmlType = 'button' | 'submit' | 'reset' | undefined;
type ButtonType = 'primary' | 'dashed' | 'text' | 'link';

interface ButtonProps {
  size?: SizeType;
  type?: ButtonType;
  htmlType?: HtmlType;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;

  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button = ({
  size = 'middle',
  type = 'primary',
  htmlType = 'button',
  children,
  disabled = false,
  isLoading = false,

  onClick,
}: ButtonProps) => {
  return (
    <StyledButton size={size} type={type} htmlType={htmlType} disabled={disabled} onClick={onClick} loading={isLoading}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(AntdButton)`
  background: black;
  &:hover {
    background: gray !important;
  }
`;

export default Button;
