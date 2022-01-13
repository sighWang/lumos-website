import React from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
    >
        <Menu.Item key="/tools/address-conversion">
          <NavLink to="/tools/address-conversion">Address Conversion</NavLink>
        </Menu.Item>
    </Menu>
  );
};
