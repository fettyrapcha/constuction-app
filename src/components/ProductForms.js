const ProductForms = () => {
    return (
      <div className="w-2/3 relative flex flex-col items-start justify-start gap-[16px] text-left text-smi text-light-black font-inter">
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              PROJECT DETAILs
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  Project Name
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-start justify-start p-3 text-sm text-color-gray-gray-300">
                <div className="relative tracking-[-0.21px] leading-[150%]">
                  e.g Industrial Park
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  Budget
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-start justify-start p-3 text-sm text-color-gray-gray-300">
                <div className="relative tracking-[-0.21px] leading-[150%]">
                  0.00
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  Currency
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-between p-3 text-sm">
                <div className="relative tracking-[-0.21px] leading-[150%]">
                  US Dollars
                </div>
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/arrow-drop-down.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  Floors
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-start justify-start p-3 text-sm text-color-gray-gray-300">
                <div className="relative tracking-[-0.21px] leading-[150%]">
                  0.00
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                    Start Date
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-start p-3 gap-[8px] text-sm text-color-gray-gray-300">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/calendarblank.svg"
                  />
                  <div className="relative tracking-[-0.21px] leading-[150%]">
                    12/12/23
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                    End Date
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-start p-3 gap-[8px] text-sm text-color-gray-gray-300">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/calendarblank.svg"
                  />
                  <div className="relative tracking-[-0.21px] leading-[150%]">
                    12/12/23
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              PROJECT DESCRIPTION
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                Description
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-aliceblue h-24 flex flex-row items-start justify-start p-3 box-border text-sm text-color-gray-gray-300">
              <div className="relative tracking-[-0.21px] leading-[150%]">
                Enter description
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              PROJECT IMAGE
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray flex flex-col items-center justify-start py-6 px-0 gap-[21px] text-xs text-darkgray border-[1px] border-dashed border-black">
            <img
              className="w-9 relative h-9"
              alt=""
              src="/add-photo-alternate.svg"
            />
            <div className="flex flex-col items-center justify-center gap-[6px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[-0.2px] leading-[130%]">
                  Add an image of your project vision
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[3px] text-black">
                <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                  click to upload or take picture
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-505.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px] text-xs">
          <div className="self-stretch flex flex-row items-center justify-start text-smi">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              UPLOAD BILL OF QUANTITIES
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-darkgray">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg bg-gray flex flex-col items-center justify-start py-6 px-0 border-[1px] border-dashed border-black">
                    <div className="flex flex-col items-center justify-center gap-[6px]">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative tracking-[-0.2px] leading-[130%]">
                          Upload documents relating to this property
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[3px] text-black">
                        <div className="relative tracking-[-0.2px] leading-[130%] font-medium">{`click to upload (PDF or JPEG) `}</div>
                        <img
                          className="self-stretch relative max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector-505.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-color-surface-primary shadow-[0px_-1px_0px_rgba(203,_213,_225,_0.3)] flex flex-row items-center justify-between py-4 px-0 text-base text-greyscale-title">
            <div className="relative tracking-[-0.2px] leading-[150%] font-medium">
              Total
            </div>
            <img className="w-4 relative h-4" alt="" src="/checkbox.svg" />
            <div className="relative tracking-[-0.2px] leading-[16px] font-medium">
              ₦ 0.00
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-end text-jenga-green">
            <div className="rounded-xl bg-color-surface-primary flex flex-row items-center justify-center p-3 border-[1px] border-solid border-jenga-green">
              <div className="relative tracking-[-0.2px] font-medium">
                Upload manually
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-color-button-label-primary flex flex-row items-center justify-end pt-3 px-6 pb-6 text-center text-sm text-color-surface-primary">
          <div className="flex-1 rounded-md bg-jenga-green h-12 flex flex-row items-center justify-center p-4 box-border">
            <div className="flex-1 relative tracking-[-0.2px] leading-[130%] font-semibold flex items-center justify-center h-6">
              Save
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductForms;
  