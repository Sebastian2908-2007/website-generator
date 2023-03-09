const router = require('express').Router();
const {
createPage
} = require('../../controllers/page-controller');

router.route('/')
.post(createPage);

module.exports = router;
