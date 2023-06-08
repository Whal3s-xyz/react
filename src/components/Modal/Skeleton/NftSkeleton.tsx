import React from "react";

const NftSkeleton = () => {
    return (
      <div role="status"
           className="whal3s-rounded-md whal3s-border whal3s-border-whal3s-gray whal3s-bg-white whal3s-px-4 whal3s-py-3 whal3s-shadow-sm whal3s-animate-pulse">

          <div className="whal3s-relative whal3s-flex whal3s-items-start whal3s-space-x-3">
              <div className="whal3s-flex-shrink-0">
                  <div
                    className="whal3s-flex whal3s-items-center whal3s-justify-center whal3s-h-20 whal3s-w-20 whal3s-rounded-lg whal3s-bg-whal3s-gray">
                      <svg className="whal3s-w-12 whal3s-h-12 whal3s-text-whal3s-gray dark:whal3s-text-gray-600"
                           xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"
                           viewBox="0 0 640 512">
                          <path
                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                      </svg>
                  </div>
              </div>
              <div className="whal3s-min-w-0 whal3s-flex-1">
                  <div className="whal3s-h-2.5 whal3s-bg-whal3s-gray whal3s-rounded-full dark:whal3s-bg-gray-700 whal3s-w-48 whal3s-max-w-full whal3s-mb-4"></div>
                  <div className="whal3s-h-2 whal3s-bg-whal3s-gray whal3s-rounded-full dark:whal3s-bg-gray-700 whal3s-mb-2.5"></div>
              </div>
          </div>
          <span className="whal3s-sr-only">Loading...</span>
      </div>
    );
};

export default NftSkeleton;
