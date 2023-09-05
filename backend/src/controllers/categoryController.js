const { getCompleteCategory } = require("./functions/categoryFunctions");

// GET categories

const getCategory = async (req, res) => {
    try {
        const categories = await getCompleteCategory();
        res.status(200).send(categories);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { getCategory };
