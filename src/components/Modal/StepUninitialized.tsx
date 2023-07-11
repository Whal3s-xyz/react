import React from "react";
import HeadlineSkeleton from "./Skeleton/HeadlineSkeleton";
import SentenceSkeleton from "./Skeleton/SentenceSkeleton";
import NftSkeleton from "./Skeleton/NftSkeleton";
import ImageSkeleton from "./Skeleton/ImageSkeleton";

const StepUninitialized = () => {
    return (
      <div className={`whal3s-h-full whal3s-grid whal3s-grid-cols-1 md:whal3s-grid-cols-2 md:whal3s-gap-5`}>
        <div className={`whal3s-order-2 md:whal3s-order-1 whal3s-mt-10 md:whal3s-mt-0 md:whal3s-pl-5 md:whal3s-pt-5 md:whal3s-pr-20 whal3s-flex whal3s-flex-col whal3s-justify-start md:whal3s-h-[35rem] max-md:whal3s-pb-10`}>
          <div className="whal3s-order-1 whal3s-flex-none">
            <HeadlineSkeleton/>
            <SentenceSkeleton/>
            <SentenceSkeleton/>
            <SentenceSkeleton/>

            <div className="whal3s-mt-10"></div>
            <NftSkeleton/>
          </div>


          <button disabled={true} className="whal3s-order-2 md:whal3s-order-3 whal3s-flex-none whal3s-my-10 whal3s-h-12 md:whal3s-mb-0 whal3s-rounded-full whal3s-w-full whal3s-bg-whal3s-gray whal3s-px-4 whal3s-py-2.5 whal3s-text-sm whal3s-font-semibold whal3s-text-white whal3s-shadow-sm "></button>
        </div>
        <div
          className={`whal3s-rounded-xl whal3s-aspect-[228/265] whal3s-w-full whal3s-order-1 md:whal3s-order-2 whal3s-flex whal3s-justify-center whal3s-items-center`}>
          <ImageSkeleton/>
        </div>
      </div>

    );
};

export default StepUninitialized;
