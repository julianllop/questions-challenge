const { getProfileData } = require("./functions/profileFunctions");

// GET profile

const getProfile = async (req, res) => {
    try {
        const profile = await getProfileData();
        res.status(200).send(profile);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { getProfile };
