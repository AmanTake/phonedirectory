const express = require('express')
const {AddGroup,GetGroup,DeleteGroup,UptadeGroup} = require('../Controllers/GroupController')


const router = express.Router();

router.route('/AddGroup') 
.post(AddGroup);
router.route('/GetGroup/:id') 
.get(GetGroup).delete(DeleteGroup);
router.route('/UptadeGroup/:id')
.patch(UptadeGroup);

module.exports = router;