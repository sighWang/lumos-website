import React, { useEffect, useState } from "react";
import { Button, Form, Input, Radio, Typography } from "antd";
import { useFormik } from "formik";
import "antd/dist/antd.css";
import styled from "styled-components";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
declare global {
    interface Window {
    lumos?: any;
  }
}

let config;
let helpers;
if (ExecutionEnvironment.canUseDOM) {
  require("./lumos.umd.js", );
  config = window.lumos.config;
  helpers = window.lumos.helpers;
}
const StyleWrapper = styled.div`
  padding: 20px;
  .resultForm {
    .ant-form-item {
      margin-bottom: 0px;
    }
  }
  .errorMessage {
    color: #ff4d4f;
  }
`;
export const ScriptToAddress = () => {
  let config;
  let helpers;
  const [mainnetAddress, setMainnetAddress] = useState("");
  const [testnetAddress, setTestnetAddress] = useState("");
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const lumos = require("./lumos.umd.js");
      config = lumos.config;
      helpers = lumos.helpers;
  }
  }, [])
  const scriptToAddressForm = useFormik({
    async onSubmit(val) {
      config.initializeConfig(config.predefined.AGGRON4);
      const address = helpers.scriptToAddress(val);
      setTestnetAddress(address);

      config.initializeConfig(config.predefined.LINA);
      const mainnetAddress = helpers.scriptToAddress(val);
      setMainnetAddress(mainnetAddress);
    },
    initialValues: {
      code_hash: "",
      hash_type: "",
      args: "",
    },
  });
  return (
    <StyleWrapper>
      <Form name="scriptToAddress">
        <Form.Item label="CodeHash">
          <Input
            name="code_hash"
            onChange={scriptToAddressForm.handleChange}
            value={scriptToAddressForm.values.code_hash}
          />
        </Form.Item>
        <Form.Item label="HashType">
          <Radio.Group
            name="hash_type"
            onChange={scriptToAddressForm.handleChange}
            value={scriptToAddressForm.values.hash_type}
          >
            <Radio value="data">data</Radio>
            <Radio value="type">type</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="args">
          <Input
            name="args"
            onChange={scriptToAddressForm.handleChange}
            value={scriptToAddressForm.values.args}
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => scriptToAddressForm.submitForm()}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form className="resultForm">
        <Form.Item label="Testnet">
          {testnetAddress && (
            <Typography.Text copyable>{testnetAddress}</Typography.Text>
          )}
        </Form.Item>
        <Form.Item label="Mainnet">
          {testnetAddress && (
            <Typography.Text copyable>{mainnetAddress}</Typography.Text>
          )}
        </Form.Item>
      </Form>
    </StyleWrapper>
  );
};
