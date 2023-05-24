import { CgMenuGridO } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { HiMicrophone } from "react-icons/hi";
import { BiCamera } from "react-icons/bi";
import Avatar from "../src/images/avatar.png";
import Google from "../src/images/googlelogo.png";
function App() {
  return (
    <div className="bg-primaryBlack h-screen flex flex-col">
      {/* for gmail and avator */}
      <div className="flex justify-end gap-4 pt-3 pr-5 items-center">
        <p className="text-white text-[13px] hover:underline">Gmail</p>
        <p className="text-white text-[13px] hover:underline">Images</p>
        <CgMenuGridO size={25} className="text-gray-300 mx-1.5" />
        <img
          src={Avatar}
          alt="avatar"
          className="object-cover w-8 h-8 rounded-full"
        />
      </div>

      {/* Google */}
      <div className="flex flex-col items-center justify-center mt-4 w-full">
        <img src={Google} alt="Google Logo" />
        <div className="relative w-full flex justify-center items-center mt-8">
          <input className="border w-[43%] border-white/40 rounded-full bg-transparent px-8 py-2.5" />
          <GoSearch size={15} className="absolute text-white/70 left-[30%]" />
          <BiCamera
            size={20}
            className="cursor-pointer absolute text-white/70 right-[30%]"
          />
          <HiMicrophone
            size={20}
            className="cursor-pointer absolute text-white/70 right-[33%]"
          />
        </div>
        {/* buttons */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="text-white text-sm bg-white/5 py-2 px-3.5 rounded border border-transparent hover:border-white/25">
            Google Search
          </button>
          <button className="text-white text-sm bg-white/5 py-2 px-3.5 rounded border border-transparent hover:border-white/25">
            I'm Feeling Lucky
          </button>
        </div>
        <div className="mt-8">
          <p className="text-[13px] text-gray-300">
            Google offered in:{" "}
            <span className="text-blue-300 hover:underline cursor-pointer">
              Kiswahili
            </span>
          </p>
        </div>
      </div>
      {/* footer */}
      <div className="fixed bg-black/30 w-full bottom-0 ">
        <div className="border-b border-b-gray-600">
          <p className="px-8 text-gray-400 text-[14px] py-3.5">Kenya</p>
        </div>
        <div className="flex">
          <div className="flex pl-8 gap-6">
            <p className=" text-gray-400 text-sm py-3.5">About</p>
            <p className=" text-gray-400 text-sm py-3.5">Advertising</p>
            <p className=" text-gray-400 text-sm py-3.5">Business</p>
            <p className=" text-gray-400 text-sm py-3.5">How Search works</p>
          </div>
          <div className="flex justify-between items-center w-2/3">
            <div>
              <p className=" text-gray-400 text-sm pl-48 hover:underline flex gap-2 items-center ">
                <img className="w-3 h-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" />
                Carbon neutral since 2007
              </p>
            </div>
            <div className="flex pl-8 gap-6">
              <p className=" text-gray-400 text-sm py-3.5">Privacy</p>
              <p className=" text-gray-400 text-sm py-3.5">Terms</p>
              <p className=" text-gray-400 text-sm py-3.5">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
