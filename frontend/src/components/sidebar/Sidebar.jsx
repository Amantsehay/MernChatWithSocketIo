import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden p-4 text-slate-500"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-slate-500 border-r border-slate-500 p-4 flex flex-col z-50 md:z-auto w-64 md:w-auto`}
      >
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
