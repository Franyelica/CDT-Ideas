const express = require('express')
const router = express.Router();


const { getPatents,
    getAdminPatents,
    newPatent,
    getSinglePatent,
    updatePatent,
    deletePatent } = require('../controllers/patentController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/patents').get(getPatents);
router.route('/admin/patents').get(getAdminPatents);

router.route('/patent/:id').get(getSinglePatent);

router.route('/admin/patent/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updatePatent)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deletePatent);

router.route('/admin/patent/new').post(isAuthenticatedUser, authorizeRoles('admin'), newPatent);


module.exports = router;