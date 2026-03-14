import Banner from "./components/common/banner";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-row-reverse justify-center items-center bg-slate-200 ">
    <Banner/>

    <section className="w-full h-full flex flex-col justify-center gap-4 p-10">
      <div className="w-full h-full border"></div>
      <div className="w-full h-80 border"></div>
    </section>
  </section>
  );
}
