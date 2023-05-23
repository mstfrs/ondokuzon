import dbConnect from "@/util/dbConnect"
import Incomes from "@/models/Incomes"



const handler=async(req,res)=>{
    await dbConnect()

    const {method,query:{id}}=req;

    if (method==="GET") {
        try {
            
            const incomes= await Incomes.findById(id)
            res.status(200).json(incomes)            
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