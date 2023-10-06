import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import DropDownModal from "./contactsModal/Modal.";

const Contacts = () => {
  return (
    <>
      <section className="bg-[#262626] lg:basis-[29%] basis-full min-h-screen p-4 text-[#8f9198] md:ml-[84px] lg:ml-0 lg:relative md:left-[90px]">
        <div className="md:max-w-[15rem]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold">Contact Page</h1>
            </div>
            <div className="flex justify-end hover:bg-">
              <DropDownModal />
            </div>
            
          </div>

          <div className="relative flex-grow flex flex-row-reverse">
            <input
              type="text"
              placeholder="Search contacts..."
              className="bg-[#353537] sm:h-10 w-full outline-none rounded md:placeholder:text-base placeholder:text-xs"
            />
            <div className="absolute top-[8px] md:top-[12px] pr-6">
              <AiOutlineSearch className="sm:h-5 sm:w-5 " />
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default Contacts;
