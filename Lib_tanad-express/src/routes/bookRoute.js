const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../middleware/auth');


router.get("/",bookController.getBooks);
router.get("/:id",bookController.getBookById);
router.get("/name/:name",bookController.getBookByName);


router.post("/add",bookController.addBook);

router.put("/:id" ,bookController.updateBook);

router.delete("/:id",bookController.deleteBook);


module.exports= router;