import React from 'react';
import './Layout.css'; // 스타일 파일 임포트
import { LayoutProps } from '@/utils/props';

const Layout : React.FC<LayoutProps> = ({ children, color }) => {
  return (
    <div className="layout-container m-4" style={{backgroundColor : color}}>
      <div className="content-container">{children}</div>
    </div>
  );
};



export default Layout;
