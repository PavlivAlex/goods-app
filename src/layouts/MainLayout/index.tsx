import React, { ReactNode } from 'react';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { productsAPI } from '../../api/products';
import { useFetch } from '../../hooks/useFetch';
import Header from '../../components/Antd/Header';
import Footer from '../../components/Antd/Footer';
import Sidebar from '../../components/Antd/Sidebar';
import { Col, Row } from 'antd';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20}>
          <Content>{children}</Content>
        </Col>
      </LayoutContent>

      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled(Content)`
  height: 100%;
`;
const LayoutContent = styled(Row)`
  height: 100%;
  padding: 60px 0;
  align-items: center;
  .ant-col {
    height: 100%;
    .ant-menu {
      height: 100%;
      padding-left: 40px;
      border-inline-end: none !important;
    }
  }
`;

export default MainLayout;
