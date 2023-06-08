import React, {useContext, useEffect, useRef} from 'react';
import {Whal3sModalContext} from "../../modules/Whal3sModalContext";
import {NftValidationUtility} from "@whal3s/whal3s.js";
import StepUninitialized from "./StepUninitialized";
import StepNftsFetched from "./StepNftsFetched";
import StepReserved from "./StepReserved";
import {IoClose} from "react-icons/io5";
import './Modal.css'


const Whal3sModal = ({image}: {image?: string}) => {
    const {state, dispatch} = useContext(Whal3sModalContext);
    const backdrop = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log({tokenId: state.utility?.tokenId})
        if (state.utility && state.utility?.tokenId === undefined) {
            // @ts-ignore
            const validNft = state.utility?.nfts?.nfts?.find(nft => nft.valid === true)
            if (validNft === undefined || validNft?.attributes?.id?.tokenId === null || validNft?.attributes?.id?.tokenId === undefined)
                return
            state.utility.tokenId = validNft?.attributes?.id?.tokenId
        }
    }, [state.utility?.nfts])
    return (
        <>
            <input type="checkbox" id="whal3s-modal" className="whal3s-modal-toggle" checked={state.open} readOnly={true}/>
            <div ref={backdrop} className="whal3s-modal whal3s-whal3s-modal whal3s-modal-bottom whal3s-whal3s-modal-bottom sm:whal3s-modal-middle" onClick={(e) => {
                if (e.target === backdrop.current)
                    dispatch({type: 'SET_OPEN', payload: false})
            }}>
                <div className="whal3s-modal-box whal3s-h-full md:whal3s-h-auto md:!whal3s-w-11/12  md:!whal3s-max-w-5xl md:whal3s-px-5 md:whal3s-pl-10 md:whal3s-py-5 whal3s-relative whal3s-bg-white whal3s-text-black">

                    <button
                      type="button"
                      className="whal3s-sticky max-md:whal3s-left-full max-sm:whal3s-top-0 whal3s-z-10 md:whal3s-hidden whal3s-right-2.5 whal3s-top-2.5 whal3s-rounded-md whal3s-bg-white whal3s-text-gray-400 hover:whal3s-text-gray-500 focus:whal3s-outline-none focus:whal3s-ring-2 focus:whal3s-ring-indigo-500 focus:whal3s-ring-offset-2"
                      onClick={() => dispatch({type: 'SET_OPEN', payload: false})}
                    >
                        <span className="whal3s-sr-only">Close</span>
                        <IoClose className="whal3s-h-8 whal3s-w-8" aria-hidden="true"/>
                    </button>
                    {state.step === NftValidationUtility.STEP_UNINITIALIZED && <StepUninitialized/>}
                    {(
                        state.step === NftValidationUtility.STEP_WALLET_CONNECTED
                        || state.step === NftValidationUtility.STEP_INITIALIZED
                        || state.step === NftValidationUtility.STEP_NFTS_FETCHED
                        || state.step === NftValidationUtility.STEP_TOKEN_SELECTED
                    ) && <StepNftsFetched image={image}/>}

                    {(state.step === NftValidationUtility.STEP_RESERVED || state.step === NftValidationUtility.STEP_CLAIMED) &&
                        <StepReserved/>}


                </div>
            </div>
        </>
    );
};


export default Whal3sModal;
