import mongoose from 'mongoose';

const ConfirmbSchema = new mongoose.Schema({
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    paymentAmount: {
        type: Number,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
    },
    userPhone: {
        type: String,
    },
    roomNo: {
        type: String,
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
    },
    paymentMethod: {
        type: String,
    }
}, { timestamps: true }
);


export default mongoose.model("confirmb", ConfirmbSchema)

// const ConfirmbSchema= new mongoose.Schema({
//     bid:{
//         type:String,
//     },
//     sdate:{
//         type:Date,
//     },
//     edate:{
//         type:Date,
//     },
//     un:{
//         type:String,
//     },
//     ue:{
//         type:String,
//     },
//     rn:{
//         type:String,
//     },
//     hn:{
//         type:String,
//     }
// });
