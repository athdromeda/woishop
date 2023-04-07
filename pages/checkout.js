import { HiSearch, HiShoppingBag, HiSortAscending } from "react-icons/hi";
import Head from "next/head";
import BottomNav from "../components/bottomNav";
import { useState } from "react";

const transactions = [
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "baru",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "baru",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "baru",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "siap dikirim",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "siap dikirim",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "selesai",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "selesai",
  },
  {
    id: 0,
    platform: "WoiShop",
    amount: 4,
    price: 12000,
    date: "21 Apr 2021 - 13.00",
    status: "selesai",
  },
];

export default function Checkout() {
  const [activeTab, setActiveTab] = useState("1");

  const activeStyle = "border-woigreen text-woigreen";
  const inactiveStyle = "border-slate-300 text-slate-300";

  return (
    <div>
      <Head>
        <title>Kategori Produk</title>
        <meta name="description" content="Belanja Makin Mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gap-4">
        <p className="font-bold">Daftar Pesanan</p>
        <div className="flex font-bold text-xs bg-white w-full">
          <button
            onClick={() => setActiveTab("1")}
            className={
              "flex justify-center w-full p-2 border-b-2 " +
              (activeTab === "1" ? activeStyle : inactiveStyle)
            }
          >
            Transaksi Berlangsung
          </button>
          <button
            onClick={() => setActiveTab("2")}
            className={
              "flex justify-center w-full p-2 border-b-2 " +
              (activeTab === "2" ? activeStyle : inactiveStyle)
            }
          >
            Riwayat Pemesanan
          </button>
        </div>
        <Tab active={activeTab} />
      </main>
      <BottomNav active="/checkout" />
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className="flex gap-2 w-full">
      <div className="flex items-center gap-2 w-full bg-slate-50 rounded-full px-3 py-2">
        <p>
          <HiSearch />
        </p>
        <input
          placeholder="Cari Transaksi"
          className="text-sm bg-transparent "
        />
      </div>
      <p className="flex items-center bg-slate-50 text-woigreen rounded-full px-2 py-2">
        <HiSortAscending />
      </p>
    </div>
  );
};

const Card = ({ platform, amount, price, date, status }) => {
  const statusBgColor = {
    baru: "bg-woigreen",
    "siap dikirim": "bg-orange-500",
    selesai: "bg-gray-500",
  };

  return (
    <div className="flex flex-col text-sm bg-slate-50 my-4 rounded-lg p-3">
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-1 text-woigreen">
          <p>
            <HiShoppingBag />
          </p>
          <p className="font-bold">{platform}</p>
        </div>
        <p
          className={
            "text-white text-xs font-bold py-1 px-3 rounded-full " +
            statusBgColor[status]
          }
        >
          {status}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-slate-400">Total pesanan {amount} produk</p>
        <p className="font-bold">Rp. {price}</p>
        <p className="text-xs text-slate-400">{date}</p>
      </div>
    </div>
  );
};

const Tab = ({ active }) => {
  return (
    <div>
      <SearchBar />
      <div>
        {active === "1"
          ? transactions.filter(e => e.status!=="selesai").map((e, i) => {
              return (
                <Card
                  key={i}
                  platform={e.platform}
                  amount={e.amount}
                  price={e.price}
                  date={e.date}
                  status={e.status}
                />
              );
            })
          : transactions.filter(e => e.status==="selesai").map((e, i) => {
              return (
                <Card
                  key={i}
                  platform={e.platform}
                  amount={e.amount}
                  price={e.price}
                  date={e.date}
                  status={e.status}
                />
              );
            })}
      </div>
    </div>
  );
};
