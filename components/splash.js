import { useEffect, useState } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { ImSpinner2 } from "react-icons/im";

export default function Splash() {
  const [hide, setHide] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setHide("hidden");
    }, 1000);
  }, []);
  return (
    <div className={"w-[360px] h-full absolute z-10 bg-white " + hide}>
      <div className="flex flex-col items-center justify-between mt-24">
        <div className="animate-pulse flex flex-col items-center">
          <HiShoppingBag className="text-woigreen" size={72} />
          <p className="font-bold text-woigreen text-xl mb-3">WoiShop</p>
        </div>
        <p className="font-bold">#BelanjaLebihMudah</p>
        <ImSpinner2 size={30} className="animate-spin mt-10 text-woigreen" />
      </div>
    </div>
  );
}
