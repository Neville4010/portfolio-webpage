import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container m-auto grid grid-rows-8 md:grid-rows-10 lg:grid-rows-12 grid-cols-6 gap-4 md:grid-cols-8 lg:grid-cols-10">
        <div className="tile col-span-6 bg-teal-500 md:col-span-8 lg:col-span-10 row-span-">
          <h1 className="tile-marker">Header</h1>
        </div>
        <div className="tile col-span-3 col-start-2 lg:col-start-2 lg:row-end-8 lg:row-start-4 row-start-4 row-span-4 justify-center md:col-span-6 lg:col-span-5 content-stretch row-end-16 bg-amber-500 md:col-span-2 lg:col-span-7 place-self-center-safe">
          <div className="row-span-full grid grid-rows-subgrid gap-4">
            <div className="row-start-1 col-start-2 flex items-center justify-center rounded bg-blue-200 p-4">
              Welcome!
            </div>
            <div className="row-start-2 row-span-2 flex col-span-3 items-center justify-center rounded bg-red-200 p-4">
              This is where the body of text will go</div>
              <div className="row-start-4 col-start-1 col-end-2 flex items-center justify-center rounded bg-green-200 p-4">
                (portfolio)
              </div>
              <div className="row-start-4 col-start-2 col-end-3 flex items-center justify-center rounded bg-green-200 p-4">
                (cv/about section)
              </div>
              <div className="row-start-4 col-start-3 col-end-4 flex items-center justify-center rounded bg-green-200 p-4">
                (coding blog section)
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
