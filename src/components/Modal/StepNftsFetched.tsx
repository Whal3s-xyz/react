import React from "react";
import {useContext, useMemo, useState} from 'react';
import {RadioGroup} from "@headlessui/react";
import classNames from "classnames";
import {Whal3sModalContext} from "../../modules/Whal3sModalContext";
import NftSkeleton from "./Skeleton/NftSkeleton";
import SelectableNft from "./SelectableNft";
import {CgSpinnerTwo} from "react-icons/cg";
import NoSelectableNft from "./NoSelectableNft";


const sortNftsforValidity = (a:any, b:any) => {
    if (a.valid && !b.valid) return -1;
    if (!a.valid && b.valid) return 1;
    return 0;
}

const StepNftsFetched = () => {
    const {state, dispatch} = useContext(Whal3sModalContext);
    const [claiming, setClaiming] = useState(false);
    const [shakeClaimingButton, setShakeClaimingButton] = useState(false);


    const reserve = async () => {
        setClaiming(true)
        try {
            await state.utility.reserveEngagement()
        } catch (e) {
            console.log(e)
            setShakeClaimingButton(true)
            setTimeout(() => {
                setShakeClaimingButton(false)
            }, 1000)
        }
        setClaiming(false)
    }


    return (
        <div className={`h-full grid grid-cols-1 md:grid-cols-2 md:gap-20`}>
            <div className={`order-2 md:order-1 mt-10 md:mt-0 flex flex-col justify-start md:h-[30rem] max-md:pb-10`}>
                <div className={'order-1 flex-none'}>
                    <h3 className="font-bold text-2xl">{state.utility?.details.name}</h3>
                    <p className="py-4">{state.utility.details.description}</p>
                </div>
                <div className={'order-3 md:order-2 min-h-0 flex-1 flex flex-col'}>
                    <div className={`min-h-0 flex flex-col relative ${state.utility?.nfts?.nfts?.length > 1 && 'flex-1'}`}>
                        <div className={'min-h-0 flex-1 overflow-y-auto  py-2'}>
                            <RadioGroup value={state.utility?.tokenId ?? null} onChange={(value) => {
                                state.utility.tokenId = value
                                dispatch({type: 'SET_UTILITY', payload: state.utility})
                            }}>
                                <RadioGroup.Label className="sr-only">Select token</RadioGroup.Label>
                                <div className="grid grid-cols-1 gap-4">
                                    {(state.utility?.nfts?.valid === undefined || state.utility?.nfts?.nfts === null) && (
                                        <NftSkeleton/>
                                    )}
                                    {(state.utility?.nfts?.nfts?.length === 0 && state.utility?.nfts?.valid !== undefined) &&  (
                                        <NoSelectableNft/>
                                    )}

                                    {state.utility?.nfts?.nfts?.sort(sortNftsforValidity).map((nft:any) => (
                                        <RadioGroup.Option
                                            key={nft.attributes.id.tokenId}
                                            value={nft.attributes.id.tokenId}
                                            disabled={!nft.valid}
                                        >
                                            {({active, checked}:{active:boolean, checked:boolean}) => (
                                                <SelectableNft nft={nft} active={active} checked={checked}
                                                               disabled={!nft.valid}/>
                                            )}
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white"></div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white"/>


                    </div>

                    <button
                        type="button"
                        disabled={!state.utility?.tokenId} onClick={reserve}
                        className={classNames(
                            'order-2 md:order-3 flex-none',
                            'my-10 md:mb-0 rounded-full w-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            shakeClaimingButton ? 'animate-shake-horizontal' : '',
                            'flex justify-center items-center space-x-2.5'
                        )}
                    >
                        <CgSpinnerTwo
                            className={`animate animate-spin h-5 w-5 ${!claiming ? 'opacity-0' : 'opacity-100'}`}/> <span>Claim reward</span>
                        <span className={'h-5 w-5'}></span>
                    </button>
                </div>
                <img src={'https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/powered-by-whal3s.png'} className={'order-4 flex-none max-w-[12rem] my-5 md:mb-0'}/>
            </div>
            <div
                className={`bg-gray-300 rounded-xl aspect-[228/265] w-full order-1 md:order-2 flex justify-center items-center`}>
                {/*<Image src={Whal3sLogoOnMacbook} alt={'Whal3s Sticker'} className={`bg-gray-300 rounded-xl aspect-[228/265] w-full  flex justify-center items-center`}/>*/}
                {/*<img src={'https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'}*/}
                {/*className={'bg-gray-300 rounded-xl aspect-[228/265] w-full  flex justify-center items-center'}/>*/}
            </div>
        </div>
    );
};

export default StepNftsFetched;
