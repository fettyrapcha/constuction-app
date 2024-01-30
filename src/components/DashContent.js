import { useCallback } from "react";

const DashContent = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "New Project" to the project
  }, []);

  return (
    <div className="w-3/4 relative flex flex-row items-start justify-start gap-[22px] text-left text-base text-grey font-inter">
      <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[22px]">
          <div className="flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[18px] px-6 pb-6 gap-[18px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/chartbar.svg"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[0.2px]">PROJECTS VALUE</div>
            </div>
            <div className="flex flex-col items-center justify-center text-13xl text-black">
              <div className="w-[181px] relative font-semibold inline-block">
                $43,871
              </div>
            </div>
          </div>
          <div className="w-[380.5px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[18px] px-6 pb-6 box-border gap-[18px] text-[8px] text-seagreen">
            <div className="self-stretch flex flex-row items-center justify-between">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/chartbar.svg"
              />
              <div className="rounded-[99px] bg-mintcream flex flex-row items-center justify-center py-0.5 px-2 gap-[4px]">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  View all
                </div>
                <img
                  className="w-2 relative h-2 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-base text-grey">
              <div className="relative tracking-[0.2px]">NO. OF PROJECTS</div>
            </div>
            <div className="flex flex-col items-center justify-center text-13xl text-black">
              <div className="w-[181px] relative font-semibold inline-block">
                12
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-col items-start justify-start p-8 gap-[22px] text-darkslategray">
          <div className="relative">Money Spent by Weekday</div>
          <div className="flex flex-row items-end justify-start gap-[30px] text-center text-smi">
            <div className="w-[27px] relative h-[217px] overflow-hidden shrink-0">
              <div className="absolute h-[87.1%] w-[96.3%] top-[0%] right-[0%] bottom-[12.9%] left-[3.7%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute w-full top-[calc(50%_+_94.5px)] left-[0%] font-medium inline-block h-3.5">
                Jan
              </div>
            </div>
            <div className="w-[30px] relative h-[193px] overflow-hidden shrink-0">
              <div className="absolute h-[85.49%] w-[86.67%] top-[0%] right-[6.67%] bottom-[14.51%] left-[6.67%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_82.5px)] left-[11.67%] font-medium">
                Feb
              </div>
            </div>
            <div className="w-[26px] relative h-[242px] overflow-hidden shrink-0">
              <div className="absolute h-[88.43%] w-full top-[0%] right-[0%] bottom-[11.57%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_107px)] left-[1.92%] font-medium">
                Mar
              </div>
            </div>
            <div className="w-[29px] relative h-[232px] overflow-hidden shrink-0">
              <div className="absolute h-[87.93%] w-[89.66%] top-[0%] right-[3.45%] bottom-[12.07%] left-[6.9%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_102px)] left-[10.34%] font-medium">
                Apr
              </div>
            </div>
            <div className="w-[76px] relative h-[317px] overflow-hidden shrink-0">
              <div className="absolute top-[41px] left-[25px] flex flex-col items-start justify-start gap-[14px]">
                <div className="w-[26px] relative rounded-t-3xs rounded-b-none bg-jenga-green h-[248px]" />
                <div className="relative font-medium">May</div>
              </div>
              <div className="absolute h-[11.67%] w-full top-[0%] right-[0%] bottom-[88.33%] left-[0%] overflow-hidden text-white">
                <img
                  className="absolute h-[97.55%] w-full top-[0%] right-[0%] bottom-[2.45%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle.svg"
                />
                <div className="absolute top-[calc(50%_-_9.5px)] left-[17.76%] font-medium">
                  $43,871
                </div>
              </div>
            </div>
            <div className="w-[26px] relative h-[254px] overflow-hidden shrink-0">
              <div className="absolute h-[88.98%] w-full top-[0%] right-[0%] bottom-[11.02%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_113px)] left-[5.77%] font-medium">
                Jun
              </div>
            </div>
            <div className="w-[26px] relative h-[226px] overflow-hidden shrink-0">
              <div className="absolute h-[87.61%] w-full top-[0%] right-[0%] bottom-[12.39%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_99px)] left-[13.46%] font-medium">
                Jul
              </div>
            </div>
            <div className="w-[26px] relative h-[226px] overflow-hidden shrink-0">
              <div className="absolute h-[87.61%] w-full top-[0%] right-[0%] bottom-[12.39%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_99px)] left-[1.92%] font-medium">
                Aug
              </div>
            </div>
            <div className="w-[26px] relative h-[226px] overflow-hidden shrink-0">
              <div className="absolute h-[87.61%] w-full top-[0%] right-[0%] bottom-[12.39%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_99px)] left-[1.92%] font-medium">
                Sep
              </div>
            </div>
            <div className="w-[26px] relative h-[226px] overflow-hidden shrink-0">
              <div className="absolute h-[87.61%] w-full top-[0%] right-[0%] bottom-[12.39%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_99px)] left-[5.77%] font-medium">
                Oct
              </div>
            </div>
            <div className="w-[26px] relative h-[226px] overflow-hidden shrink-0">
              <div className="absolute h-[87.61%] w-full top-[0%] right-[0%] bottom-[12.39%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_99px)] left-[1.92%] font-medium">
                Nov
              </div>
            </div>
            <div className="w-[26px] relative h-[226px] overflow-hidden shrink-0">
              <div className="absolute h-[87.61%] w-full top-[0%] right-[0%] bottom-[12.39%] left-[0%] rounded-t-3xs rounded-b-none bg-whitesmoke" />
              <div className="absolute top-[calc(50%_+_99px)] left-[1.92%] font-medium">
                Dec
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white flex flex-col items-start justify-start pt-6 px-4 pb-[18px] gap-[36px] text-light-black">
        <div className="w-[361px] flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[-0.2px] leading-[16.8px] font-medium">
              Quick actions
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-sm text-black">
            <div
              className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-row items-center justify-center p-4 gap-[10px] cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/toolbox.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                New Project
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-row items-center justify-center p-4 gap-[10px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/receipt.svg"
              />
              <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                New Expense
              </div>
            </div>
          </div>
        </div>
        <div className="w-[361px] flex flex-col items-start justify-start gap-[24px] text-gray-100">
          <div className="self-stretch flex flex-row items-center justify-between py-0 pr-3 pl-0">
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                Recent activities
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px] text-[11px] text-grey">
              <div className="flex flex-row items-center justify-center">
                <div className="relative tracking-[-0.2px] leading-[16.5px] font-medium">
                  View all
                </div>
              </div>
              <img
                className="w-3 relative h-3 overflow-hidden shrink-0"
                alt=""
                src="/arrowright.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[36px] text-xs text-light-black">
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
              <div className="flex flex-row items-center justify-center py-0 px-3">
                <div className="relative leading-[18px] font-medium">TODAY</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[24px] text-grey">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[130%] font-medium">
                        16:34
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px] text-sm text-gray-200">
                      <div className="flex flex-row items-center justify-center relative gap-[10px]">
                        <div className="w-11 relative rounded-[50%] bg-jenga-green h-11 z-[0]" />
                        <img
                          className="w-[18px] absolute my-0 mx-[!important] top-[13px] left-[13px] h-[18px] overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/toolbox.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                            New Project Created
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-xs text-grey">
                          <div className="relative leading-[130%] font-medium">
                            #194726861038
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[130%] font-medium">
                        16:34
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px] text-sm text-gray-200">
                      <div className="flex flex-row items-center justify-center relative gap-[10px]">
                        <div className="w-11 relative rounded-[50%] bg-jenga-green h-11 z-[0]" />
                        <img
                          className="w-[18px] absolute my-0 mx-[!important] top-[13px] left-[13px] h-[18px] overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/toolbox.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                            New Project Created
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-xs text-grey">
                          <div className="relative leading-[130%] font-medium">
                            #194726861038
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[130%] font-medium">
                        16:34
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px] text-sm text-gray-200">
                      <div className="flex flex-row items-center justify-center relative gap-[10px]">
                        <div className="w-11 relative rounded-[50%] bg-jenga-green h-11 z-[0]" />
                        <img
                          className="w-[18px] absolute my-0 mx-[!important] top-[13px] left-[13px] h-[18px] overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/toolbox.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                            New Project Created
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-xs text-grey">
                          <div className="relative leading-[130%] font-medium">
                            #194726861038
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
              <div className="flex flex-row items-center justify-center py-0 px-3">
                <div className="relative leading-[18px] font-medium">
                  YESTERDAY
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 text-grey">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[130%] font-medium">
                        16:34
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px] text-sm text-gray-200">
                      <div className="flex flex-row items-center justify-center relative gap-[10px]">
                        <div className="w-11 relative rounded-[50%] bg-jenga-green h-11 z-[0]" />
                        <img
                          className="w-[18px] absolute my-0 mx-[!important] top-[13px] left-[13px] h-[18px] overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/toolbox.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-center">
                          <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                            New Project Created
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-xs text-grey">
                          <div className="relative leading-[130%] font-medium">
                            #194726861038
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashContent;

