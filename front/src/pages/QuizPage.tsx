import React, {useRef, useState} from 'react';
import {useAppStore} from "../store/allStates";
import {quizData} from "../data/quizData";

const QuizPage = () => {

    const {currentQuestionIndex, answers, setAnswer, nextQuestion} = useAppStore()

    const currentQuestion = quizData[currentQuestionIndex]
    const currentAnswer = answers[currentQuestionIndex]

    const handleSelect = (answer: string) => {
        setSelected(answer)
        setAnswer(answer)
        setTimeout(() => {
            nextQuestion()
        }, 500)
    }


    const [selected, setSelected] = useState<string>("")

    return (
        <div className={"QuizPage flex flex-col items-center gap-6 h-full"}>
            <header className={""}>
                <h1 className={"font-semibold text-[24px] leading-7 text-[#303030] text-center"}>{currentQuestion.text}</h1>
            </header>

            <main className={"flex flex-col justify-end h-full w-full gap-[8px]"}>
                {
                    currentQuestion.options.map((item, index) => (
                        <button onClick={() => handleSelect(item.answer)} key={index}
                        className={`flex font-semibold text-[#303030] py-[16px] px-[12px]  border-[1px] border-[#F1F1F1] rounded-[8px] gap-[12px] ${selected === item.answer ? "bg-[#767AF9]" : "bg-[#FFFFFF]"}`}>
                            <img src={selected === item.answer ? item.lightIcon : item.darkIcon} alt=""/>
                            <p className={`${selected === item.answer ? "text-[#FFFFFF]" : ""}`}>{item.answer}</p>
                        </button>

                    ))
                }
            </main>

        </div>
    );
};

export default QuizPage;