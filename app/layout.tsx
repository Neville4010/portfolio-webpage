import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nim portfolio",
  description: "coding portolio for nim",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
      <div className = "header w-auto flex-auto p-4">
        <button className = "button daynightbutton"> day</button>
      </div>
      {children}</body>
      <div className="footer bottom-0, left-0, right-0 w-auto flex-auto p-4">
        <footer className="justify-items-end">
          <div className= "grid grid-cols-2 justify-end-safe text-center gap-1px relative right-0">
          <button className = "button"> li</button>
          <button className = "button"> git</button>
          </div>
        </footer>
      </div>
    </html>
  );
}
