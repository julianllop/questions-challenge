import React from "react";
import Category from "../category/category";
import style from "./categoryContainer.module.css";
import { Link } from "react-router-dom";

const CategoryContainer = ({ categories }) => {
    return (
        <div className={style.categoryContainer}>
            <div className={style.titleAndCategories}>
                <h1 className={style.title}>Let's play</h1>
                <section className={style.categories}>
                    {categories?.map((category) => (
                        <div key={category.id}>
                            <Link
                                className={style.link}
                                to={`/question/${category.id}`}
                            >
                                <Category
                                    title={category.title}
                                    questions={category.questions}
                                    icon={category.icon}
                                    id={category.id}
                                />
                            </Link>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default CategoryContainer;
