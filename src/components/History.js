const History = () => {
    return (
      <div className="relative w-full flex flex-col items-start justify-start gap-[12px] text-left text-sm text-black font-inter">
        <div className="w-[1234px] bg-color-button-label-primary flex flex-row items-center justify-between py-3 px-9 box-border">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start py-0 px-2">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px]">Period</div>
                </div>
                <div className="rounded-[99px] bg-whitesmoke-100 flex flex-row items-center justify-center py-2.5 px-4 gap-[10px]">
                  <div className="relative tracking-[-0.2px] font-medium">
                    All Time
                  </div>
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/caretdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-[12px] text-grey">
            <div className="rounded-md flex flex-col items-start justify-start py-0 pr-6 pl-3">
              <div className="relative tracking-[-0.2px] leading-[150%]">
                TOTAL AMOUNT
              </div>
              <div className="relative text-[24px] tracking-[-0.2px] leading-[130%] font-semibold text-light-black text-center">
                ¢95.99
              </div>
            </div>
            <div className="w-[203px] rounded-md bg-salmon h-12 flex flex-row items-center justify-center p-4 box-border gap-[10px] text-center text-sm text-color-surface-primary">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[130%] text-color-button-label-primary font-semibold">
                Add transaction
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1234px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-color-button-label-primary overflow-hidden flex flex-col items-start justify-start py-6 px-9 box-border gap-[24px] text-slategray">
          <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 px-6 gap-[96px] border-[1px] border-solid border-whitesmoke-200">
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="relative leading-[120%]">Transactions</div>
            </div>
            <div className="w-[116px] flex flex-row items-center justify-start gap-[2px]">
              <div className="relative leading-[120%]">Date</div>
              <img
                className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/caretdown.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[2px]">
              <div className="relative leading-[120%]">Amount</div>
              <img
                className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/caretdown.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[96px] text-gray">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-center justify-center relative gap-[10px]">
                    <div className="w-11 relative rounded-[50%] bg-mile-black h-11 z-[0]" />
                    <img
                      className="w-5 absolute my-0 mx-[!important] top-[12.47px] left-[11.09px] h-5 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/arrowsquareupright.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Bolt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-center justify-center relative gap-[10px]">
                    <div className="w-11 relative rounded-[50%] bg-mile-black h-11 z-[0]" />
                    <img
                      className="w-5 absolute my-0 mx-[!important] top-[12.47px] left-[11.09px] h-5 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/arrowsquareupright.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Yango
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-center justify-center relative gap-[10px]">
                    <div className="w-11 relative rounded-[50%] bg-mile-black h-11 z-[0]" />
                    <img
                      className="w-5 absolute my-0 mx-[!important] top-[12.47px] left-[11.09px] h-5 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/arrowsquareupright.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Cleaning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-center justify-center relative gap-[10px]">
                    <div className="w-11 relative rounded-[50%] bg-mile-black h-11 z-[0]" />
                    <img
                      className="w-5 absolute my-0 mx-[!important] top-[12.47px] left-[11.09px] h-5 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/arrowsquareupright.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Nails
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-center justify-center relative gap-[10px]">
                    <div className="w-11 relative rounded-[50%] bg-mile-black h-11 z-[0]" />
                    <img
                      className="w-5 absolute my-0 mx-[!important] top-[12.47px] left-[11.09px] h-5 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/arrowsquareupright.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Cement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[116px] flex flex-col items-start justify-start">
              <div className="w-[116px] flex flex-col items-start justify-start py-[31px] px-0 box-border">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    10th Sept. 2023
                  </div>
                </div>
              </div>
              <div className="w-[116px] flex flex-col items-start justify-start py-[31px] px-0 box-border">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    9th Sept. 2023
                  </div>
                </div>
              </div>
              <div className="w-[116px] flex flex-col items-start justify-start py-[31px] px-0 box-border">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    9th Sept. 2023
                  </div>
                </div>
              </div>
              <div className="w-[116px] flex flex-col items-start justify-start py-[31px] px-0 box-border">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    10th Sept. 2023
                  </div>
                </div>
              </div>
              <div className="w-[116px] flex flex-col items-start justify-start py-[31px] px-0 box-border">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                    10th Sept. 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[116px] flex flex-col items-start justify-start text-salmon font-manrope">
              <div className="self-stretch flex flex-row items-center justify-center py-[31px] px-0">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[130%]">-¢857,365.60</b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-[31px] px-0">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[130%]">-¢857,365.60</b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-[31px] px-0">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[130%]">-¢857,365.60</b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-[31px] px-0">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[130%]">-¢857,365.60</b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-[31px] px-0">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[130%]">-¢857,365.60</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default History;
  