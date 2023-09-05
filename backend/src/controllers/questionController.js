const axios = require("axios");

const getQuestions = async (req, res) => {
    const { id } = req.params;
    const questionURL = `https://start-7.com/challenge/quiz/questions/${id}.json`;

    try {
        const response = await axios.get(questionURL);
        const categoryQuestions = response.data;

        if (id && categoryQuestions.length > 0) {
            res.status(200).send(categoryQuestions);
        } else {
            res.status(404).send("Questions not found");
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { getQuestions };
