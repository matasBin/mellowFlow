import React from 'react';
import logo from '../images/Logo.svg'
import backArrow from '../images/backArrow.svg'
import {useAppStore} from "../store/allStates";
import {useNavigate} from "react-router-dom";
import ProgressBar from "./ProgressBar";

const TopBar = () => {

    const {gender, setGender, quizStart, setQuizStart, currentQuestionIndex, answers, prevQuestion} = useAppStore()

    const navigate = useNavigate()
    const assignedGender = gender


    const handleBackArrow = () => {
        if(currentQuestionIndex === 0) {
            setGender("")
            navigate("/")
        } else {
            prevQuestion()
        }

    }

    return (
        <div className={`TopBar w-[335px] h-[${quizStart ? "73px" : "60px"}] pt-6`}>
            {assignedGender ?
                <>
                    <div className={" flex justify-between items-start"}>
                        <img onClick={handleBackArrow} src={backArrow} alt="Back Arrow"/>
                        <img src={logo} alt="Mellow Flow Logo" />
                        <p className={"text-[16px] leading-[107%] font-poppins"}><span className={"font-bold"}>{currentQuestionIndex + 1}</span>/6</p>

                    </div>
                   <ProgressBar></ProgressBar>
                </>

                :
                <div className={"flex justify-center"}>
                    <img src={logo} alt="Mellow Flow Logo" />
                </div>

            }

        </div>
    );
};

export default TopBar;