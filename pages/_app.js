import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-800 flex justify-center text-woiblack">
      <div className="w-100 bg-white" style={{ maxWidth: "360px" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
