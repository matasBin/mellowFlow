import React from 'react';
import lightbulb from "../images/checkoutImages/svg/lightbulb.svg"
import circle from "../images/checkoutImages/svg/circle.svg"
import stop from "../images/checkoutImages/svg/stop.svg"
import thunder from "../images/checkoutImages/svg/thunder.svg"

const CheckoutAnalytics = () => {
    return (
        <div className={"CheckoutAnalytics mt-5 flex flex-col gap-6"}>
            <h1 className={"font-bold text-[24px] leading-[28px] text-[#303030]"}>Your Personal Summary</h1>

            <div className="buttons flex flex-col gap-[8px]">

                <div className="results flex flex-col gap-[8px]">
                    <div className={"infoBox px-[12px] py-[16px] flex gap-[12px] rounded-[8px] border-[1px] border-[#767AF9]"}>
                        <div className={"icon w-[40px] h-[40px] flex"}>
                            <img className={"p-[4px] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={lightbulb} alt="brainImage"/>
                        </div>
                        <div className={"info flex flex-1 gap-[10px] items-center"}>
                            <div className="text flex flex-1 flex-col gap-[4px] ">
                                <div className={"flex"}>
                                    <p className={"inline font-bold px-[4px] py-[2px] rounded-[4px] text-[10px] leading-[12px] text-[#FFFFFF] bg-[#289F67]"}>VERY STRONG</p>
                                </div>
                                <p className={"font-bold text-[16px] leading-[20px] text-[#303030]"}>Desire to change</p>
                            </div>
                            <div className="progressBar flex-1 flex justify-end items-center gap-[10px] w-1/2">
                                <div className="bg-[#E4E4E4] flex w-[100%] h-[6px]  rounded-[8px]">
                                    <div className="progress bg-[#289F67] w-[92%] h-[6px] rounded-[8px]"></div>
                                </div>
                                <p className={"font-bold text-[14px] leading-[16px] text-[#303030]"}>92%</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="results flex flex-col gap-[8px]">
                    <div className={"infoBox px-[12px] py-[16px] flex gap-[12px] rounded-[8px] border-[1px] border-[#767AF9]"}>
                        <div className={"icon w-[40px] h-[40px] flex"}>
                            <img className={"p-[4px] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={circle} alt="brainImage"/>
                        </div>
                        <div className={"info flex flex-1 gap-[10px] items-center"}>
                            <div className="text flex flex-1 flex-col gap-[4px] ">
                                <div className={"flex"}>
                                    <p className={"inline font-bold px-[4px] py-[2px] rounded-[4px] text-[10px] leading-[12px] text-[#FFFFFF] bg-[#E35244]"}>TOO HIGH</p>
                                </div>
                                <p className={"font-bold text-[16px] leading-[20px] text-[#303030]"}>Cravings</p>
                            </div>
                            <div className="progressBar flex-1 flex justify-end items-center gap-[10px] w-1/2">
                                <div className="bg-[#E4E4E4] flex w-[100%] h-[6px]  rounded-[8px]">
                                    <div className="progress bg-[#E35244] w-[84%] h-[6px] rounded-[8px]"></div>
                                </div>
                                <p className={"font-bold text-[14px] leading-[16px] text-[#303030]"}>84%</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="results flex flex-col gap-[8px]">
                    <div className={"infoBox px-[12px] py-[16px] flex gap-[12px] rounded-[8px] border-[1px] border-[#767AF9]"}>
                        <div className={"icon w-[40px] h-[40px] flex"}>
                            <img className={"p-[4px] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={stop} alt="brainImage"/>
                        </div>
                        <div className={"info flex flex-1 gap-[10px] items-center"}>
                            <div className="text flex flex-1 flex-col gap-[4px] ">
                                <div className={"flex"}>
                                    <p className={"inline font-bold px-[4px] py-[2px] rounded-[4px] text-[10px] leading-[12px] text-[#FFFFFF] bg-[#E35244]"}>TOO HIGH</p>
                                </div>
                                <p className={"font-bold text-[16px] leading-[20px] text-[#303030]"}>Mental blocks</p>
                            </div>
                            <div className="progressBar flex-1 flex justify-end items-center gap-[10px] w-1/2">
                                <div className="bg-[#E4E4E4] flex w-[100%] h-[6px]  rounded-[8px]">
                                    <div className="progress bg-[#E35244] w-[74%] h-[6px] rounded-[8px]"></div>
                                </div>
                                <p className={"font-bold text-[14px] leading-[16px] text-[#303030]"}>74%</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="results flex flex-col gap-[8px]">
                    <div className={"infoBox px-[12px] py-[16px] flex gap-[12px] rounded-[8px] border-[1px] border-[#767AF9]"}>
                        <div className={"icon w-[40px] h-[40px] flex"}>
                            <img className={"p-[4px] border-[1px] bg-[#F4F4FF] border-[#767AF9] rounded-[4px]"} src={thunder} alt="brainImage"/>
                        </div>
                        <div className={"info flex flex-1 gap-[10px] items-center"}>
                            <div className="text flex flex-1 flex-col gap-[4px] ">
                                <div className={"flex"}>
                                    <p className={"inline font-bold px-[4px] py-[2px] rounded-[4px] text-[10px] leading-[12px] text-[#FFFFFF] bg-[#FFC633]"}>MODERATELY HIGH</p>
                                </div>
                                <p className={"font-bold text-[16px] leading-[20px] text-[#303030]"}>Stress</p>
                            </div>
                            <div className="progressBar flex-1 flex justify-end items-center gap-[10px] w-1/2">
                                <div className="bg-[#E4E4E4] flex w-[100%] h-[6px]  rounded-[8px]">
                                    <div className="progress bg-[#FFC633] w-[52%] h-[6px] rounded-[8px]"></div>
                                </div>
                                <p className={"font-bold text-[14px] leading-[16px] text-[#303030]"}>52%</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckoutAnalytics;