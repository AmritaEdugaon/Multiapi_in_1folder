const express=require("express");
const router=express.Router();

let doctorList=[
    {"id":1,"name":"dr professer Ren","age":45,"exportin":"TCM In Wesaton Medicine in china"},
    {"id":2,"name":"Lu Zhi","age":57,"exportin":"TCM In Wesaton Medicine in china"},
    {"id":3,"name":"Jia Jinmig","age":52,"exportin":"TCM In Wesaton Medicine in china"},
    {"id":4,"name":"Lin Hongsheng","age":50,"exportin":"TCM In Wesaton Medicine in china"},
]

router.get("/",(request,ressponse)=>{
    ressponse.status(200).json({
        doctorList
    })
});

router.post("/",(request,ressponse)=>{
const {name,age}=request.boby;
    doctor={
        id:doctorList+1,
        name:name,
        age:age,
        exportin:exportin
    }
    doctorList.push(doctor);
    ressponse.status(201).json({
        masage:"add doctor succesfully",
        doctor
    });

});
    
router.put("/:id",(request,ressponse)=>{
const {name,age}=request.boby;
const id=parseInt(request.params.id);
    doctor={
        id:id,
        name:name,
        age:age,
        exportin:exportin
    }
    const index=doctorList.findIndex((e)=>e.id===id);
    if(index!==-1){
        doctorList[index]=doctor;
        ressponse.status(200).json({
        masage:"updated doctor succesfully",doctor
        });
    }
    else{
        ressponse.status(404).json({message:"doctor not found"});
    }

});
router.delete("/:id",(request,ressponse)=>{
    const id=request.params.id;

    const index=doctorList.findIndex((e)=>e.id===id);
    if(index!==-1){
        doctorList.splice(index,1);
        ressponse.status(200).json({
        masage:"deleted doctor succesfully",doctorList
        });
    }
    else{
        ressponse.status(404).json({message:"doctor not found"});
    }

});
module.exports=router;