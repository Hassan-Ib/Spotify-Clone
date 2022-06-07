import React from "react";
import { FaCrown } from "react-icons/fa";
import { BsCircle, BsHeart } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import SidebarAvatar from "./SidebarAvatar";
const Sidebar = () => {
  return (
    <section className="flex flex-col h-full justify-between bg-black/90  text-white px-4 py-6 ">
      {/* top half */}

      <section className="flex flex-col text-2xl gap-8 items-center opacity-90">
        {/* go pro */}

        <button className="text-xs  min-w-max">
          <FaCrown className="mx-auto mb-[4px] text-2xl " />
          <span className="opacity-70">Go</span> Pro
        </button>

        {/* circle */}

        <button className="relative">
          <BsCircle />
          <span className="bg-orange-500 absolute w-[.7rem] h-[.7rem] rounded-full border-[2px] border-black top-0 -right-[2px] "></span>
        </button>

        {/* heart */}

        <button aria-label="likes playlist">
          <BsHeart />
        </button>
      </section>

      {/* bottom half */}

      <section className="flex flex-col items-center gap-7 text-2xl opacity-90">
        {/* light mode */}

        <button aria-label="toggle light mode">
          <MdOutlineLightMode />
        </button>

        {/* settings */}

        <button aria-label="settings">
          <RiSettingsLine />
        </button>
        <SidebarAvatar />
      </section>
    </section>
  );
};

export default Sidebar;
