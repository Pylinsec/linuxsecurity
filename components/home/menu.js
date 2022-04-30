import react from "react";
import { useState } from "react";
import { news_list } from "../data/data";

export default function Menu_list({ close_menu }) {
  const [newsb, Set_news] = useState(false);

  const Handel_newsb = () => {
    Set_news(prev => !prev);
  };
  return (
    <main className="h-screen w-[300px] text-[#FFFFFF99] px-5 py-5 bg-[#] left-0 bg-[#1D1D1D] absolute ">
      <section className=" flex justify-end  ">
        <span
          onClick={() => close_menu(false)}
          className="px-[6px] py-[1px] flex justify-items-center items-center text-center hover:rounded-full text-[#FFFFFF] font-bold  hover:bg-gray-500 hover:border-1"
        >
          x
        </span>
      </section>
      <section className=" pt-[30px]">
        <div>
          <div className="flex flex-row justify-between ">
            <div className="w-full border-b border-gray-500 ">
              <h2 className="text-[#FFFFFF] text-[16px] mb-[20px] ">News</h2>
            </div>
            <div
              className="cursor-pointer px-[2px] h-[24px] w-[24px] bg-center "
              onClick={Handel_newsb}
              style={{
                background: newsb
                  ? "url('/icons/minus.svg')"
                  : "url('icons/plus.svg')",
              }}
            ></div>
          </div>
          <div className="flex flex-col font-normal ">
            {newsb &&
              news_list.map(item => (
                <span className="text-[#FFFFFF99] text-[14px] pl-[10px] hover:text-[#FFFFFF] ">
                  <a href="">{item}</a>
                </span>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
