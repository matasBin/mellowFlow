import React from 'react';
import maleImage from "../images/MaleImg.svg"
import femaleImage from "../images/FemaleImg.svg"
import {useNavigate} from "react-router-dom";
import {useAppStore} from "../store/allStates";

const LandingPage = () => {

    const {gender, setGender, setQuizStart} = useAppStore()

    const navigate = useNavigate()
    const assignedGender = gender

    const assignGender = (gender: string) => {
        setGender(gender)
        setQuizStart(true)
        console.log(assignedGender)
        navigate("/quiz")
    }

    return (
        <div className={"LandingPage flex flex-col h-full w-[335px] gap-6"}>
            <header className={"flex flex-col items-center gap-3"}>
                <h1 className={"font-semibold text-2xl text-[#303030] leading-7 text-center"}>What is your gender?</h1>
                <p className={"font-normal text-[14px] leading-[18px] text-[#303030] text-center"}>We will use this to personalize
                    your plan</p>
            </header>

            <main className={"flex flex-1 flex-col items-center justify-center"}>

                <div className="genderOptions w-[335px] h-[200px] flex justify-center gap-3 items-center">

                    <div onClick={() => assignGender("male")}
                         className="male box-border h-[200px] w-[161px] border-[2px] border-[#5349DB] rounded-[10px] shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
                        <img className={"rounded-[10px]"} src={maleImage} alt="Male option"/>
                        <div
                            className="genderText rounded-b-[8px] h-[60px] bg-[#5349DB] flex justify-center items-center">
                            <h1 className={"font-semibold text-[18px] leading-[22px] text-[#FFFFFF]"}>Male</h1>
                        </div>
                    </div>

                    <div onClick={() => assignGender("female")}
                         className="female box-border h-[200px] w-[161px] border-[2px] border-[#5349DB] rounded-[10px] shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
                        <img className={"rounded-[10px]"} src={femaleImage} alt="Female option"/>
                        <div
                            className="genderText rounded-b-[8px] h-[60px] bg-[#5349DB] flex justify-center items-center">
                            <h1 className={"font-semibold text-[18px] leading-[22px] text-[#FFFFFF]"}>Female</h1>
                        </div>
                    </div>

                </div>

            </main>


        </div>
    );
};

export default LandingPage;