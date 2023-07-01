import Navbar from "../components/Navbar";


export default function Homepaage() {
  return (
    <>
    <Navbar/>
      <h1 className="text-center font-extrabold text-3xl">Ini Home Page</h1>
      <a href="/about"> ke halaman about</a>
      <a href="/whatever"> ke halaman hitung</a>
    </>
  );
}
