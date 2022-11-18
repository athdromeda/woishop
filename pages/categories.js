import { HiArrowSmLeft, HiShoppingCart } from "react-icons/hi";
import { FcShop } from "react-icons/fc";
import Head from "next/head";

const CategoryItem = ({ label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-100 p-5">
        <FcShop size={30} />
      </div>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  );
};
export default function Categories() {
  return (
    <div>
      <Head>
        <title>Kategori Produk</title>
        <meta name="description" content="Belanja Makin Mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <HiArrowSmLeft size={24} className="text-slate-600" />
            <p className="text-lg font-bold ml-2">Kategori Produk</p>
          </div>
          <HiShoppingCart size={24} className="text-slate-600" />
        </div>
        <div className="flex flex-wrap gap-3">
          <CategoryItem label={"Laptops"} />
          <CategoryItem label={"Laptops"} />
          <CategoryItem label={"Laptops"} />
          <CategoryItem label={"Laptops"} />
          <CategoryItem label={"Laptops"} />
          <CategoryItem label={"Laptops"} />
        </div>
      </main>
    </div>
  );
}
