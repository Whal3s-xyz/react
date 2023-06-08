import React from "react";
import {formatDistance} from "date-fns";
import {truncateAddress} from "../../lib/helpers";
import {FaCheckCircle} from "react-icons/fa";
import { EngagementResponse, NFTUtility } from '@whal3s/whal3s.js/build/types/types'



const FormattedEngagement = ({engagement, className}:{engagement: EngagementResponse, className: string}) => {
    return (
        <p
            className={className}>Used {formatDistance(new Date(engagement.updated_at), new Date(), {addSuffix: true})}
            <span
                className={'max-sm:whal3s-hidden'}> by {truncateAddress(engagement.wallet_address)}</span>
        </p>
    )
}
const SelectableNft = ({nft, active, checked, disabled}:{nft: any, active: boolean, checked:boolean, disabled:boolean}) => {
    return (
      <div className={` whal3s-flex whal3s-space-x-5 whal3s-px-2.5 whal3s-py-5 whal3s-border-solid whal3s-rounded-md whal3s-border  ${checked ? 'border-slate-200': 'whal3s-border-transparent' } ${disabled ? 'whal3s-cursor-not-allowed' : 'whal3s-cursor-pointer'} `}>
        <img
          className="whal3s-h-20 whal3s-w-20 whal3s-rounded-lg whal3s-object-cover whal3s-bg-cover whal3s-bg-black"
          src={nft.attributes.media[0].thumbnail} alt=""/>

        <div className="whal3s-flex-grow whal3s-flex whal3s-flex-col whal3s-justify-between">
          <div>
            <p className="whal3s-text-md whal3s-font-medium whal3s-text-gray-900">{nft.attributes.title}</p>
            {nft.engagements.length > 0 && <FormattedEngagement className="whal3s-text-gray-600"
                                                                engagement={nft.engagements[0]}/>}
          </div>

          <div className="whal3s-flex whal3s-justify-between whal3s-items-center">
            {nft.valid ?
              <span
                className="whal3s-inline-flex whal3s-items-center whal3s-rounded-full whal3s-bg-green-100 whal3s-px-8 whal3s-py-1 whal3s-text-xs whal3s-font-light whal3s-text-black">Valid
                        </span> :
              <span
                className="whal3s-inline-flex whal3s-items-center whal3s-rounded-full whal3s-bg-red-100 whal3s-px-2 whal3s-py-1 whal3s-text-xs whal3s-font-light whal3s-text-black">
                            Invalid
                        </span>
            }
            {checked && <FaCheckCircle className="whal3s-h-5 whal3s-w-5"/>}
          </div>


        </div>
      </div>

    );
};

export default SelectableNft;
