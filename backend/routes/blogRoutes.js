const express = require("express");
const { createBlog, getBlogs, getBlogById } = require("../controller/blogController");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);

module.exports = router;
