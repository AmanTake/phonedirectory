const User = require('../Models/UserModel');
// const user = require('../Models/UserModel');

        async function Signup(req,res){
            console.log(req.body);
           try{ const {name,email,password,confirmpassword} = req.body;
            if(password===confirmpassword) {               
                const result = await User.create({
                    name:name,
                    email:email,
                    password:password,
                });
                res.status(201).send({msg:"Success",error:{},data:result});
            }else{
                    res.status(401).send("Wrong Confirm Password");
            }
        } catch (error){
            console.log(error);
            res.status(401).send({msg:"Faild",error:error,data:{} });    
        }
    };


    const Login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const data = await User.matchPassword(email,password);
            if (data) {
                res.status(200).send({ msg: "user login sucessfully", data: data })
            }
            else {
                res.status(400).send({ MSG: "Wrong Pasword " });
            }
        }
        catch (error) {
            console.log(error);
            res.status(401).send({msg:" Invalid User ",error:error,data:{} });    
        }
    }

module.exports = {
    Signup,Login
}