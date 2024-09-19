const express = require('express')
const {AddContact,GetContact,DeleteContact,UpdateGetContact,Submit} = require('../Controllers/ContactController')


const router = express.Router();

router.route('/AddContact') 
.post(AddContact);
router.route('/GetContact/:id') 
.get(GetContact).delete(DeleteContact);
router.route('/UpdateGetContact/:id')
.get(UpdateGetContact)
router.route('/Submit/:id')
.patch(Submit)


module.exports = router;