const { Router } = require("express");
const rProfile = require("./profileRouter");
const rCategory = require("./categoryRouter");
const rQuestion = require("./questionRouter")

const mainRouter = Router();

mainRouter.use("/profile", rProfile);
mainRouter.use("/category", rCategory);
mainRouter.use("/question", rQuestion);

module.exports = mainRouter;
