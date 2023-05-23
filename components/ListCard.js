import React from "react";
import { FaCommentDots, FaTrash } from "react-icons/fa";
import { Input,message } from "antd";
import axios from "axios";
const { TextArea } = Input;
const ListCard = ({income,getIncomes,getTotal}) => {
const date=new Date(income.createdAt)
const [messageApi, contextHolder] = message.useMessage();


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];

  const handleDelete=async(e)=>{
  
    try {
      
      const res=await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/incomes/${income._id}`)
      getIncomes()
      getTotal()
      messageApi.success("Item deleted successfully")
     
    } catch (error) {
      console.log(error)
      messageApi.success("Item can't deleted")
    }
    
  }

 
 
  return (
    <>
    {contextHolder}
    <div className="w-full mb-3 ">
      
      <div className="w-full  flex justify-between items-center gap-4 p-1 bg-white border border-gray-200 rounded-lg shadow sm:p-2  ">
<div className="w-full">
<div className="flex-shrink-0 relative">
          <span className="ml-4 absolute right-0 top-0 text-xs">
            {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
          </span>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className={`py-3 sm:py-4 `}>
              <div className="flex items-center justify-between ">
                <div className="flex flex-row items-center gap-1">
                  <div className={`${income.transactionType==="income"?"bg-green-400":"bg-red-400" } w-3 h-3 rounded-full`}></div>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white uppercase">
                    {income.title}
                  </p>
                </div>
                <div className=" items-center  font-semibold text-gray-900 dark:text-white">
                  {income.amount} {income.financeType}
                </div>

                
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0 flex gap-2">
        <FaCommentDots className="w-6"/>
          <span className=" text-xs">
            {income.desc}
          </span>
        </div>
</div>
<div className=" items-center text-base font-semibold text-gray-900 dark:text-white">
                  <FaTrash className="cursor-pointer" onClick={(e)=>handleDelete(income._id)} />
                </div>
      </div>
    </div>
    </>
  );
};

export default ListCard;
