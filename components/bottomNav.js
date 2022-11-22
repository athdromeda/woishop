import Link from "next/link";
import { HiOutlineCreditCard, HiOutlineHome } from "react-icons/hi";
import {
  MdOutlineLiveHelp,
  MdOutlineNotifications,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { IconContext } from "react-icons";

const NavWrapper = ({ icon, label, activeTab, link }) => {
  return (
    <Link href={link}>
      <IconContext.Provider value={{size: 20}}>
        <div
          className={
            "flex flex-col items-center " +
            (activeTab ? "text-woigreen" : "text-slate-400")
          }
        >
          {icon}
          <p className="text-xs">{label}</p>
        </div>
      </IconContext.Provider>
    </Link>
  );
};

export default function BottomNav({ activeTab = "" }) {
  return (
    <div className="p-2 pt-0 flex text-sm sticky bottom-0 bg-white justify-around items-end w-[360px] h-[52px]">
      <NavWrapper
        icon={<HiOutlineHome/>}
        label="Beranda"
        link="/"
        active={activeTab === "Beranda"}
      />
      <NavWrapper
        icon={<MdOutlineLiveHelp/>}
        label="Bantuan"
        link="/help"
        active={activeTab === "Bantuan"}
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
        active={activeTab === "Notifikasi"}
      />
      <NavWrapper
        icon={<MdOutlineAccountCircle/>}
        label="Profil"
        link="/profile"
        active={activeTab === "Profil"}
      />
    </div>
  );
}
