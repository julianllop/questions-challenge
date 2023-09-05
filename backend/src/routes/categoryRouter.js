const { Router } = require("express");
const { getCategory } = require("../controllers/categoryController");

const rCategory = Router();

rCategory.get("/", getCategory);

module.exports = rCategory;
