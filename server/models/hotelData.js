import mongoose from 'mongoose';
     //hotelShema
const hotelSchema = mongoose.Schema({
    title: String, // name
    message: String, //  detaile, hotel additional info and description
    name: String, 
    address : String,  //
    price : String,     //   
    stars : String,   //
    creator: String,
    tags: [String],     // Hotel city
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var HotelData = mongoose.model('HotelData', hotelSchema);

export default HotelData; // PostMessage