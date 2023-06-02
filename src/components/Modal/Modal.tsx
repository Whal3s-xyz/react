import React, {useContext, useEffect, useRef} from 'react';
import {Whal3sModalContext} from "../../modules/Whal3sModalContext";
import {NftValidationUtility} from "@whal3s/whal3s.js";
import StepUninitialized from "./StepUninitialized";
import StepNftsFetched from "./StepNftsFetched";
import StepReserved from "./StepReserved";
import {IoClose} from "react-icons/io5";


const Whal3sModal = () => {
    const {state, dispatch} = useContext(Whal3sModalContext);
    const backdrop = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log({tokenId: state.utility?.tokenId})
        if (state.utility && state.utility?.tokenId === undefined) {
            // @ts-ignore
            const validNft = state.utility?.nfts?.nfts?.find(nft => nft.valid === true)
            if (validNft === undefined)
                return
            state.utility.tokenId = validNft?.attributes.id.tokenId
        }
    }, [state.utility?.nfts])
    return (
        <>
            <input type="checkbox" id="whal3s-modal" className="modal-toggle" checked={state.open} readOnly={true}/>
            <div ref={backdrop} className="modal modal-bottom sm:modal-middle" onClick={(e) => {
                if (e.target === backdrop.current)
                    dispatch({type: 'SET_OPEN', payload: false})
            }}>
                <div className="modal-box h-full md:h-auto md:!w-11/12  md:!max-w-5xl md:px-20 md:py-10 relative">

                    <button
                        type="button"
                        className="sticky max-sm:left-full max-sm:top-0 z-10 md:absolute right-2.5 top-2.5 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => dispatch({type: 'SET_OPEN', payload: false})}
                    >
                        <span className="sr-only">Close</span>
                        <IoClose className="h-8 w-8" aria-hidden="true"/>
                    </button>
                    {state.step === NftValidationUtility.STEP_UNINITIALIZED && <StepUninitialized/>}
                    {(
                        state.step === NftValidationUtility.STEP_WALLET_CONNECTED
                        || state.step === NftValidationUtility.STEP_INITIALIZED
                        || state.step === NftValidationUtility.STEP_NFTS_FETCHED
                        || state.step === NftValidationUtility.STEP_TOKEN_SELECTED
                    ) && <StepNftsFetched/>}

                    {(state.step === NftValidationUtility.STEP_RESERVED || state.step === NftValidationUtility.STEP_CLAIMED) &&
                        <StepReserved/>}


                </div>
            </div>
        </>
    );
};


export default Whal3sModal;
