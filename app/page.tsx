import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className = "header w-auto flex-auto p-5">
        <button className = "button daynightbutton"> day</button>
      </div>
      <div className = "mainscreen w-auto h-screen flex-auto">
        <div className = "basis-xl flex pt-40 pb-40 block-size-100 justify-center items-center">
          <div className = "mainblock w-220 h-150 items-center">
            <h2 className="p-2"> Welcome to My Website!!</h2>
            <p className = "w-220 h-120 text-center"> have a look at the buttons below to navigate through the website</p>
            <div className= "grid grid-cols-3 gap-2 text-center bottom-0">
              <button type="button"><a href = "portfolio.tsx">bacon</a></button>
              <button type="button"><a href = "about.tsx">bacon</a></button>
              <button type="button">bacon</button>
            </div>
          </div>
        </div>
        <div className="bottom-0, left-0, right-0">
        <footer> this is the footer</footer>
        </div>
      </div>
    </main>
  );
}
