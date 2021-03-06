import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderComponent = (props) => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(4).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
};

export default React.memo(HeaderComponent);
