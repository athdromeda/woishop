import { HiOutlineCreditCard, HiOutlineHome } from "react-icons/hi";
import {
  MdOutlineLiveHelp,
  MdOutlineNotifications,
  MdOutlineAccountCircle,
} from "react-icons/md";

export default function BottomNav() {
  return (
    <div className="p-2 pt-0 flex text-sm sticky bottom-0 bg-white justify-around items-end w-[360px] h-[52px]">
      <div className="flex flex-col items-center">
        <HiOutlineHome size={20} className="text-woigreen" />
        <p className="text-xs text-woigreen">Beranda</p>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineLiveHelp size={20} className="text-slate-400" />
        <p className="text-xs text-slate-400">Bantuan</p>
      </div>
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12  bg-woigreen flex items-center justify-center rounded-full border-4 border-white">
            <HiOutlineCreditCard size={22} className="text-white " />
          </div>
          <p className="text-xs mt-0 text-slate-400">Transaksi</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineNotifications size={20} className="text-slate-400" />
        <p className="text-xs text-slate-400">Notifikasi</p>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineAccountCircle size={20} className="text-slate-400" />
        <p className="text-xs text-slate-400">Profil</p>
      </div>
    </div>
  );
}
