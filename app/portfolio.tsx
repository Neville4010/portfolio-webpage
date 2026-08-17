import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className = "w-auto flex-auto bg-red-50 p-5">
        <header> this is the header</header>
      </div>
      <div className = "w-auto h-screen flex-auto bg-yellow-50">
        <div className = "basis-xl flex pt-50 pb-50 block-size-100 bg-sky-500 justify-center items-center">
          <div className = "w-150 h-100 items-center bg-red-200">
            <h2> Welcome to My Website!!</h2>
            <p> have a look at the buttons below to navigate through the website</p>
            <div className= "grid grid-cols-3 gap-2 text-center">
              <button>bacon</button>
              <button type="button">bacon</button>
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
