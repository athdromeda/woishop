import Head from "next/head";
import BottomNav from "../components/bottomNav";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="mb-5 font-bold">Profile</p>
      </main>
      <BottomNav />
    </div>
  );
}
