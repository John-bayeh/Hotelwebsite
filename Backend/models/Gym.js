import mongoose from "mongoose";

const gymSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        TrainingDate: { type: String, required: true },
        PreferredTime: { type: String, required: true },
        TrainingType: { type: String, required: true },
        TrainingPreference: { type: String, required: true },
        contactNumber: { type: String, required: true },
        specialRequest: { type: String,required:true },
    },
    { timestamps: true }
);

const Gym = mongoose.model("Gym", gymSchema); // Note: model name usually capitalized
export default Gym;
