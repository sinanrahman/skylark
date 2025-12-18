const express = require('express')
const router = express.Router()
const { CreateIssue, UpdateIssueStatus, GetAllIssues } = require('../controllers/issue')

router
    .route('/add-issue')
    .post(CreateIssue)
router
    .route('/get-all-issues')
    .get(GetAllIssues)
router
    .route('/issues/:id/status')
    .patch(UpdateIssueStatus)


module.exports = router