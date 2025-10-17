const express=require("express");
const router=express.Router();

let collageList=[
    {"id":1,"collageName":"HR collage","address":"Amnour","code":"78548"},
    {"id":2,"collageName":"UMV Bhawalpur","address":"Kolhuaa","code":"98102"},
    {"id":3,"collageName":"HS Anmour","address":"Amnour","code":"91078"},
    {"id":4,"collageName":"Shri Dhar Baba collage","address":"Beldi","code":"78458"},
];

router.get("/",(request,ressponse)=>{
    ressponse.status(200).json(collageList);
})

router.post("/",(request,ressponse)=>{
    const{collageName,address,code}=request.body;
    const newCollage={
        id:collageList.length+1,
        name:collageName,
        address:address,
        code:code
    }
    collageList.push(newCollage);
    ressponse.status(200).json({
        "message":"add collage successfuly",collageList
    })
});

router.put("/:id",(request,ressponse)=>{
  const{collageName,address,code}=request.body;
  let id=request.params.id;
    const newCollage={
        id:id,
        name:collageName,
        address:address,
        code:code
    } 
    const index=collageList.findIndex((e)=>e.id===id);
    if(index!== -1){
        collageList[index]=newCollage;
        ressponse.status(200).json({"message":"collage updated successfully",collageList});
    }
    else{
        ressponse.status(404).json({message:"collage not found"});
    }

})

router.delete("/:id",(request,ressponse)=>{
    let id=parseInt(request.params.id);

    const index=collageList.findIndex((e)=>e.id===id);
    if(index!== -1){
        collageList.splice(index ,1);
        ressponse.status(200).json({"massage":"collage delete successfully",collageList});
    }
    else{
        ressponse.status(404).json({massage:"collage not found"});
    }
})

module.exports=router;