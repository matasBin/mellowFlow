import React from 'react';
import maleBefore from "../images/checkoutImages/maleBefore.png"
import maleAfter from "../images/checkoutImages/maleAfter.png"
import femaleBefore from "../images/checkoutImages/femaleBefore.png"
import femaleAfter from "../images/checkoutImages/femaleAfter.png"
import arrowLight from "../images/checkoutImages/arrowLight.svg"
import {useAppStore} from "../store/allStates";


const CheckoutImage = () => {

    const {gender} = useAppStore()

    return (
        <div className={"CheckoutImage flex"}>

            <div className={"imageFrame flex items-center justify-center rounded-[8px] w-full overflow-hidden h-[240px] relative"}>
                <img className={"w-1/2"} src={gender === "male" ? maleBefore : femaleBefore} alt="before male"/>
                <img className={"w-1/2"} src={gender === "male" ? maleAfter : femaleAfter} alt="after male"/>
                <img className={"absolute "} src={arrowLight} alt="arrowLight"/>
                <div className="before absolute bg-[#FFFFFF99] px-[12px] py-[4px] rounded-[4px] font-semibold text-[14px] text-[#252E3E] leading-[18px] left-[10px] bottom-[10px]">Before</div>
                <div className="after absolute bg-[#FFFFFF] px-[12px] py-[4px] rounded-[4px] font-semibold text-[14px] text-[#252E3E] leading-[18px] right-[10px] bottom-[10px]">After</div>
            </div>


        </div>
    );
};

export default CheckoutImage;