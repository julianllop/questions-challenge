const { Router } = require("express");
const { getProfile } = require("../controllers/profileController");

const rProfile = Router();

rProfile.get("/", getProfile);

module.exports = rProfile;
