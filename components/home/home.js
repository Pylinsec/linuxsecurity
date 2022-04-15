// madules
import react from "react";
// components
import Home_body from "./homebody";
import Home_footer from "./homefoot";
import Home_header from "./homehead";
// functions
export default function Home() {
  return (
    <main className="  flex flex-col items-center">
      <div>
        <Home_header />
      </div>
      <div>
        <Home_body />
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Home_footer />
      </div>
    </main>
  );
}
