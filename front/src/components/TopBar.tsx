import React from 'react';
import logo from '../images/Logo.svg'
import backArrow from '../images/backArrow.svg'
import {useAppStore} from "../store/allStates";
import {useNavigate} from "react-router-dom";
import ProgressBar from "./ProgressBar";

const TopBar = () => {

    const {gender, setGender, quizStart, currentQuestionIndex, prevQuestion, quizEnd} = useAppStore()

    const navigate = useNavigate()
    const assignedGender = gender


    const handleBackArrow = () => {
        if (currentQuestionIndex === 0) {
            setGender("")
            navigate("/")
        } else {
            prevQuestion()
        }

    }

    let stage = ""


    /*quizstart = 73px, quizEnd = 76px, else = 60px*/
    return (
        <div className={`TopBar w-full ${quizStart ? "h-[73px]" : quizEnd ? "h-[76px] bg-[#FFC633] p-5" : "h-[60px]"} pt-6`}>

            {
                !quizEnd ? (
                    <>
                        <div className={" flex justify-between items-start"}>
                            <img
                                className={`${assignedGender ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-in-out`}
                                onClick={handleBackArrow} src={backArrow} alt="Back Arrow"/>
                            <img src={logo} alt="Mellow Flow Logo"/>
                            <p className={`text-[16px] leading-[107%] font-poppins ${assignedGender ? "opacity-100" : "opacity-0"}`}>
                                <span className={"font-bold"}>{currentQuestionIndex + 1}</span>/6</p>
                        </div>
                        <ProgressBar></ProgressBar>
                    </>
                )
                    :
                    (
                        <div className={" flex justify-between items-center bg-[#FFC633]"}>
                            <img src={logo} alt="Mellow Flow Logo"/>
                            <p className={"font-bold text-[18px] text-[#303030] leading-[22px] flex items-center gap-2.5"}>Reserved price for: <span className={"text-[#6A61F1] font-bold text-[24px] text-center"}>14:59</span></p>
                        </div>
                    )
            }



        </div>
    );
};

export default TopBar;