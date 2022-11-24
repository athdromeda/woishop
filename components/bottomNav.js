import Link from "next/link";
import { HiOutlineCreditCard, HiOutlineHome } from "react-icons/hi";
import {
  MdOutlineLiveHelp,
  MdOutlineNotifications,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";

const NavWrapper = ({ icon, label, active, link, setActive }) => {
  return (
    <Link href={link}>
      <IconContext.Provider value={{size: 20}}>
        <div
          className={
            "flex flex-col items-center " +
            (active ? "text-woigreen" : "text-slate-400")
          }

          onClick = {()=>setActive(link)}
        >
          {icon}
          <p className="text-xs">{label}</p>
        </div>
      </IconContext.Provider>
    </Link>
  );
};

export default function BottomNav({ active = "/" }) {
  const [activeTab, setActiveTab] = useState(active)

  return (
    <div className="p-2 pt-0 flex text-sm sticky bottom-0 bg-white justify-around items-end w-[360px] h-[52px]">
      <NavWrapper
        icon={<HiOutlineHome/>}
        label="Beranda"
        link="/"
        active={activeTab === "/"}
        setActive = {setActiveTab}
      />
      <NavWrapper
        icon={<MdOutlineLiveHelp/>}
        label="Bantuan"
        link="/help"
        active={activeTab === "/help"}
        setActive = {setActiveTab}
      />
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12  bg-woigreen flex items-center justify-center rounded-full border-4 border-white">
            <HiOutlineCreditCard size={22} className="text-white " />
          </div>
          <p className="text-xs mt-0 text-slate-400">Transaksi</p>
        </div>
      </div>
      <NavWrapper
        icon={<MdOutlineNotifications/>}
        label="Notifikasi"
        link="/notification"
        active={activeTab === "/notification"}
        setActive = {setActiveTab}
      />
      <NavWrapper
        icon={<MdOutlineAccountCircle/>}
        label="Profil"
        link="/profile"
        active={activeTab === "/profile"}
        setActive = {setActiveTab}
      />
    </div>
  );
}
