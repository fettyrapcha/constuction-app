import React from 'react'

export default function SideBar() {
  return (
    <div className="w-[260px] bg-color-button-label-primary flex flex-col items-start justify-start pt-0 px-4 pb-6 box-border gap-[83px]">
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
      <div className="self-stretch h-[78px] flex flex-col items-start justify-center py-[18px] px-2 box-border">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Acme Inc</div>
          </div>
          <img
            className="w-3 relative h-3 overflow-hidden shrink-0"
            alt=""
            src="/caretdown.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xs text-menu-heading font-barlow">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="flex flex-row items-start justify-start py-3.5 px-3">
            <div className="relative tracking-[0.5px] font-semibold">
              MAIN MENU
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-light-black font-inter">
            <div className="self-stretch rounded-xl bg-jenga-green flex flex-row items-end justify-start py-3.5 px-4 gap-[8px] text-color-button-label-primary">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/house.svg"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="relative">Dashboard</div>
              </div>
            </div>
            <div
              className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px] cursor-pointer"
             
            >
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/toolbox.svg"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="relative">Projects</div>
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/hammer.svg"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="relative">Materials</div>
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/warehouse.svg"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="relative">Lease</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-light-black font-inter">
          <div className="flex flex-row items-start justify-start py-3.5 px-3 text-xs text-menu-heading font-barlow">
            <div className="relative tracking-[0.5px] font-semibold">
              SETTINGS
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px]">
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/coins.svg"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative">FX Table</div>
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px]">
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/file.svg"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Templates</div>
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px]">
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/arrowsclockwise.svg"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Sync Online</div>
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-end justify-start py-3.5 px-4 gap-[8px]">
            <img
              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/usersthree.svg"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row items-center justify-start pt-0 px-0 pb-9 text-sm text-light-black">
      <div className="flex flex-row flex-wrap items-center justify-start gap-[12px]">
        <img
          className="w-12 relative rounded-[50%] h-12 object-cover"
          alt=""
          src="/ellipse-967@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
              Felix Manford
            </div>
          </div>
          <div className="flex flex-row items-center justify-start text-[13px] text-grey">
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[-0.2px] leading-[130%]">
                felixmanford@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
