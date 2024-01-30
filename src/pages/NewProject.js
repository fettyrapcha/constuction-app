
import SideBar from "../components/SideBar";
import TittleBar from "../components/TittleBar";
import DashContent from "../components/DashContent";

const NewProject = () => {


  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-row items-start justify-start gap-[20px] text-left text-lg text-black font-inter">
    <SideBar />
    <div className="flex flex-col items-start justify-start gap-[22px]">
      <TittleBar />
      <DashContent />
    </div>
  </div>
  );
};

export default NewProject;
