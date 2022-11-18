import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  HiShoppingBag,
  HiSearch,
  HiShoppingCart,
  HiOutlineHome,
  HiOutlineCreditCard,
} from "react-icons/hi";
import {
  MdOutlineLiveHelp,
  MdOutlineNotifications,
  MdOutlineAccountCircle,
} from "react-icons/md";
import Splash from "../components/splash";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WoiShop</title>
        <meta name="description" content="Belanja Makin Mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Splash />
      <main className="gap-5 ">
        <Header />
        <Programs />
        <Features />
        <Promos />
      </main>
      <BottomNav />
    </div>
  );
}

const Carousel = () => {
  return (
    <div className="overflow-auto whitespace-nowrap pb-2">
      <div className="inline-block mr-2">
        <Image src="/banner/1.png" width={280} height={160} />
      </div>
      <div className="inline-block mx-2">
        <Image src="/banner/1.png" width={280} height={160} />
      </div>
      <div className="inline-block ml-2">
        <Image src="/banner/1.png" width={280} height={160} />
      </div>
    </div>
  );
};
const Programs = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex justify-between items-center">
        <p className="font-bold">Program WoiShop</p>
        <p className="text-slate-400 text-sm">Lihat Semua</p>
      </div>
      <div className="flex gap-2">
        <Carousel />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col w-full gap-3 justify-center">
      <div className="flex justify-between items-center">
        <p className="font-bold">Fitur Belanja</p>
        <p className="text-slate-400 text-sm">#BanggaLebihMudah</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        <FeatureItem name="WoiShop" color="#65a30d" />
        <FeatureItem name="WoiFood" color="#f59e0b" />
        <FeatureItem name="WoiPay" color="#0284c7" />
        <FeatureItem name="WoiPaket" color="#06b6d4" />
        <FeatureItem name="WoiMall" color="#22c55e" />
      </div>
    </div>
  );
};

const FeatureItem = ({ name, color }) => {
  return (
    <Link href="/categories">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-[50%] bg-gray-100 flex items-center justify-center">
          <HiShoppingBag size={30} color={color} />
        </div>
        <p className="text-sm" style={{ color: { color } }}>
          {name}
        </p>
      </div>
    </Link>
  );
};

const Promos = () => {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex justify-between items-center">
        <p className="font-bold">Promo dan Diskon</p>
        <p className="text-slate-400 text-sm">Lihat Semua</p>
      </div>
      <div className="flex gap-2">
        <Carousel />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center bg-slate-200 h-10 py-2 px-4 rounded-full border-gray-500 w-full">
        <div className="w-6">
          <HiSearch className="text-slate-400" size={20} />
        </div>
        <input
          className="bg-transparent focus:outline-none text-sm"
          placeholder="Mau cari apa?"
        />
      </div>
      <div className="w-12 h-10 ml-2 bg-slate-200 flex items-center justify-center rounded-full">
        <HiShoppingCart size={20} className="text-slate-400" />
      </div>
    </div>
  );
};

const BottomNavItem = () => {
  return <div></div>;
};

const BottomNav = () => {
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
};
