import mongoose from "mongoose";
const birthdaySchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        birthdayAge:{type:String,required:true},
        preferredDate:{type:String,required:true},
        preferredTime:{type:String,required:true},
        cakeType:{type:String,required:true},
        contactNumber:{type:String,required:true},

    },
    {timestamps:true}
);
const Birthday=mongoose.model("Birthday",birthdaySchema)
export default Birthday;