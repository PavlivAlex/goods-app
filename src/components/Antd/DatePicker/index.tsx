import React from 'react';

// helpers
import styled from 'styled-components';

// components
import { DatePicker as AntdDatePicker } from 'antd';

type PickerType = 'week' | 'month' | 'quarter' | 'year';

interface DatePickerProps {
  picker: PickerType;
  onChange: (e: any) => void;
  disabledDate: (date: any) => boolean;
}

const DatePicker = ({ picker = 'year', onChange, disabledDate }: DatePickerProps) => {
  return <StyledDatePicker onChange={onChange} picker={picker} disabledDate={disabledDate} />;
};
const StyledDatePicker = styled(AntdDatePicker)`
  width: 100%;
`;

export default DatePicker;
