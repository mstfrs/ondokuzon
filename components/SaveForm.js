import {

  Button,

  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useState } from "react";
const { Option } = Select;
import currencies from "../lib/currencies.json";


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SaveForm = ({handleCreate}) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
 
    handleCreate()
    // const fieldsValue = {
    //   ...values,
    //   'date': values['date'].format('YYYY-MM-DD'),

    // };
    console.log("Received values of form: ", values);
  };

  const suffixSelector = (
    <Form.Item name="financeType" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        {currencies.map((item) => (
          <Option key={item.id} value={item.cc}>
            {item.cc}
          </Option>
        ))}
        {/* <Option value="USD">$</Option>
          <Option value="CNY">¥</Option> */}
      </Select>
    </Form.Item>
  );


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 400,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please input Title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: "Please input Amount!",
          },
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      {/* 
        <Form.Item name="date" label="Date" rules={[{
          type: 'object',
          required: true,
          message: 'Please select date!',
        }]} >
      <DatePicker />
    </Form.Item>
   */}

      <Form.Item
        name="desc"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input Description",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout} className="flex justify-center">
        <Button
          type=""
          htmlType="submit"
          className=" bg-blue-400 text-white text-center items-center"
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SaveForm;
