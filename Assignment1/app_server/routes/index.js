var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlBook = require('../controllers/booklists');
const ctrlAbout = require('../controllers/others');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/list', ctrlBook.bookList);
router.get('/display',ctrlBook.popularBook);
router.get('/about',ctrlAbout.about);
module.exports = router;
