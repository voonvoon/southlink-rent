const express = require('express');
//express give us this router
const router = express.Router();

// routes
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const listingsRoute = require('./listings.route');

const routesIndex = [
    {
        path: '/auth',
        route:authRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/listings',
        route: listingsRoute
    }

]

routesIndex.forEach((route)=>{
    router.use(route.path, route.route)
})



module.exports = router;