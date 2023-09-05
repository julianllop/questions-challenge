import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getQuestions } from "../../Redux/actions";
import style from "./question.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ticked from "../../img/Path 2.png";
import crossed from "../../img/Group 3.png";

const Question = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const questions = useSelector((state) => state.questions);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [questionsCompleted, setQuestionsCompleted] = useState(1);

    const [optionKeyBeingPressed, setOptionKeyBeingPressed] = useState(null);
    const [timer, setTimer] = useState(30);
    const [isTimeUp, setIsTimeUp] = useState(false);

    useEffect(() => {
        dispatch(getQuestions(id));
        dispatch(clearState(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (questions.length > 0) {
            setCurrentQuestion(questions[0]);
            setSelectedOption(null);
            setIsAnswerCorrect(false);
            setQuestionsCompleted(1);
        }
    }, [questions]);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                clearInterval(timerInterval);
                setIsTimeUp(true);
                alert("Time's up ! Reseting questions and timer");
                setCurrentQuestion(questions[0]);
                setCurrentQuestionIndex(0);
                setSelectedOption(null);
                setIsAnswerCorrect(false);
                setQuestionsCompleted(1);
                setTimer(30);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [timer]);

    const handleOptionChange = (optionKey) => {
        setSelectedOption(optionKey);
        setIsAnswerCorrect(optionKey === "option1");
    };

    const handleSelected = (optionKey) => {
        if (optionKey === selectedOption) {
            if (optionKey === "option1") {
                return style.correct;
            } else {
                return style.wrong;
            }
        } else if (optionKey === optionKeyBeingPressed) {
            return style.active;
        }
        return style.option;
    };

    const handleOptionMouseDown = (optionKey) => {
        setOptionKeyBeingPressed(optionKey);
    };

    const handleOptionMouseUp = () => {
        setOptionKeyBeingPressed(null);
    };

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    const optionElements = Object.keys(currentQuestion).map((key, index) => {
        if (key.startsWith("option")) {
            const inputValue = key === "option1" ? "correct" : "wrong";
            return (
                <div key={index} className={handleSelected(key)}>
                    <label className={style.label}>
                        <div>{currentQuestion[key]}</div>
                        <div className={style.checkbox}>
                            <input
                                type="checkbox"
                                checked={selectedOption === key}
                                onChange={() => handleOptionChange(key)}
                                onMouseDown={() => handleOptionMouseDown(key)}
                                onMouseUp={handleOptionMouseUp}
                                value={inputValue}
                            />
                            {inputValue === "correct" ? (
                                <div className={style.checked}>
                                    <img src={ticked} alt="tick" />
                                </div>
                            ) : (
                                <div className={style.checked}>
                                    <img src={crossed} alt="cross" />
                                </div>
                            )}
                        </div>
                    </label>
                </div>
            );
        }
        return null;
    });

    const nextQuestion = () => {
        if (isAnswerCorrect) {
            const nextIndex = currentQuestionIndex + 1;

            if (nextIndex < questions.length) {
                setCurrentQuestion(questions[nextIndex]);
                setCurrentQuestionIndex(nextIndex);
                setSelectedOption(null);
                setIsAnswerCorrect(false);
                setQuestionsCompleted(questionsCompleted + 1);
                setTimer(30); // Reiniciar el temporizador
            } else {
                alert("Congratulations! You answered all the questions right!");
                navigate("/");
            }
        } else {
            alert("Select the correct option before continuing.");
        }
    };

    const progress = (questionsCompleted / questions.length) * 100;

    const progressBarStyle = {
        width: `${progress}%`,
    };

    const handleXButton = () => {
        navigate("/");
    };

    const percentage = Math.round((timer / 30) * 100);

    return (
        <div className={style.component}>
            <div className={style.xButtonAndProgressBar}>
                <button className={style.xButton} onClick={handleXButton}>
                    X
                </button>
                <div>
                    <div className={style.progressBarCont}>
                        <div className={style.progressBar}>
                            <div
                                className={style.completed}
                                style={progressBarStyle}
                            ></div>
                        </div>
                        <h1 className={style.questionsLeft}>
                            {currentQuestionIndex + 1} / {questions.length}
                        </h1>
                    </div>
                </div>
            </div>

            <div className={style.questionContainer}>
                <div className={style.timerContainer}>
                    <div className={style.timer}>
                        <CircularProgressbar
                            value={percentage}
                            strokeWidth={8}
                            text={`${timer}`}
                            styles={buildStyles({
                                width: "327px",
                                height: "52px",
                                strokeLinecap: "round",
                                textSize: "26px",
                                pathTransitionDuration: 0.5,
                                pathColor: `#3eb8d4`,
                                textColor: "#737373",
                                trailColor: "#efefef",
                                backgroundColor: "#fff",
                            })}
                        />
                    </div>
                </div>
                <h1 className={style.question}>{currentQuestion.question}</h1>
            </div>

            <div className={style.optionContainer}>{optionElements}</div>

            <button className={style.next} onClick={nextQuestion}>
                Next
            </button>
        </div>
    );
};

export default Question;
