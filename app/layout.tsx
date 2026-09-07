import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "nim portfolio",
  description: "coding portolio for nim",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="min-h-screen flex flex-col">
        <div className = "header w-auto flex-auto p-4">
          <button className = "button daynightbutton"> day</button>
        </div>
      {children}
        <div className="footer bottom-0, left-0, right-0 w-auto flex-auto p-4">
          <footer className="justify-items-end">
            <div className= "grid grid-cols-2 justify-end-safe text-center gap-1px relative right-0">
              <button className = "button"><Link href = "https://www.linkedin.com/in/niamhislamurphy">Linkedin</Link></button>
              <button className = "button"><Link href = "https://github.com/Neville4010">Github</Link></button>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
