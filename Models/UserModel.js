const mongoose = require('mongoose');
const {createHmac} = require('crypto')

const salt = "fun_code"

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,  
    }   
},
{
    timestamps:true
});

userSchema.pre("save", function (next){
    let user = this;
     if(!user.isModified( 'password'))
      return;
      let newHashed = createHmac('sha256',salt).update(user.password)
      .digest('hex');
      this.password = newHashed;
      console.log(this.password);
      next();
  });

  userSchema.static("matchPassword", async function (email, password) {
    const result = await user.findOne({ email });
        let newHashed = createHmac("sha256", salt).update(password).digest("hex");
  
    if (newHashed === result.password) {
      const { _id, name, email } = result;
      return { _id, name, email }
    } else {
      return false;
     }
  });
 const user = mongoose.model('user',userSchema);

 module.exports = user;
