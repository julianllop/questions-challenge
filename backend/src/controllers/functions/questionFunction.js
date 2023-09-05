const axios = require("axios");

const getCategoryQuestions = async (id) => {
    const questionURL = `https://start-7.com/challenge/quiz/questions/${id}.json`;

    try {
        const categoryQuestions = await axios.get(questionURL);

        return categoryQuestions;
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
};

module.exports = { getCategoryQuestions };
