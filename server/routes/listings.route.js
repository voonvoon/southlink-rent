const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listings.controller');
const { addListingValidator } = require('../middleware/validation');
const formidableMiddleware = require('express-formidable');

const auth = require('../middleware/auth');  //only admin create listing

router.post('/',auth('createAny','listings'),addListingValidator, listingController.createListing)

router.route('/listing/:id')
.get(auth('readAny','listings'), listingController.getListingById)
.patch(auth('updateAny','listings'),listingController.updateListingById)
.delete(auth('deleteAny','listings'),listingController.deleteListingById)


// this for those without sign in still can view listing
router.route('/users/listing/:id')
.get(listingController.getUserListingById)

router.route('/all')
.get(listingController.getAllListings)
.post(listingController.getMoreListings);  // reason use post cuz get req from body not from query

router.post('/admin/paginate', auth('readAny','listings'),listingController.adminPaginate)

//UPLOADING IMGAGES
router.post('/upload', auth('createAny','listings'),formidableMiddleware(),listingController.picUpload)

module.exports = router;