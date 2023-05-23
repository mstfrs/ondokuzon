import ListCard from "@/components/ListCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Row, Select, message } from "antd";
const { Option } = Select;
import currencies from "../../lib/currencies.json";
import { useSelector } from "react-redux";

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

const Incomes = () => {
  const baseCurrency = useSelector((state) => state.currency.baseCurrency);
  const [total, setTotal] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [incomes, setIncomes] = useState([]);
  const [form] = Form.useForm();

  
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

  const getIncomes = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/incomes`);
      setIncomes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIncomes();
  }, []);

  useEffect(() => {
    getTotal();
  }, [incomes]);
  const getTotal = () => {
    let sum = 0;
    try {
      incomes
        .filter((item) => item.transactionType === "income")
        .map((item) => {
          fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${item.financeType.toLowerCase()}/${baseCurrency.toLowerCase()}.json`
          )
            .then((response) => response.json())
            .then((result) => Object.values(result)[1] * item.amount)
            .then((result) => (sum = sum + result))
            .then((result) => setTotal(result))
            .catch((error) => console.log("error", error));
        });
    } catch (error) {
      console.log(error);
    }
  };

  

  const onFinish = async (values) => {
   
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/incomes`,
        {
          title: values.title,
          financeType: values.financeType,
          amount: values.amount,
          desc: values.desc,
          transactionType: "income",
        }
      );

      setIncomes([...incomes, res.data]);
      messageApi.success("Income added successfully")
    } catch (error) {
      console.log(error);
      messageApi.error("Check all fields")
    }

    form.resetFields();
    getTotal();
  };

  return (
    <>
    {contextHolder}
    <div className="container mx-auto mt-5 border   rounded-2xl px-5 mb-4 pb-6">
      <h2 className="text-2xl font-bold ml-4 mt-4 text-center text-gray-600">Incomes</h2>
      <div className="flex justify-center items-center rounded-xl bg-gray-100 mx-6 py-4 mt-2">
        <h3 className="md:text-2xl font-medium">Total Income : </h3>
        <h2 className="text-green-400 md:text-2xl font-semibold">
          {" "}
          {total.toFixed(2)} {baseCurrency}
        </h2>
      </div>

      <div className="flex gap-10 mt-5 md:flex-row flex-col">
        <div className="flex-1">
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
                  type:Number
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
                className=" bg-blue-900 text-white text-center items-center"
                
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="flex-1 h-80  overflow-y-auto md:mr-4">
          {incomes.map(
            (income) =>
              income.transactionType === "income" && (
                <ListCard
                  key={income.id}
                  income={income}
                  getIncomes={getIncomes}
                  getTotal={getTotal}
                />
              )
          )}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Incomes;
