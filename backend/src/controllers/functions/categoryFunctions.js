const axios = require("axios");

const getCategoryData = async () => {
    const categoryURL = "https://start-7.com/challenge/quiz/categories.json";

    try {
        const categoryRequest = await axios.get(categoryURL); // try to get the data from the URL
        const categoryData = await categoryRequest.data;

        return categoryData;
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
};

const getCompleteCategory = async () => {
    const imgURL = "https://start-7.com/challenge/quiz";

    const categoryData = await getCategoryData();

    for (const category of categoryData) {
        const iconUrl = imgURL + category.icon;

        try {
            const img = await axios.get(iconUrl, {
                responseType: "arraybuffer",
            });
            const base64Icon = Buffer.from(img.data, "binary").toString(
                "base64"
            );
            category.icon = `data:image/png;base64,${base64Icon}`;
        } catch (error) {
            console.error(
                `Error fetching icon for ${category.title}: ${error.message}`
            );
        }
    }

    return categoryData;
};

module.exports = { getCategoryData, getCompleteCategory };
