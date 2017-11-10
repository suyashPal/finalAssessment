//creating the request and response api

var express=require('express');

var router=express.Router();

var userController=require('../controllers/userController');

//importing the productController
var productController=require('../controllers/productController');

//importing thr cartController
var cartController=require('../controllers/cartController');
var episodelistController=require('../controllers/episodelistController');
var episodelist1Controller=require('../controllers/episodelist1Controller');


router.route('/v1/user/create')
      .post(userController.postUserDetails);

//getting the user detail according to the entered enmail
router.route('/v1/getUser/:entered_email').get(userController.getUserDetail);

//updating the user collections
router.route('/v1/updateUser/:entered_email').put(userController.updateUser);


//updating the user address details
router.route('/v1/updateUserAddress/:entered_email').put(userController.updateUserAddress);


//updating the user shopping amount
router.route('/v1/userTotalShoppingAmount/:entered_email').put(userController.userTotalShoppingAmount);


//getting all user from the database
router.route('/v1/user/getAllUser').get(userController.getAllUser);

//posting the data in the product collections
router.route('/v1/product/upload').post(productController.postProductDetails);
router.route('/v1/episode/upload').post(episodelistController.postEpisodeDetails);
router.route('/v1/episode1/upload').post(episodelist1Controller.postEpisode1Details);
//getting all data from the product collections
router.route('/v1/getAllProduct').get(productController.getAllProductDetails);
router.route('/v1/getAllEpisode').get(episodelistController.getAllEpisodeDetails);
router.route('/v1/getAllEpisode1').get(episodelist1Controller.getAllEpisode1Details);

//posting the cart details into the database
router.route('/v1/cart/update').post(cartController.postCartDetails);

//get the all info of the user cart details
router.route('/v1/cart/getAllCartDetails').get(cartController.getAllCartInfo);

module.exports=router;
