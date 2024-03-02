import { Schema,model } from "mongoose";

const userSchema : Schema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    sex:{
        type:String,
        enums:["male","female","prefer to not say","others"]
    },
    bio:{
        type:String,
    },
    avatar:{
        type:String,
        default:'',
    },
    releationShipStatus:{
        type:String,
        enum:["single","commited","married","divorced","ready to mingle","not interested"]
    },
    currentCity:{
        type:String,
    },
    birthday:{
        date:{
            type:String,
        },
        month:{
            type:String,
        },
        year:{
            type:String,
        },
    },
    password:{
        type:String,
        required:true,
    },
},
{timestamps:true}
)

export default model("user",userSchema)