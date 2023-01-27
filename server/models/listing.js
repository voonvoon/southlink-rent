const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
require('dotenv').config();

const listingSchema = mongoose.Schema({
    propName: {
        type:String,
        required: [true, 'please tell us your property name.']
    },

    typeOfProp:{
        type:String,
        enum:['Condo','Landed', 'Apartment'],
        default: 'Condo',
    },
    
    size:{
        type:Number,
        required: [true, 'you need to write the size of property'],
        min:350,
        max:5000
    },
    furnishing: {
        type:String,
        required:true,
        enum:['none-furnished','partially-furnished', 'fully-furnished'],
        default: 'none-furnished',
        index:true
    },
    description: {
        type:String,
        required: [true, 'please write a description!']
    },
    phoneNumber: {
        type:String,
        required: [true, 'please provide phone number!']
    },
    floor: {
        type: String,
        required: [true, 'please tell us which floor.']
    },
    unitNumber: {
        type: String,
    },
    rental: {
        type:Number,
        required: [true, 'please tell us how much you want to rent..']
    },
    numberBedRooms: {
        type:Number,
        required: [true, 'please tell us how many bed rooms.']
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type:String,
        required:true,
        enum:['pending','approved'],
        default:'pending',
        index:true
    },
    images:{
        type:Array,
        default:[]
    }

});

listingSchema.plugin(aggregatePaginate);  // link it like this

const Listing = mongoose.model('Listing', listingSchema);

module.exports = { Listing };