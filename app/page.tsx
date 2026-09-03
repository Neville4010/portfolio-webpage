import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className = "mainscreen w-auto h-screen flex-auto">
        <div className = "basis-xl flex pt-20 pb-10 block-size-200 justify-center items-center">
          <div className = "mainblock w-200 h-120 md:max-2xl:flex items-center">
            <h2 className="p-2"> Welcome to My Website!!</h2>
            <p className = "w-180 h-95 sm:max-2xl:flex text-center"> have a look at the buttons below to navigate through the website</p>
            <div className= "grid grid-cols-3 gap-2 text-center bottom-0">
              <button className="linkbutton"><Link href = "/About">About</Link></button>
              <button className="linkbutton"><Link href = "/Portfolio">Portfolio</Link></button>
              <button className="linkbutton"><Link href = "/Blog">Blog</Link></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
