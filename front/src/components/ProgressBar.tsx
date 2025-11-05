import React from 'react';
import {useAppStore} from "../store/allStates";

const ProgressBar = () => {

    const {currentQuestionIndex} = useAppStore()

    const progressSteps = [16, 32, 48, 64, 85, 100,]
    const progressWidth = `${progressSteps[currentQuestionIndex]}%`

    return (
        <div className={"progressBar"}>
            <div className="progressBar relative">
                <div className={" border-[2px] border-[#E4E4E4] rounded-[2px] mt-[13px]"}></div> {/*Empty bar*/}
                <div className={`border-[#767AF9] border-[2px] rounded-[2px]  absolute top-0 transition-all`} style={{width: progressWidth}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;