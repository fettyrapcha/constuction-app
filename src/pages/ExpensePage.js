import React from 'react'
import SideBar from "../components/SideBar";
import TittleBar from "../components/TittleBar";
import Expenses from '../components/Expenses';

export default function ExpensePage() {
  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-row items-start justify-start gap-[20px] text-left text-lg text-black font-inter">
    <SideBar />
    <div className="flex flex-col items-center justify-start gap-[22px]">
      <TittleBar />
      <Expenses />
    </div>
  </div>
  )
}
