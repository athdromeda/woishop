import Head from "next/head";
import Link from "next/link";
import { MdKeyboardArrowRight, MdVerified } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { RiWhatsappLine } from "react-icons/ri";
import BottomNav from "../components/bottomNav";
import { IconContext } from "react-icons";
import {
  HiOutlineInformationCircle,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineUserAdd,
} from "react-icons/hi";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Settings />
        <LogoutButton />
        <AppVersion />
      </main>
      <BottomNav />
    </div>
  );
}

const Header = () => {
  return (
    <div className="flex flex-col bg-woigreen text-white text-sm mb-3">
      <p className="m-5 font-bold text-lg">Profil</p>
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 bg-slate-300 rounded-full mb-4">.</div>
        <p className="font-bold">Muhammad Sumbul</p>
        <div className="flex gap-3">
          <p>Phone</p>
          <p>0821-2222-2222</p>
        </div>
        <div className="w-4/5 text-xs bg-white text-slate-500 flex gap-2 items-center rounded-lg p-3 mt-3">
          <div>
            <MdVerified size={30}/>
          </div>
          <div className="flex flex-col">
            <p className="font-bold mb-2">Akun Belum Terverifikasi</p>
            <p>Verifikasi akun Anda untuk mendapatkan bonus menarik!</p>
          </div>
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

const SettingsItem = ({ icon, label, link }) => {
  return (
    <Link href={link}>
      <div className="flex justify-between my-6 font-bold">
        <div className="flex gap-2">
          <IconContext.Provider value={{ size: 20 }}>
            {icon}
          </IconContext.Provider>
          <p className="ml-2">{label}</p>
        </div>
        <MdKeyboardArrowRight size={20} />
      </div>
    </Link>
  );
};

const Settings = () => {
  return (
    <div className="text-sm">
      <p className="font-bold mb-4">Akun</p>
      <SettingsItem icon={<BiEdit />} label="Ubah Profil" link="" />
      <SettingsItem icon={<HiOutlineUserAdd />} label="Ajak Teman" link="" />
      <SettingsItem icon={<HiOutlineStar />} label="Poin" link="" />
      <SettingsItem
        icon={<HiOutlineInformationCircle />}
        label="Ketentuan Layanan"
        link=""
      />
      <SettingsItem
        icon={<HiOutlineShieldCheck />}
        label="Kebijakan Privasi"
        link=""
      />
      <SettingsItem icon={<RiWhatsappLine />} label="Bantuan" link="" />
    </div>
  );
};

const LogoutButton = () => {
  return (
    <Link href="">
      <button className="w-full py-2 mt-3 mb-1 rounded-full bg-slate-100 text-sm text-red-500 border-2 border-red-500 text-center">
        Logout
      </button>
    </Link>
  );
};

const AppVersion = () => {
  return (
    <p className="text-sm text-slate-300 text-center">WoiShop Versi 1.7</p>
  );
};
