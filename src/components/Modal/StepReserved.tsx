import React,{useContext} from 'react';
import {Whal3sModalContext} from "../../modules/Whal3sModalContext";
import {GoVerified} from "react-icons/go";
import classNames from "classnames";

const StepWalletConnected = () => {
    const {state, dispatch} = useContext(Whal3sModalContext);

    return (
        <div className={`h-full grid grid-cols-1 md:grid-cols-2 md:gap-10`}>
            <div className={`order-2 md:order-1 mt-10 md:mt-0 flex flex-col justify-between`}>
                <div className={`flex justify-center`}>
                    <div className={`flex flex-col gap-10 items-center`}>
                        <GoVerified className={`test-black h-48 w-48`}></GoVerified>
                        <p className={`font-bold text-lg`}>Success !</p>
                    </div>

                </div>


                <button
                    type="button"
                    onClick={() => {
                        dispatch({type: 'SET_OPEN', payload: false})
                    }}
                    className={classNames(
                        'my-10 md:mb-0 rounded-full w-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        'flex justify-center items-center space-x-2.5'
                    )}
                >
                    <span>Close</span>
                </button>
            </div>
            <div
                className={`bg-gray-300 rounded-lg  md:min-h-[400px] order-1 md:order-2 flex justify-center items-center`}>
                {/*<Image src={Whal3sSticker} alt={'Whal3s Sticker'} className={``}/>*/}
            </div>
        </div>
    );
};

export default StepWalletConnected;
