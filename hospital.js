const express=require("express");
const router=express.Router();

let hospitals=[
    {"hospitalName":"Artemis Hospital,","location":"Gurugram",},
    {"hospitalName":"Indraprastha Apollo Hospital, ,","location":"New Delhi",},
    {"hospitalName":"Artemis Hospital,","location":"Apollo Hospitals, Greams Road,",},
    {"hospitalName":"Apollo Hospitals, Greams Road,","location":"Chennai",},
]
router.get("/",(request,resspose)=>{
    resspose.status(200).json(
        hospitals)
})

router.post("/",(request,resspose)=>{
    const {hospitalName,location}=request.body;
    const hospital={
        id:hospitals.length+1,
        hospitalName:hospitalName,
        location:location,
    }
    hospitals.push(hospital);
    resspose.status(201).json({
        "massage":"add hospital successfully",hospitals
    })
})
router.put("/:id",(request,resspose)=>{
    const id=parseInt(request.params.id)
    const {hospitalName,location}=request.body;
    const hospital={
        id:id,
        hospitalName:hospitalName,
        location:location,
    }
    const index=hospitals.findIndex((e)=>e.id===id);
    if(index!==-1){
        hospitals[index]=hospital;
        resspose.status(200).json({
            "message":"updated hospital successsfully",hospital
        })
    }else{
        resspose.status(404).json({
        "massage":"hospitails not found"
        })
    }
    
})
router.delete("/:id",(request,resspose)=>{
    const id=parseInt(request.params.id)

    const index=hospitals.findIndex((e)=>e.id===id);
    if(index!==-1){
        hospitals.splice(index,1);
        resspose.status(200).json({
            "message":"updated hospital successsfully",hospitals
        })
    }else{
        resspose.status(404).json({
        "massage":"hospitails not found"
        })
    }  
})
module.exports=router;