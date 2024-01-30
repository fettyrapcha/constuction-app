const Transaction = () => {
    return (
      <div className="w-full relative flex flex-row items-start justify-start gap-[18px] text-center text-sm text-white font-inter">
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
          <div className="self-stretch rounded-lg bg-white flex flex-col items-center justify-start pt-6 px-6 pb-9 gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
              <div className="self-stretch relative rounded-xl h-32 overflow-hidden shrink-0 bg-[url('/public/frame-44810@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[24px] left-[29px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative tracking-[-0.2px] leading-[120%] font-medium">
                      TOTAL BALANCE
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center text-[28px]">
                    <b className="relative tracking-[-0.2px] leading-[120%]">
                      $2,542.02
                    </b>
                  </div>
                </div>
                <div className="absolute top-[25px] right-[21px] rounded-lg [background:linear-gradient(180deg,_rgba(223,_225,_231,_0),_rgba(223,_225,_231,_0.05)),_#fff] shadow-[0px_-1px_2px_rgba(18,_55,_105,_0.08)_inset] overflow-hidden flex flex-row items-center justify-end py-1 px-2.5 gap-[4px] text-xs text-grey-800 border-[1px] border-solid border-sec-cta-stroke">
                  <div className="relative tracking-[-0.2px] leading-[20px] font-medium">
                    USD
                  </div>
                  <img
                    className="w-3 relative h-3 object-contain"
                    alt=""
                    src="/arrow-forward-ios@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-left text-dimgray">
                <div className="flex-1 relative rounded-xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-[85px] overflow-hidden border-[1px] border-solid border-gainsboro">
                  <div className="absolute top-[12px] left-[16px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative tracking-[-0.2px] leading-[24px]">
                      Deposits
                    </div>
                    <b className="relative text-lg tracking-[-0.2px] leading-[26px] text-black">
                      $17,002.02
                    </b>
                  </div>
                </div>
                <div className="flex-1 relative rounded-xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-[85px] overflow-hidden border-[1px] border-solid border-gainsboro">
                  <div className="absolute top-[12px] left-[16px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative tracking-[-0.2px] leading-[24px] font-medium">
                      Expenses
                    </div>
                    <b className="relative text-lg tracking-[-0.2px] leading-[26px] text-black">
                      $2,542.02
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[64px] text-xs text-light-black">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                  <img
                    className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/receipt.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[120%]">
                    Expense
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                  <img
                    className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/arrowdown.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[120%]">
                    Deposit
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                  <img
                    className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/paperplanetilt.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.2px] leading-[120%]">
                    Transfer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-6 gap-[28px] text-left text-grey">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative tracking-[0.2px] leading-[16px] uppercase font-semibold">
                PROJECT INFORMATION
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/pencilsimpleline.svg"
              />
            </div>
            <img
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[188px] shrink-0 object-cover"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px] text-[16px] text-light-black">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[120%] font-medium">
                    Industrial Park, Accra
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-sm text-grey">
                  <div className="relative leading-[120%]">
                    15 story office complex for all business types
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[120%]">
                    <span>{`Floors: `}</span>
                    <span className="tracking-[-0.2px] font-semibold">3</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[120%]">
                    <span>{`Budget: `}</span>
                    <span className="tracking-[-0.2px] font-semibold">
                      $33,000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[120%]">
                    <span>{`Start Date: `}</span>
                    <span className="tracking-[-0.2px] font-semibold">
                      04.04.2023
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[120%]">
                    <span>{`End Date: `}</span>
                    <span className="tracking-[-0.2px] font-semibold">
                      16.10.2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 rounded-lg bg-white flex flex-col items-start justify-start p-6 box-border gap-[24px] text-left text-gray-200">
          <div className="flex flex-row items-center justify-center text-center text-[20px]">
            <div className="relative leading-[120%] text-black font-medium">
              Transaction History
            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 px-6 gap-[96px] text-slategray border-[1px] border-solid border-whitesmoke-200">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-[96px] text-gray-100">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-6">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-12 relative rounded-[50%] bg-whitesmoke-100 h-12 z-[0]" />
                    <img
                      className="w-6 absolute my-0 mx-[!important] top-[12px] left-[12px] h-6 overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/receipt.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        Expense created
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-xs text-grey">
                      <div className="relative tracking-[-0.2px] leading-[130%] font-medium">
                        #194726861038
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
            <div className="w-[116px] flex flex-col items-start justify-start text-light-black">
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
              <div className="w-28 flex flex-row items-center justify-center py-[31px] px-0 box-border">
                <div className="relative tracking-[-0.2px] leading-[130%] font-semibold">
                  +3 640 USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Transaction;
  