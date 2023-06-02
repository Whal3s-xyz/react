import React from "react";
import {FaRegSadTear} from "react-icons/fa";


const NoSelectableNft = () => {
    return (
        <div className={` flex space-x-5 px-2.5 py-5 border-solid rounded-md border  border-transparent  `}>
            <div className={`h-20 w-20 rounded-lg bg-black flex justify-center items-center`}>
                <FaRegSadTear className={`h-10 w-20 text-white`}/>
            </div>

            <div className={`flex-grow flex items-center`}>
                <span>This wallet does not own a valid token.</span>

            </div>
        </div>

    );
};

export default NoSelectableNft;
