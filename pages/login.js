import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Kategori Produk</title>
        <meta name="description" content="Belanja Makin Mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center text-center justify-between">
        <div className="flex flex-col w-full items-center text-center">
          <Image
            src="/elements/promo-icon.svg"
            width={226}
            height={231}
            alt="promo-icon"
            className="mb-5 mt-5"
          />
          <p className="text-xl font-bold text-woigreen">Hai, fren!</p>
          <p className="mb-6">Selamat datang di WoiShop</p>
          <div className="flex bg-slate-100 w-full text-sm px-6 py-3 rounded-full items-center">
            <div className="mr-2">
              <HiOutlinePhone className="text-slate-600" />
            </div>
            <input
              placeholder="Nomor HP Anda"
              className="bg-transparent focus:outline-none"
            />
          </div>
          <Link href="/" className="w-full">
            <button className="bg-woigreen text-white text-sm font-bold w-full px-6 py-3 my-2 rounded-full">
              Masuk
            </button>
          </Link>
          <div>
            <p className="text-sm text-slate-500">————— atau login lewat —————</p>
          </div>
          <button className="bg-white border-woigreen flex items-center justify-center text-sm font-bold border-2 w-full px-6 py-3 my-2 rounded-full">
              <FcGoogle size={18}/>
              <p className="ml-1">Google</p>
          </button>
          <p className="text-sm text-slate-500">
            Belum punya akun? Daftar sini
          </p>
        </div>
        <p className="text-xs mt-3 text-slate-400 text-center">
          Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan dan
          Kebijakan Privasi
        </p>
      </main>
    </div>
  );
}
