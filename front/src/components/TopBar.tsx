import React from 'react';
import logo from '../images/Logo.svg'

const TopBar = () => {


    return (
        <div className={"TopBar w-[335px] h-[60px] pt-6 flex justify-center"}>
            <img src={logo} alt="Mellow Flow Logo" />
        </div>
    );
};

export default TopBar;