import Head from "next/head";
import BottomNav from "../components/bottomNav";

export default function Notification() {
  return (
    <div>
      <Head>
        <title>Help</title>
        <meta name="description" content="Bantuan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="mb-5 font-bold">Bantuan</p>
      </main>
      <BottomNav />
    </div>
  );
}
