const groups = require('../Models/GroupModels')
const {ObjectId} = require ('mongodb')


async function AddGroup (req,res){
    try{ const {name,userId} = req.body;
        const result = await groups.create({
            name:name,
            userId:userId
        });
        res.status(201).send({msg:"Success",error:{},data:result});

    } catch (error){
        console.log(error);
        res.status(401).send({msg:"Faild",error:error,data:{} });    
    }
   }

   const GetGroup = async (req, res) => {
    try {
        const result = await groups.find({ userId: new ObjectId(req.params.id) });
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

  const DeleteGroup = async (req,res) => {
    try{
         const result = await groups.deleteOne({_id: new ObjectId(req.params.id) });
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

  const UptadeGroup = async (req, res) => {
    try {
      const groupid = new ObjectId(req.params.id);
      const value = req.body;
      const result = await groups.updateOne(
        { _id: groupid },
        { $set: value }
      );
      res.status(200).send({ msg: "Success", error: {}, data: result });
    } catch (error) {
      res.status(400).send({ msg: "Failed", error: error, data: {} });
    }
  };

  module.exports ={AddGroup,
    GetGroup,DeleteGroup,UptadeGroup
  }