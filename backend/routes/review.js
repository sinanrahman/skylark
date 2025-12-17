// const express = require('express')
// const router = express.Router()
// const { AddCarReview} = require('../controllers/review')

// router
//     .route('/addcarreview')
//     .post(AddCarReview)



// module.exports = router


// router
//     .route('/getcarreview')
//     .get(GetCarMaintenance)
const express = require('express');
const {
    AddCarReview,
    GetCarReviews,
    GetCarReviewSummary,
} = require('../controllers/review');

const router = express.Router();

router.post('/addcarreview', AddCarReview);
router.get('/reviews/:carid', GetCarReviews);
router.get('/reviews-summary/:carid', GetCarReviewSummary);
// router.delete('/review/:id', DeleteCarReview);
// router.get('/user-reviews/:userid', GetUserReviews);

module.exports = router;
