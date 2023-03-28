import React from 'react';

// components
import { Spin as AntdSpin } from 'antd';
import { LoadingOutlined as LoadingIcon } from '@ant-design/icons';

type SizeType = 'large' | 'small' | 'default';

interface SpinProps {
  size?: SizeType;
}

const Spin = ({ size = 'default' }: SpinProps) => {
  return <AntdSpin size={size} indicator={<LoadingIcon />} />;
};

export default Spin;
