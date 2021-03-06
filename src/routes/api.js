/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../controller/apiHome');
const userAuth = require('../controller/userAuth');
const userModification = require('../controller/userModification');

const user = require('../controller/user');

const demands = require('../controller/demand')
const demandModification = require('../controller/demandModification');
// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

// Auth Routes //
// Login Route
router.get('/loginUser', userAuth.getLoginUser);
router.post('/loginUser', userAuth.loginUser);

// Register User Route
router.post('/registerUser', userAuth.registerUser);

router.get('/demands', demands.getAllDemands);
router.get('/myDemands/:api_token', demands.getMyDemands);
router.get('/demands/:demandId', demands.getDemand);
router.get('/demands/:demandId/:expanded', demands.getDemand);

router.get('/getDevCount', user.getDevCount);
router.get('/getClientCount', user.getClientCount);
router.get('/getSiteStats', apiHome.getSiteStats);

router.get('/user/api_token=:api_token', user.getUserByApiToken);
router.get('/user/userId=:userId', user.getUserById);

router.get('/users/topClients',user.getTopClients);
router.get('/users/topDevs', user.getTopDevs);

router.post('/searchDemands', demands.searchDemands);
router.post('/searchUsers', user.searchUsers);

router.get('/getVerifiedDevelopers', user.getVerifiedDevelopers);
router.get('/getVerifiedClients', user.getVerifiedClients);

router.use(userAuth.checkAuth); // Routes that require and api_token after this

// Post Modification Routes //
// Pass "api_token", "title", "content", "date"
router.post('/createDemand', user.isBlacklist, user.isClient, demandModification.createDemand);
router.put('/editDemand/:demandId', user.isClient,demandModification.editDemand);

// Pass "api_token", "demandId", "bidAmount", "deadline"
router.post('/bidOnDemand', user.isDeveloper, user.isBlacklist, demandModification.bidOnDemand);

// Pass "api_token", "devId", "demandId", and "reason" only if chosen bidder is not the lowest
router.post('/approveBidder', user.isClient, user.isBlacklist, demandModification.approveBidder);

// Pass "api_token", "demandId", and "finishedProduct"
router.post('/submitProduct', user.isDeveloper, user.isBlacklist, demandModification.submitProduct);

// Pass "api_token" and "amount"
router.post('/addFunds', user.isClient, user.isBlacklist, userModification.addFunds);

router.post('/rate', user.isBlacklist, userModification.giveRating);

router.post('/getAlerts',user.getAlerts);
router.post('/protestWarning',userModification.protest);
router.post('/updateUser', userAuth.updateUser);

router.use(apiHome.invalidPath);
// Return Router
module.exports = router;
