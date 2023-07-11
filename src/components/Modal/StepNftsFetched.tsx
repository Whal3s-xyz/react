import React from "react";
import {useContext, useMemo, useState} from 'react';
import {RadioGroup} from "@headlessui/react";
import classNames from "classnames";
import {Whal3sModalContext} from '../../modules';
import NftSkeleton from "./Skeleton/NftSkeleton";
import SelectableNft from "./SelectableNft";
import {CgSpinnerTwo} from "react-icons/cg";
import NoSelectableNft from "./NoSelectableNft";


const sortNftsforValidity = (a:any, b:any) => {
    if (a.valid && !b.valid) return -1;
    if (!a.valid && b.valid) return 1;
    return 0;
}

const StepNftsFetched = ({image}: {image?: string}) => {
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
      <div className={`whal3s-h-full whal3s-grid whal3s-grid-cols-1 md:whal3s-grid-cols-2 md:whal3s-gap-0`}>
          <div className={`whal3s-order-2 md:whal3s-order-1 whal3s-mt-10 md:whal3s-mt-0 md:whal3s-pl-5 md:whal3s-pt-5 md:whal3s-pr-20 whal3s-flex whal3s-flex-col whal3s-justify-start md:whal3s-h-[35rem] max-md:whal3s-pb-10`}>
              <div className="whal3s-order-1 whal3s-flex-none whal3s-text-black">
                  <h3 className="whal3s-font-bold whal3s-text-3xl">{state.utility?.details.name}</h3>
                  <p className="whal3s-py-4">{state.utility.details.description}</p>
              </div>
              <div className={'whal3s-order-3 md:whal3s-order-2 whal3s-min-h-0 whal3s-flex-1 whal3s-flex whal3s-flex-col'}>
                  <div className={`whal3s-min-h-0 whal3s-flex whal3s-flex-col whal3s-relative ${state.utility?.nfts?.nfts?.length > 1 && 'whal3s-flex-1'}`}>
                      <div className="whal3s-min-h-0 whal3s-flex-1 whal3s-overflow-y-auto whal3s- whal3s-py-2">
                          <RadioGroup value={state.utility?.tokenId ?? null} onChange={(value) => {
                              state.utility.tokenId = value
                              dispatch({type: 'SET_UTILITY', payload: state.utility})
                          }}>
                              <RadioGroup.Label className="whal3s-sr-only">Select token</RadioGroup.Label>
                              <div className="whal3s-grid whal3s-grid-cols-1 whal3s-gap-4">
                                  {(state.utility?.nfts?.valid === undefined || state.utility?.nfts?.nfts === null) && (
                                    <NftSkeleton/>
                                  )}
                                  {(state.utility?.nfts?.nfts?.length === 0 && state.utility?.nfts?.valid !== undefined) &&  (
                                    <NoSelectableNft/>
                                  )}

                                  {state.utility?.nfts?.nfts?.sort(sortNftsforValidity).map((nft:any) => (
                                    <RadioGroup.Option
                                      key={nft.attributes?.id?.tokenId }
                                      value={nft.attributes?.id?.tokenId}
                                      disabled={!nft.valid}
                                      onClick={() => {
                                        if (nft.attributes?.id?.tokenId === state.utility?.tokenId) {
                                            state.utility.tokenId = null
                                        }
                                      }}
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
                        className="whal3s-pointer-events-none whal3s-absolute whal3s-inset-x-0 whal3s-top-0 whal3s-h-4 whal3s-bg-gradient-to-b whal3s-from-white"></div>
                      <div className="whal3s-pointer-events-none whal3s-absolute whal3s-inset-x-0 whal3s-bottom-0 whal3s-h-4 whal3s-bg-gradient-to-t whal3s-from-white"/>


                  </div>

                  <button
                    type="button"
                    disabled={!state.utility?.tokenId} onClick={reserve}
                    className={classNames(
                      'whal3s-order-2 md:whal3s-order-3 whal3s-flex-none',
                      'whal3s-my-10 md:whal3s-mb-8 whal3s-rounded-full whal3s-w-full whal3s-bg-black whal3s-px-4 whal3s-py-2.5 whal3s-text-sm whal3s-font-semibold whal3s-text-white whal3s-shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:whal3s-outline-black',
                      'disabled:whal3s-bg-whal3s-gray disabled:whal3s-text-zinc-800 disabled:whal3s-cursor-not-allowed',
                      'whal3s-transition-all whal3s-duration-300',
                      shakeClaimingButton ? 'whal3s-animate-shake-horizontal' : '',
                      'whal3s-flex whal3s-justify-center whal3s-items-center whal3s-space-x-2.5'
                    )}
                  >
                      <CgSpinnerTwo
                        className={`whal3s-animate whal3s-animate-spin whal3s-h-5 whal3s-w-5 ${!claiming ? 'whal3s-opacity-0' : 'whal3s-opacity-100'}`}/> <span>Claim reward</span>
                      <span className="whal3s-h-5 whal3s-w-5"></span>
                  </button>
              </div>
              <div className={'whal3s-order-4 whal3s-flex-none whal3s-my-5 md:whal3s-mb-0 whal3s-flex whal3s-justify-center md:whal3s-justify-start'}>
                  <img src={'https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/powered-by-whal3s.png'} className={'whal3s-max-w-[12rem] '}/>

              </div>
          </div>
          <div
            className={`whal3s-rounded-xl whal3s-w-full whal3s-order-1 md:whal3s-order-2 whal3s-flex whal3s-justify-center whal3s-items-center  md:whal3s-h-[35rem]`}>
              {image ? <img src={image}
                            alt={'Modal image'}
                            className={'whal3s-bg-whal3s-gray whal3s-rounded-xl whal3s-w-full whal3s-max-h-full  whal3s-object-cover'}/>
                : <div className={'whal3s-bg-gradient-to-tr whal3s-from-[#503eef] whal3s-to-[#9156d7] whal3s-rounded-xl whal3s-w-full whal3s-h-full whal3s-object-cover'}/>}

          </div>
      </div>
    );
};

export default StepNftsFetched;
