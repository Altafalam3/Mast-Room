import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userName: String,
    content: String,
    rating: Number,
});

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    locality: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    wifi: {
        type: Boolean,
        default: false,
    },
    tv: {
        type: Boolean,
        default: false,
    },
    security: {
        type: Boolean,
        default: false,
    },
    amenities: {
        type: [String],
    },
    cancellation: {
        type: Boolean,
        default: false,
    },
    breakfast: {
        type: Boolean,
        default: false,
    },
    payAtHotel: {
        type: Boolean,
        default: false,
    },
    originalPrice: {
        type: String,
    },
    price: {
        type: String,
    },
    reviews: {
        type: [reviewSchema],
        default: [],
      },
    rating: {
        type: String,
        default: "5/5"
    },
    rooms: {
        type: [String],
    }
},  { timestamps: true }
);



export default mongoose.model('Hotel', HotelSchema);

// const HotelSchema=new mongoose.Schema({
//     name:{
//         type: String,
//         required:true
//     },
//     type:{
//         type:String,
//         required:true
//     },
//     city:{
//         type:String,
//         required:true
//     },
//     address:{
//         type:String,
//         required:true
//     },
//     distance:{
//         type:String,
//         required:true
//     },
//     photos:{
//         type:[String],
//     },
//     title:{
//         type:String,
//         required:true
//     },
//     desc:{
//         type:String,
//         required:true
//     },
//     rating:{
//         type:Number,
//         min:0,
//         max:5
//     },
//     rooms:{
//         type:[String],
//     },
//     cheapestPrice:{
//         type:Number,
//         required:true
//     },
//     featured:{
//         type:Boolean,
//         default:false,
//     },
// });
