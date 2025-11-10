import React, {useState} from 'react';
import {useAppStore} from "../store/allStates";
import {quizData} from "../data/quizData";
import {useNavigate} from "react-router-dom";

const QuizPage = () => {

    const {currentQuestionIndex, setAnswer, nextQuestion, setQuizStart, setQuizEnd} = useAppStore()

    const currentQuestion = quizData[currentQuestionIndex]
    const [selected, setSelected] = useState<string>("")
    const navigate = useNavigate()

    const handleSelect = (answer: string) => {
        setSelected(answer)
        setAnswer(answer)
        setTimeout(() => {
            setSelected("")
            if (currentQuestionIndex === quizData.length - 1) {
                setQuizStart(false)
                setQuizEnd(true)
                navigate("/checkout")
            } else {
                nextQuestion()
            }

        }, 500)

    }

    return (
        <div className={"QuizPage flex flex-col items-center gap-6 h-full"}>
            <header >
                <h1 className={"font-semibold text-[24px] leading-7 text-[#303030] text-center"}>{currentQuestion.text}</h1>
            </header>

            <main className={"flex flex-1 flex-col justify-end h-full w-full gap-[8px]"}>
                {/*Cia geriau renderinga pakeist nuo type kaip pvz sukurti type yes-no/ multichoise*/}
                {currentQuestionIndex >= 2 ? (

                    <>
                        {/*Yes button*/}
                        <button onClick={() => handleSelect(currentQuestion.options[0].answer)}
                                className={`flex font-semibold text-[#303030] h-[52px] py-[16px] px-[20px]  border-[1px] border-[#289F67] rounded-[8px] gap-[16px] ${selected === currentQuestion.options[0].answer ? "bg-[#289F67]" : "bg-[#FFFFFF]"} transition-all`}>
                            <img src={selected === currentQuestion.options[0].answer ? currentQuestion.options[0].lightIcon : currentQuestion.options[0].darkIcon} alt=""/>
                            <p className={`${selected === currentQuestion.options[0].answer ? "text-[#FFFFFF]" : ""} leading-[20px]`}>{currentQuestion.options[0].answer}</p>
                        </button>

                        {/*I'm not sure button*/}
                        <button onClick={() => handleSelect(currentQuestion.options[1].answer)}
                                className={`flex font-semibold text-[#303030] h-[52px] py-[16px] px-[20px]  border-[1px] border-[#FFC633] rounded-[8px] gap-[16px] ${selected === currentQuestion.options[1].answer ? "bg-[#FFC633]" : "bg-[#FFFFFF]"} transition-all`}>
                            <img src={selected === currentQuestion.options[1].answer ? currentQuestion.options[1].lightIcon : currentQuestion.options[1].darkIcon} alt=""/>
                            <p className={`${selected === currentQuestion.options[1].answer ? "text-[#FFFFFF]" : ""} leading-[20px]`}>{currentQuestion.options[1].answer}</p>
                        </button>

                        {/*No button*/}
                        <button onClick={() => handleSelect(currentQuestion.options[2].answer)}
                                className={`flex font-semibold text-[#303030] h-[52px] py-[16px] px-[20px]  border-[1px] border-[#E35244] rounded-[8px] gap-[16px] ${selected === currentQuestion.options[2].answer ? "bg-[#E35244]" : "bg-[#FFFFFF]"} transition-all`}>
                            <img src={selected === currentQuestion.options[2].answer ? currentQuestion.options[2].lightIcon : currentQuestion.options[2].darkIcon} alt=""/>
                            <p className={`${selected === currentQuestion.options[2].answer ? "text-[#FFFFFF]" : ""} leading-[20px]`}>{currentQuestion.options[2].answer}</p>
                        </button>
                    </>

                ) : (

                    currentQuestion.options.map((item, index) => (
                        <button onClick={() => handleSelect(item.answer)} key={index}
                                className={`flex font-semibold text-[#303030] py-[16px] px-[12px]  border-[1px] border-[#F1F1F1] rounded-[8px] gap-[12px] ${selected === item.answer ? "bg-[#767AF9]" : "bg-[#FFFFFF]"} transition-all`}>
                            <img src={selected === item.answer ? item.lightIcon : item.darkIcon} alt=""/>
                            <p className={`${selected === item.answer ? "text-[#FFFFFF]" : ""}`}>{item.answer}</p>
                        </button>

                    ))

                )

                }

            </main>

        </div>
    );
};

export default QuizPage;