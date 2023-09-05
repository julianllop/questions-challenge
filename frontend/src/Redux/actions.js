import axios from "axios";
import {
    GET_PROFILE,
    GET_CATEGORIES,
    QUESTION_ID,
    CLEAR_STATE,
} from "./actionTypes";

export const getProfile = () => {
    return async (dispatch) => {
        try {
            const profileData = await axios.get("/profile");
            const profile = profileData.data;
            dispatch({
                type: GET_PROFILE,
                payload: profile,
            });
        } catch (error) {
            console.log(
                "Something went wrong bringing the profile's data: ",
                error
            );
        }
    };
};

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const categoryData = await axios.get("/category");
            const categories = categoryData.data;
            dispatch({
                type: GET_CATEGORIES,
                payload: categories,
            });
        } catch (error) {
            console.log(
                "Something went wrong bringing the categories's data: ",
                error
            );
        }
    };
};

export const getQuestions = (id) => {
    return async (dispatch) => {
        try {
            const questionID = await axios.get(`/question/${id}`);
            const questions = questionID.data;
            dispatch({
                type: QUESTION_ID,
                payload: questions,
            });
        } catch (error) {
            console.log(
                "Something went wrong bringing the questions's data: ",
                error
            );
        }
    };
};

export const clearState = () => {
    return { type: CLEAR_STATE };
};
