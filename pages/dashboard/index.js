import { Select } from "antd";
import React, { useEffect, useState } from "react";
import currencies from "../../lib/currencies.json";
import { useDispatch, useSelector } from "react-redux";
import { changeBaseCurrency, changeTotalIncome } from "@/redux/currencySlice";
import axios from "axios";
const { Option } = Select;


const HomePage = () => {
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0)

  const baseCurrency = useSelector((state) => state.currency.baseCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    const getIncomes = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/incomes`
        );
        setIncomes(res.data);
        
      } catch (error) {
        console.log(error);
      }
      
    };

   
    getIncomes();

    
  }, []);
  useEffect(() => {
    getTotal();

  }, [incomes])
  

  const getTotal =  () => {
    let expSum = 0;
let incSum = 0;
    try {
      incomes
        .filter((item) => item.transactionType === "income")
        .map((item) => {
          fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${item.financeType.toLowerCase()}/${baseCurrency.toLowerCase()}.json`
          )
            .then((response) => response.json())
            .then((result) => Object.values(result)[1] * item.amount)
            .then((result) => (incSum = incSum + result))
            .then((result) => setTotalIncome(result))
            .catch((error) => console.log("error", error));
        });
      incomes
        .filter((item) => item.transactionType === "expense")
        .map((item) => {
          fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${item.financeType.toLowerCase()}/${baseCurrency.toLowerCase()}.json`
          )
            .then((response) => response.json())
            .then((result) => Object.values(result)[1] * item.amount)
            .then((result) => (expSum = expSum + result))
            .then((result) => setTotalExpense(result))
            .catch((error) => console.log("error", error));
        });


    } catch (error) {
      console.log(error);
    }
  };
  


  const handleChange = async (value) => {
    let expSum = 0;
let incSum = 0;
    incomes
      .filter((item) => item.transactionType === "income")
      .map((item) => {
        fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${item.financeType.toLowerCase()}/${value.toLowerCase()}.json`
        )
          .then((response) => response.json())
          .then((result) => Object.values(result)[1] * item.amount)
          .then((result) => (incSum = incSum + result))
          .then((result) => setTotalIncome(result))

          .catch((error) => console.log("error", error));
      });
      incomes
      .filter((item) => item.transactionType === "expense")
      .map((item) => {
        fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${item.financeType.toLowerCase()}/${value.toLowerCase()}.json`
        )
          .then((response) => response.json())
          .then((result) => Object.values(result)[1] * item.amount)
          .then((result) => (expSum = expSum + result))
          .then((result) => setTotalExpense(result))
          .catch((error) => console.log("error", error));
      });

    dispatch(changeBaseCurrency(value));
  };
  return (
    <div className="container mx-auto mt-5 border  py-4 rounded-2xl h-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between my-4 mx-4">
        <h2 className="text-2xl font-bold text-gray-600  text-center">Transactions</h2>
        <div className=" flex items-center gap-2">
          <h3 className="text-white">Base Currency</h3>
          <Select
            defaultValue={baseCurrency}
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {currencies.map((item) => (
              <Option key={item.id} value={item.cc}>
                {item.cc}
              </Option>
            ))}
          </Select>
        </div>
      </div>

     <div className="flex flex-col md:flex-row justify-between">
     <div className="flex flex-1 justify-center items-center rounded-xl bg-gray-100 mx-6 p-4 mt-2">
        <h3 className="md:text-xl font-medium">Total Income : </h3>
        <h2 className="text-green-400 md:text-2xl font-semibold">
          {" "}
          {totalIncome.toFixed(2)} {baseCurrency}
        </h2>
      </div>
      <div className="flex flex-1 justify-center items-center rounded-xl bg-gray-100 mx-6 p-4 mt-2">
        <h3 className="md:text-xl font-medium">Total Expense : </h3>
        <h2 className="text-red-400 md:text-2xl font-semibold">
          {" "}
          {totalExpense.toFixed(2)} {baseCurrency}
        </h2>
      </div>
     </div>
     
      <div className="flex justify-center items-center rounded-xl bg-gray-100 mx-6 py-4 mt-2">
        <h3 className="md:text-2xl font-medium">Balance : </h3>
        <h2 className="text-gray-400 md:text-2xl font-semibold">
          
          {(totalIncome-totalExpense).toFixed(2)} {baseCurrency}
        </h2>
      </div>
     
    </div>
  );
};

export default HomePage;
