const { Listing } = require('../models/listing'); 
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dvsb4asug',
    api_key:'596281963432999',
    api_secret:`${process.env.CN_API_SECRET}`
})

const addListing = async(body) => {
    try{
        const listing = new Listing({
            ...body,
            size:parseInt(body.size),    // to avoid save as string even in modal specified as number.
            rental:parseInt(body.rental),
            numberBedRooms: parseInt(body.numberBedRooms)
        })
        await listing.save();
        return listing;

    } catch(error) {
        throw error
    }
}

const getListingByIdService = async(_id,user) => {
    try{
        const listing = await Listing.findById(_id);
        if(!listing) throw new ApiError(httpStatus.NOT_FOUND, 'Listing not found.');
        if(user.role === 'user' && listing.status === 'pending'){
            throw new ApiError(httpStatus.NOT_FOUND, "Sorry you are not allowed.")
        }
        return listing;

    } catch(error){
        throw error
    }
}

const getUserListingByIdService = async(_id) => {
    try{
        const listing = await Listing.findById(_id);
        if(!listing) throw new ApiError(httpStatus.NOT_FOUND, 'Listing not found.');
        if(listing.status === 'pending'){
            throw new ApiError(httpStatus.NOT_FOUND, "Sorry you are not allowed.")
        }
        return listing;

    } catch(error){
        throw error
    }
}

const updateListingById = async(_id, body) => {
    try{
       const listing = await Listing.findOneAndUpdate(
            {_id}, // _id=_id
            { "$set": body }, // actually need to add a validation in real app.
            { new: true }
       );
       if(!listing) throw new ApiError(httpStatus.NOT_FOUND, 'Listing not found.');
        return listing;
    } catch(error){
        throw error
    }
}

const deleteListingById = async(_id) => {
    try{
      const listing = await Listing.findByIdAndRemove(_id);
      if(!listing) throw new ApiError(httpStatus.NOT_FOUND, 'Listing not found.');
      return listing;

    } catch(error){
        throw error
    }
}

const allListings = async(req) => {
    const sortby = req.query.sortby || "_id";
    const order = req.query.order || "desc";
    const limit = req.query.limit || 2;

    try{
       const listings = await Listing
       .find({status: 'approved'}) // modal status must hv index:true in order to do this.
       .sort([
            [sortby,order]
       ])
       .limit(parseInt(limit)); // parseInt mk sure it is a number
       return listings;

    } catch(error){
        throw error
    }
}

const moreListings = async(req) => {
    const sortby = req.body.sortby || "_id";
    const order = req.body.order || "desc";
    const limit = req.body.limit || 3;
    const skip = req.body.skip || 0;

    try{
        const listings = await Listing
       .find({status: 'approved'}) // modal status must hv index:true in order to do this.
       .sort([[sortby,order]])
       .skip(skip)
       .limit(parseInt(limit)); // parseInt mk sure it is a number
       return listings;

    } catch(error){
        throw error
    }
}

const paginateAdminListings = async(req) => {
    try{
        let aggQuery = Listing.aggregate();    // aggregate is mongoose func from mongodb
        if(req.body.keywords && req.body.keywords != ''){
            const re = new RegExp(`${req.body.keywords}`,'gi')
            aggQuery = Listing.aggregate([
                { $match: { propName: {  $regex:re}}}
            ])
        } else {
            aggQuery = Listing.aggregate();  // if no keyword then do as normal
        }

        const limit = req.body.limit ? req.body.limit : 5;
        const options = {
            page: req.body.page,
            limit,  // limit : limit
            sort:{ _id: 'desc'}
        }
        const listings = await Listing.aggregatePaginate(aggQuery, options);
        return listings;

    } catch(error){
        throw error
    }
}

const picUpload = async(req) => {
    try{
        const watermarkText = 'Southlink-rent.com';

    // Add a text overlay to the uploaded image
        const overlay = `text:arial_120_bold:${encodeURIComponent(watermarkText)},co_white`;

        const upload = await cloudinary.uploader.upload(req.files.file.path, {
            public_id:`${Date.now()}`,
            folder:'rentbase_upload',
          
            overlay,
            opacity: 50,
            gravity: 'south_east',
            y: 800,
            x: 300,
            crop: 'scale',
            width: 1000,
            effect: 'brightness:20'
        });

        //console.log(upload)

        return {
            public_id: upload.public_id,
            url: upload.url
        }
    } catch(error) {
        throw error
    }
}

module.exports = {
    addListing,
    getListingByIdService,
    getUserListingByIdService,
    updateListingById,
    deleteListingById,
    allListings,
    moreListings,
    paginateAdminListings,
    picUpload
}