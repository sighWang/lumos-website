import React, { useState } from "react";
import { config } from "@ckb-lumos/lumos";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
const { TabPane } = Tabs;
import { AddressToScript } from "./AddressToScript";
import { ScriptToAddress } from "./ScriptToAddress";

config.initializeConfig(config.predefined.AGGRON4);
const StyleWrapper = styled.div`
  padding: 20px;
`;

export const Address = () => {
  return (
    <StyleWrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Address to Script" key="1">
          <AddressToScript></AddressToScript>
        </TabPane>
        <TabPane tab="Script to Address" key="2">
          <ScriptToAddress></ScriptToAddress>
        </TabPane>
      </Tabs>
    </StyleWrapper>
  );
};
