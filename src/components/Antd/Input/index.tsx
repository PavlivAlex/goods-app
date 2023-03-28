import React, { ChangeEventHandler } from 'react';

// helpers
import styled from 'styled-components';

// components
import { Input as AntDInput } from 'antd';

type SizeType = 'small' | 'middle' | 'large';
type InputType = 'text' | 'number' | 'numbers';

interface InputProps {
  name?: string;
  size?: SizeType;
  type?: InputType;
  value?: string;
  disabled?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  addonBefore?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ name, size, type = 'text', value, disabled, allowClear = false, placeholder, addonBefore, onChange }: InputProps) => {
  return (
    <StyledInput
      name={name}
      size={size}
      type={type}
      value={value}
      disabled={disabled}
      allowClear={allowClear}
      placeholder={placeholder}
      addonBefore={addonBefore}
      onChange={onChange}
      onKeyPress={event => {
        if (type === 'numbers') {
          if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
            event.preventDefault();
          }
        }
      }}
    />
  );
};

const StyledInput = styled(AntDInput)`
  margin: ${({ theme }) => theme.marginS} 0;
`;

export default Input;
