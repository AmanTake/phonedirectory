const contact = require('../Models/ContactModels')
const {ObjectId} = require('mongodb')


  async function AddContact (req,res){
    try{ const {name,email,number,userId,address,group} = req.body;
    console.log(req.body);
        const result = await contact.create({
            name:name,
            email:email,
            number:number,
            userId:userId,
            address:address,
            group:group
        });
        res.status(201).send({msg:"Success",error:{},data:result});

    } catch (error){
        console.log(error); 
        res.status(401).send({msg:"Faild",error:error,data:{} });    
    }
   }

   const GetContact = async (req, res) => {
    try {
        const result = await contact.find({ userId: new ObjectId(req.params.id) });
        if(result){
        // console.log(result);
        res.status(200).send({ msg: "Success", error: {}, data: result });
      }
    } catch (error) {
      res
        .status(400)
        .send({ msg: "Failed", error: "Enter vailed user Id", data: {} });
    }
  };
      
     const UpdateGetContact = async (req,res) => {
      try {
        const result = await contact.findOne({ _id: new ObjectId(req.params.id) });
        console.log(result);
        if(result){
          console.log("res");
           res.status(200).send({msg: "success",error:{}, data: result});
        }
      } catch (error) {
        console.log(error);
        res.status(400).send({msg:"Failed" , error:"Enter valid user Id", data:{}});
      }
     }

     const Submit = async (req, res) => {
      try {
        const contactid = new ObjectId(req.params.id);
        const value = req.body;
        const result = await contact.updateOne(
          { _id: contactid },
          { $set: value }
        );
        res.status(200).send({ msg: "Success", error: {}, data: result });
      } catch (error) {
        res.status(400).send({ msg: "Failed", error: error, data: {} });
      }
    };


  const DeleteContact = async (req,res) => {
    try{
         const result = await contact.deleteOne({_id: new ObjectId(req.params.id) });
         if (result){
          console.log(result);
          res.status(200).send({msg:"Success", error:{}, data: result});
         } else {
           res.status(400).send ({msg:"Faild"})
         }
    }catch (error) {
      console.log(error);
      res.status(400).send({ msg:"Failed", error: "Something Went Wrong ", data: {}});
    }
  }


  
   module.exports = {
               AddContact,GetContact,DeleteContact,UpdateGetContact,Submit
   }