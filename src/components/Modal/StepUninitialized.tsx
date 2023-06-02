import React from "react";
import HeadlineSkeleton from "./Skeleton/HeadlineSkeleton";
import SentenceSkeleton from "./Skeleton/SentenceSkeleton";
import NftSkeleton from "./Skeleton/NftSkeleton";
import ImageSkeleton from "./Skeleton/ImageSkeleton";

const StepUninitialized = () => {
    return (
        <div className={`h-full grid grid-cols-1 md:grid-cols-2 md:gap-10`}>
            <div className={`order-2 md:order-1 mt-10 md:mt-0 flex flex-col justify-between`}>
                <div>
                    <HeadlineSkeleton/>
                    <SentenceSkeleton/>
                    <SentenceSkeleton/>
                    <SentenceSkeleton/>

                    <div className={'mt-10'}></div>
                    <NftSkeleton/>
                </div>


                <div className="ml-auto flex space-x-2">
                    <button className={"btn w-20"}>
                    </button>
                    <button disabled={true} className="btn btn-primary w-20"></button>
                </div>
            </div>
            <div
                className={`bg-gray-300 rounded-lg  md:min-h-[400px] order-1 md:order-2 flex justify-center items-center`}>
                <ImageSkeleton/>
            </div>
        </div>

    );
};

export default StepUninitialized;
