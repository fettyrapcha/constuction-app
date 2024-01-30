const Expenses = () => {
    return (
      <div className="w-2/3 relative flex flex-col items-start justify-start gap-[16px]  text-left text-smi text-light-black font-inter">
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              GENERAL INFORMATION
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  Project
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-between p-3 text-sm text-color-gray-gray-300">
                <div className="relative tracking-[-0.21px] leading-[150%]">
                  Select project
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
                  Construction Stage
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-between p-3 text-sm text-color-gray-gray-300">
                <div className="relative tracking-[-0.21px] leading-[150%]">
                  Select construction stage
                </div>
                <img
                  className="w-4 relative h-4"
                  alt=""
                  src="/arrow-drop-down.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                    Description
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-aliceblue h-[109px] flex flex-row items-start justify-start p-3 box-border text-sm text-color-gray-gray-300">
                  <div className="relative tracking-[-0.21px] leading-[150%]">
                    e.g reason for the expense
                  </div>
                </div>
              </div>
              <div className="rounded-md overflow-hidden flex flex-row items-center justify-start p-1 gap-[4px] text-jenga-green">
                <img
                  className="w-[13px] relative h-[13px] overflow-hidden shrink-0"
                  alt=""
                  src="/image.svg"
                />
                <div className="relative tracking-[-0.2px] leading-[22px] font-medium">
                  Add image
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                    Date
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  Does this expense repeat?
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-1.5 pb-4 gap-[16px] text-sm">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="w-3.5 relative h-3.5"
                    alt=""
                    src="/checkbox.svg"
                  />
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    Does not repeat
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="w-3.5 relative rounded-3xl box-border h-3.5 overflow-hidden shrink-0 border-[1px] border-solid border-greyscale-borders" />
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    Repeats
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              ITEMS
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                    Item
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-start justify-start p-3 text-sm text-color-gray-gray-300">
                  <div className="relative tracking-[-0.21px] leading-[150%]">
                    e.g Bag of cement
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-center justify-center py-0 px-1">
                    <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                      Quantity
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-start justify-start p-3 text-sm text-color-gray-gray-300">
                    <div className="relative tracking-[-0.21px] leading-[150%]">
                      0.00
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="flex flex-row items-center justify-center py-0 px-1">
                    <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                      Price
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-start p-3 text-sm text-color-gray-gray-300">
                    <div className="relative tracking-[-0.21px] leading-[150%]">
                      0.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md overflow-hidden flex flex-row items-center justify-start py-1 px-0 gap-[4px] text-jenga-green">
              <img
                className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/fiplus.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[22px] font-medium">
                Add another item
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/square.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[16.5px]">
                Includes transportation
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/square.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[16.5px]">
                Includes packaging
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/square.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[16.5px]">
                Includes labour costs
              </div>
            </div>
          </div>
          <div className="self-stretch bg-color-surface-primary shadow-[0px_-1px_0px_rgba(203,_213,_225,_0.3)] flex flex-row items-center justify-between py-4 px-0 text-sm text-greyscale-title">
            <div className="relative tracking-[-0.2px] leading-[150%] font-medium">
              Total
            </div>
            <div className="relative tracking-[-0.2px] leading-[16px] font-medium">
              ₦ 0.00
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              PROJECT MANAGER
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                Select Proejct Manager
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-start p-3 gap-[6px] text-sm text-color-gray-gray-300">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/magnifyingglass.svg"
              />
              <div className="relative tracking-[-0.21px] leading-[150%]">
                Search project manager
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-color-button-label-primary shadow-[0px_3px_12px_rgba(15,_23,_42,_0.06)] flex flex-col items-start justify-start p-4 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
              TAGS
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                Add tags
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-aliceblue flex flex-row items-center justify-start p-3 gap-[6px] text-sm text-color-gray-gray-300">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/magnifyingglass.svg"
              />
              <div className="relative tracking-[-0.21px] leading-[150%]">
                Search tags
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-color-button-label-primary flex flex-row items-center justify-end pt-3 px-6 pb-6 gap-[12px] text-center text-sm text-jenga-green">
          <div className="flex-1 rounded-md box-border h-12 flex flex-row items-center justify-between p-4 border-[1px] border-solid border-jenga-green">
            <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
              Save as template
            </div>
            <img
              className="w-3 relative h-3 overflow-hidden shrink-0"
              alt=""
              src="/caretdown.svg"
            />
          </div>
          <div className="flex-1 rounded-md bg-jenga-green h-12 flex flex-row items-center justify-center p-4 box-border text-color-button-label-primary">
            <div className="flex-1 relative tracking-[-0.2px] leading-[130%] font-semibold flex items-center justify-center h-6">
              Create
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Expenses;
  