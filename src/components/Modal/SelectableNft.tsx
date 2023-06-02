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
                className={'max-sm:hidden'}> by {truncateAddress(engagement.wallet_address)}</span>
        </p>
    )
}
const SelectableNft = ({nft, active, checked, disabled}:{nft: any, active: boolean, checked:boolean, disabled:boolean}) => {
    return (
        <div className={` flex space-x-5 px-2.5 py-5 border-solid rounded-md border  ${checked ? 'border-slate-200': 'border-transparent' } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} `}>
            <img
                className="h-20 w-20 rounded-lg object-cover bg-cover bg-black"
                src={nft.attributes.media[0].thumbnail} alt=""/>

            <div className={`flex-grow flex flex-col justify-between`}>
                <div>
                    <p className="text-md font-medium text-gray-900">{nft.attributes.title}</p>
                    {nft.engagements.length > 0 && <FormattedEngagement className={'text-gray-600'}
                                                                        engagement={nft.engagements[0]}/>}
                </div>

                <div className={`flex justify-between items-center`}>
                    {nft.valid ?
                        <span
                            className="inline-flex items-center rounded-full bg-green-100 px-8 py-1 text-xs font-light text-black">Valid
                        </span> :
                        <span
                            className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-light text-black">
                            Invalid
                        </span>
                    }
                    {checked && <FaCheckCircle className={'h-5 w-5'}/>}
                </div>


            </div>
        </div>

    );
};

export default SelectableNft;
