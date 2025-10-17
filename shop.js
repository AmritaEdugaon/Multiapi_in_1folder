const express=require("express");
const router=express.Router();

let productList=[
    {"id":1,"productName":"safola oats","quantity":4,"price":199},
    {"id":2,"productName":"fortune oil","quantity":10,"price":199},
    {"id":3,"productName":"daliya","quantity":5,"price":200},
    {"id":4,"productName":"sugar","quantity":1,"price":40},

]

router.get("/",(request,ressponse)=>{
    ressponse.status(200).json(
        productList
    )
});

router.post("/",(request,ressponse)=>{
const {productName,quantity,price}=request.boby;
    let product={
        id:productList+1,
        productName:productName,
        quantity:quantity,
        price:price
    }
    productList.push(product);
    ressponse.status(201).json({
        masage:"add doctor succesfully",
        doctor
    });

});
    
router.put("/:id",(request,ress)=>{
const {productName,quantity,price}=request.boby;
const id=parseInt(request.params.id);
   let product={
        id:id,
        productName:productName,
        quantity:quantity,
        price:price
    }
    const index=productList.findIndex((e)=>e.id===id);
    if(index!==-1){
        productList[index]=product;
        ressponse.status(200).json({
        masage:"updated product succesfully",product
        });
    }
    else{
        ressponse.status(404).json({message:"product not found"});
    }

});
router.delete("/:id",(request,ressponse)=>{
const id=parseInt(request.params.id);

    const index=productList.findIndex((e)=>e.id===id);
    if(index!==-1){
        productList.splice(index,1);
        ressponse.status(200).json({
        masage:"updated product succesfully",productList
        });
    }
    else{
        ressponse.status(404).json({message:"product not found"});
    }


});
module.exports=router;;