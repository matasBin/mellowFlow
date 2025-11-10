import React from 'react';
import lightbulb from "../images/checkoutImages/svg/lightbulb.svg"
import circle from "../images/checkoutImages/svg/circle.svg"
import stop from "../images/checkoutImages/svg/stop.svg"
import thunder from "../images/checkoutImages/svg/thunder.svg"
import brain from "../images/checkoutImages/svg/brain.svg";

const CheckoutAnalytics = () => {
    return (
        <div className={"CheckoutAnalytics mt-5 flex flex-col gap-6"}>

            <h1 className={"font-bold text-[24px] leading-[28px] text-[#303030]"}>Your Personal Summary</h1>
            <div className="results flex flex-col gap-[8px]">
                <div className={"infoBox px-[12px] py-[16px] flex gap-[24px] rounded-[8px] border-[1px] border-[#767AF9]"}>
                    <div className={"icon w-[40px] h-[40px] flex"}>
                        <img className={"p-[4px] w-[] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={lightbulb} alt="brainImage"/>
                    </div>
                    <div className={"info"}>
                        <div className="text flex flex-col gap-[2px]">
                            <p className={"font-bold px-[4px] py-[2px] rounded-[4px] text-[10px] leading-[12px] text-[#FFFFFF] bg-[#289F67]"}>VERY STRONG</p>
                            <p></p>
                        </div>
                        <div className="progressBar">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutAnalytics;