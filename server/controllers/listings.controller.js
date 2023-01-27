const httpStatus = require('http-status');
const { listingsService } = require('../services');

const listingsController = {
    async createListing(req,res,next) {
        try{
            const listing = await listingsService.addListing(req.body);
            res.json(listing);

        } catch(error){
            next(error)
        }
    },

    async getListingById(req,res,next) {
        try{
            const _id = req.params.id;
            const listing = await listingsService.getListingByIdService(_id, req.user);
            res.json(listing)
        } catch(error){
            next(error)
        }
    },

    async getUserListingById(req,res,next) {
        try{
            const _id = req.params.id;
            const listing = await listingsService.getUserListingByIdService(_id);
            res.json(listing)
        } catch(error){
            next(error)
        }
    },

   async updateListingById(req, res, next) {
        try{
            const _id = req.params.id;
            const listing = await listingsService.updateListingById(_id,req.body);
            res.json(listing);
        } catch(error){
            next(error)
        }
   },

   async deleteListingById(req, res, next) {
    try{
        const _id = req.params.id;
        await listingsService.deleteListingById(_id);
        res.status(httpStatus.OK).json({action:'deleted'});
       
    } catch(error){
        next(error)
    }
},

    async getAllListings(req, res, next) {
        try{
            const listings = await listingsService.allListings(req);
            res.json(listings)
        } catch(error){
            next(error)
        }
    },

    async getMoreListings(req, res, next) {
        try{
            const listings = await listingsService.moreListings(req);
            res.json(listings)
        } catch(error){
            next(error)
        }
    },

    async adminPaginate(req, res, next) {
        try{
            const listings = await listingsService.paginateAdminListings(req);
            res.json(listings);

        } catch(error){
            next(error)
        }
    },
    
    async picUpload(req, res, next){
        try{
            const pic = await listingsService.picUpload(req);
            res.json(pic);
        } catch(error){
            next(error)
        }
    }

}


module.exports = listingsController;