const axios = require("axios");

const getProfileData = async () => {
    const profileURL = "https://start-7.com/challenge/quiz/profile.json";

    try {
        const profileRequest = await axios.get(profileURL); // try to get the data from the URL
        const profileData = await profileRequest.data;

        return profileData;
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
};

module.exports = { getProfileData };
