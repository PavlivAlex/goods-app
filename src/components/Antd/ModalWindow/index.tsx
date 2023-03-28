import React, { ReactNode } from 'react';

// components
import { Modal as AntdModal } from 'antd';

export interface RequiredModalWindowProps {
  isVisible: boolean;
  children: ReactNode;
  closeCallback: (value: any) => void;
}

interface ModalWindowProps extends RequiredModalWindowProps {
  title?: ReactNode;
  width?: number;
  centered?: boolean;
  className?: string;
}

const ModalWindow = ({ width, title, children, centered = true, isVisible: open, closeCallback }: ModalWindowProps) => {
  return (
    <AntdModal open={open} width={width} title={title} footer={null} centered={centered} onCancel={closeCallback}>
      {children}
    </AntdModal>
  );
};

export default ModalWindow;
