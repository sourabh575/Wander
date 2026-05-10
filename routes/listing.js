const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")
const listingcontroller = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })


router.route("/")
  .get(wrapAsync(listingcontroller.index))
  .post(isLoggedIn, 
     upload.single('listing[image]'),
     validateListing,
    wrapAsync(listingcontroller.createlisting));


  router.get("/new", isLoggedIn, listingcontroller.rendernewform);

  router.route("/:id")
  .get(wrapAsync(listingcontroller.show))
  .put(isLoggedIn, 
    isOwner, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingcontroller.updatelisting))
  .delete(isLoggedIn, isOwner, wrapAsync(listingcontroller.deletelisting));


    //edit route
      router.get("/:id/edit",
        isLoggedIn,
         //isOwner,
         wrapAsync(listingcontroller.edit));
      
    

      module.exports = router;