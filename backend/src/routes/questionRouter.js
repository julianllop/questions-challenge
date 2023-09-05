const { Router } = require("express");
const { getQuestions } = require("../controllers/questionController");

const rQuestion = Router();

rQuestion.get("/:id", getQuestions);

module.exports = rQuestion;
