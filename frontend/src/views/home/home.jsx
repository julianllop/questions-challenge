import React, { useEffect } from "react";
import Profile from "../../components/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getCategories } from "../../Redux/actions";
import CategoryContainer from "../../components/categoryContainer/categoryContainer";
import style from "./home.module.css"

const Home = () => {
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profile);
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getProfile());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className={style.homeContainer}>
            <Profile profile={profile} />
            <CategoryContainer categories={categories} />
        </div>
    );
};

export default Home;
