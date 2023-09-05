import { CLEAR_STATE, GET_CATEGORIES, GET_PROFILE, QUESTION_ID } from "./actionTypes";

const initialState = {
    profile: {},
    categories: [],
    questions: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };

        case QUESTION_ID:
            return {
                ...state,
                questions: action.payload,
            };

        case CLEAR_STATE:
            return {
                ...state,
                questions: [],
            };
        default:
            return { ...state };
    }
};

export default rootReducer;
