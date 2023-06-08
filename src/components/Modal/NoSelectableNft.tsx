import React from "react";


const NoSelectableNft = () => {
    return (
      <div className={`whal3s-flex whal3s-space-x-5 whal3s-px-2.5 whal3s-py-5 whal3s-border-solid whal3s-rounded-md whal3s-border  whal3s-border-transparent  `}>
        <div className="whal3s-h-20 whal3s-w-20 whal3s-aspect-square whal3s-rounded-lg whal3s-bg-black whal3s-flex whal3s-justify-center whal3s-items-center">
          <span className={'whal3s-text-3xl'}>🙅‍♂️</span>
        </div>

        <div className="whal3s-flex-grow whal3s-flex whal3s-items-center">
          <span>This wallet does not own a valid token.</span>
        </div>
      </div>

    );
};

export default NoSelectableNft;
