const { createSlice } = require("@reduxjs/toolkit");


const currencySlice=createSlice({
    name:"currency",
    initialState:{
        baseCurrency:"EUR",
        totalIncome:0,
    },
    reducers:{
        changeBaseCurrency:(state,action)=>{
            state.baseCurrency=action.payload
          
        },
        changeTotalIncome:(state,action)=>{            
            state.totalIncome=action.payload
        }

    }
})
export const {changeBaseCurrency,changeTotalIncome}=currencySlice.actions;
export default currencySlice.reducer;