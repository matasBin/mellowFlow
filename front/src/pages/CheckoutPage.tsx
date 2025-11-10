import React from 'react';
import CheckoutImage from "../components/CheckoutImage";
import brain from "../images/checkoutImages/svg/brain.svg"
import target from "../images/checkoutImages/svg/target.svg"
import CheckoutAnalytics from "../components/CheckoutAnalytics";

const CheckoutPage = () => {
    return (
        <div className={"CheckoutPage bg-[#F9F6F4] flex flex-col px-5 pt-10 pb-[20px] gap-6"}>
            <header>
                <h1 className={"font-bold text-[24px] leading-[28px]"}>Your personalized Alcohol-Free Plan is ready!</h1>
            </header>
            <div className="result grid grid-cols-2 h-[43px]">
                <div className={"border-r-[1px] border-[#767AF9]"}>
                    <div className={"flex gap-2 items-center"}>
                        <img className={"p-[4px] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={brain} alt="brainImage"/>
                        <p className={"font-normal text-[10px] leading-[12px]"}>Drinking patterns <span className={"font-bold text-[12px] leading-[14px]"}>Imbalanced</span></p>
                    </div>
                </div>
                <div>
                    <div className={"flex gap-2 items-start ml-5"}>
                        <img className={"p-[4px] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={target} alt="brainImage"/>
                        <p className={"font-normal text-[10px] leading-[12px]"}>Goal <br/> <span className={"font-bold text-[12px] leading-[14px]"}>Regain control and live alcohol-free</span></p>
                    </div>
                </div>

            </div>
                <CheckoutImage/>
                <CheckoutAnalytics/>
        </div>
    );
};

export default CheckoutPage;