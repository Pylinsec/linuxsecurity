// madules
import react from "react";
// components
import Home_body from "./homebody";
import Home_footer from "./homefoot";
import Home_header from "./homehead";
// functions
export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      <div className="absolute inset-x-0 top-0 ">
        <Home_header />
      </div>
      <div className="relative inset-0 top-[106px] ">
        <Home_body />
      </div>
      <div className="relative inset-x-0 top-1 ">
        <Home_footer />
      </div>
    </main>
  );
}
