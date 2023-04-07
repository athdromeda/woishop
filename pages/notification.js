import Head from "next/head";
import { useState } from "react";
import BottomNav from "../components/bottomNav";

const notifications = [
  {
    date: "12 Feb 2021",
    title: "Pesanan ditolak",
    caption: "Pesanan dibatalkan customer",
    unread: true,
  },
  {
    date: "12 Feb 2021",
    title: "Pesanan ditolak",
    caption: "Pesanan dibatalkan customer",
  },
  {
    date: "12 Feb 2021",
    title: "Pesanan ditolak",
    caption: "Pesanan dibatalkan customer",
  },
];

export default function Notification() {
  const [notif, setNotif] = useState(notifications);

  return (
    <div>
      <Head>
        <title>Notification</title>
        <meta name="description" content="Notifikasi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="mb-5 font-bold">Notifikasi</p>
        {notif.map((e, i) => (
          <NotificationItem
            key={i}
            date={e.date}
            title={e.title}
            caption={e.caption}
            unread={e.unread}
          />
        ))}
      </main>
      <MarkReadButton
        markRead={() =>
          setNotif((notif) =>
            notif
              .filter((e) => e.unread === true)
              .map((e) => (e.unread = false))
          )
        }
      />
      <BottomNav active="/notification" />
    </div>
  );
}

const NotificationItem = ({ date, title, caption, unread = false }) => {
  return (
    <div className="bg-[#fafafa] rounded-lg p-4 mb-3">
      <div className="flex justify-between text-xs">
        <p className={!unread && "text-slate-400"}>{date}</p>
        {unread && (
          <div className="bg-woigreen text-white py-1 px-3 text-xs rounded-full font-bold">
            Baru
          </div>
        )}
      </div>
      <p className={"font-bold text-sm " + (!unread && "text-slate-400")}>
        {title}
      </p>
      <p
        className={"text-sm " + (!unread ? "text-slate-400" : "text-slate-500")}
      >
        {caption}
      </p>
    </div>
  );
};

const MarkReadButton = ({ markRead }) => {
  return (
    <button
      onClick={markRead}
      className="fixed bottom-24 left-1/2 translate-x-[-50%] text-white text-xs"
    >
      <div className="bg-woigreen rounded-lg items-center w-full py-2 px-4">
        Tandai Semua Dibaca
      </div>
    </button>
  );
};
