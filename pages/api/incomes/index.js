import dbConnect from "@/util/dbConnect"
import Incomes from "@/models/Incomes"



const handler=async(req,res)=>{
    await dbConnect()

    const {method}=req;

    if (method==="GET") {
        try {
            const incomes= await Incomes.find()
            res.status(200).json(incomes)            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    
    if (method==="POST") {
        try {           
            const newIncome=await Incomes.create(req.body);          
            res.status(200).json(newIncome)            
        } catch (error) {
            console.log(error)
        }
        
    }
    if (method==="DELETE") {
        try {
            console.log(id)
            const incomes=await Incomes.findByIdAndDelete(id);
            res.status(200).json(incomes)
            
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default handler