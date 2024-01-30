import { useCallback } from "react";

const ProductCard = () => {
  const cardData = [
    {
      imageUrl: '/rectangle-1@2x.png',
      location: 'Industrial Park, Accra',
      description: '15 story office complex for all business types',
      budget: '$4,300',
    },
    {
      imageUrl: '/rectangle-1@2x.png',
      location: 'Industrial Park, Accra',
      description: '15 story office complex for all business types',
      budget: '$4,300',
    },
    {
      imageUrl: '/rectangle-1@2x.png',
      location: 'Industrial Park, Accra',
      description: '15 story office complex for all business types',
      budget: '$4,300',
    },
    {
      imageUrl: '/rectangle-1@2x.png',
      location: 'Industrial Park, Accra',
      description: '15 story office complex for all business types',
      budget: '$4,300',
    },
    {
      imageUrl: '/rectangle-1@2x.png',
      location: 'Industrial Park, Accra',
      description: '15 story office complex for all business types',
      budget: '$4,300',
    },
    {
      imageUrl: '/rectangle-1@2x.png',
      location: 'Industrial Park, Accra',
      description: '15 story office complex for all business types',
      budget: '$4,300',
    },
   
  ];

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-sm text-grey-500 font-inter">
      <div className="flex flex-row items-center justify-start py-4 px-9 gap-[4px]">
        <div className="rounded-md bg-white overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-grey-800">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[-0.2px] leading-[20px] font-medium">
              In-progress
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden flex flex-row items-center justify-start py-2 px-3">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[-0.2px] leading-[20px] font-medium">
              Completed
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden flex flex-row items-center justify-start py-2 px-3">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[-0.2px] leading-[20px] font-medium">
              Cancelled
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1155px] rounded-tl rounded-tr-none rounded-br-none rounded-bl flex flex-row flex-wrap items-start justify-start py-6 px-9 box-border gap-[36px] text-light-black">
      {cardData.map((card, index) => (
        <div className="w-[337px] rounded-sm bg-white flex flex-col items-start justify-start p-4 box-border gap-[16px]">
          <img
            className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
            alt=""
            src="/rectangle-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[120%] font-medium">
                {card.location}
                </div>
              </div>
              <div className="flex flex-row items-center justify-center text-xs text-grey">
                <div className="relative leading-[120%]">
                {card.description}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-xs">
              <div className="relative leading-[120%]">
                <span>{`Budget `}</span>
                <span className="tracking-[-0.2px] font-semibold">{card.budget}</span>
              </div>
            </div>
          </div>
        </div>
          ))}
        
           
        
      </div>
    </div>
  );
};

export default ProductCard;
