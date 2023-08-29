import {BiSolidMessageAltDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import bgImg from "../Auth/assets/auth-img.9302755e73810f6c27d2.png"
import React from "react";

interface Props {
    logoTitle: React.ReactNode,
    logoDesc: React.ReactNode
}

const Heading: React.FC<Props> = ({logoTitle, logoDesc}) => {

    return (
        <>
            <Link className="flex items-center justify-center w-full md:w-[110px]" to="/">
                <BiSolidMessageAltDetail className = "text-[1.7rem]"/>
                <h3 className="ms-4 font-semibold mt-[-6px] text-[1.5em]">{logoTitle}</h3>
            </Link>
            <p className="md:mt-3 opacity-[.5]">{logoDesc}</p>
            <div className="hidden md:block mt-auto bottom-0 absolute z-10">
                <img className="md:w-[27rem] lg:w-[33rem] xl:w-[39rem]" src={bgImg} alt="" />
            </div>
        </>
    )
}

export default Heading;