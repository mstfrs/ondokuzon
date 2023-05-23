import { Tooltip } from 'antd'
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts'

export const TransactionChart = () => {
    const [incomes, setIncomes] = useState([])

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
  return (
    
    <LineChart width={730} height={250} data={incomes}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="transactionType" />
  <YAxis dataKey="amount"/>
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="amount" stroke="#8884d8" />
  
</LineChart>
  )
}
