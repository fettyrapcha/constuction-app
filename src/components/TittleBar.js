import React from 'react'

export default function TittleBar() {
  return (
    <div className="relative rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-color-button-label-primary w-full overflow-hidden flex flex-row items-center justify-start py-[18px] px-9 box-border gap-[930px] text-left text-[18px] text-black font-inter">
      <div className="flex flex-row items-center justify-center">
        <div className="relative font-medium">Dashboard</div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start relative gap-[10px]">
            <div className="w-[42px] relative rounded-[50%] box-border h-[42px] z-[0] border-[1px] border-solid border-gainsboro" />
            <img
              className="w-6 absolute my-0 mx-[!important] top-[9px] left-[9px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/bell.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
