const express = require('express');
const { showHomePage, showBlogPage, showShopPage, showShopSinglePage, showBlazersPage } = require('../controller/pageController');


// init routes

const router = express.Router();


// make route

router.get( '/' , showHomePage );
router.get( '/blog/:id' , showBlogPage );
router.get( '/shop' , showShopPage );
router.get( '/shop/:id' , showShopSinglePage );




// export route

module.exports = router;