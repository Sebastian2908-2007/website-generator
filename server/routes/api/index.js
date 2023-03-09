const router = require('express').Router();
const pageRoutes = require('./page-routes');

router.use('/pages',pageRoutes);

module.exports = router;