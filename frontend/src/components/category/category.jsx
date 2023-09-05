import React from "react";
import style from "./category.module.css";

const Category = ({ icon, title, questions, id }) => {
    return (
        <div className={style.category}>
            <div className={style.imgCont}>
                <img src={icon} alt={title} />
                <div className={style.blur}></div>
            </div>
            <div className={style.titleAndQ}>
                <h1>{title}</h1>
                <h3>{questions} questions</h3>
            </div>
        </div>
    );
};

export default Category;
