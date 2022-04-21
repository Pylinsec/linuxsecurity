import react from "react";
// svg components
import Facebook_svg from "../../assets/svg/footerfacebook";
import Twitter_svg from "../../assets/svg/twitterfooter";
import Linkdin_svg from "../../assets/svg/linkedinfooter";
// Data
import { news_list } from "../data/data";
import { advisories_list } from "../data/data";
import { how_list } from "../data/data";
import { features_list } from "../data/data";
import { about_list } from "../data/data";

export default function Home_footer() {
  return (
    <main className=" min-w-[410px]">
      <section className="bg-[#1D1D1D] px-[20px]">
        <div className="mt-[20px]">
          <h2 className="text-[#FFFFFF] text-[16px] mb-[20px]">News</h2>
          <div className="flex flex-col leading-[25px] font-normal">
            {news_list.map(item => (
              <span className="text-[#FFFFFF99] text-[14px] pl-[10px] hover:text-[#FFFFFF]">
                <a href="">{item}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-[20px]">
          <h2 className="text-[#FFFFFF] text-[16px] mb-[20px]">Advisories</h2>
          <div className="flex flex-col leading-[25px] font-normal">
            {advisories_list.map(item => (
              <span className="text-[#FFFFFF99] text-[14px] pl-[10px] hover:text-[#FFFFFF]">
                <a href="">{item}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-[20px]">
          <h2 className="text-[#FFFFFF] text-[16px] mb-[20px]">HOWTOs</h2>
          <div className="flex flex-col leading-[25px] font-normal">
            {how_list.map(item => (
              <span className="text-[#FFFFFF99] text-[14px] pl-[10px] hover:text-[#FFFFFF]">
                <a href="">{item}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-[20px]">
          <h2 className="text-[#FFFFFF] text-[16px] mb-[20px]">Features</h2>
          <div className="flex flex-col leading-[25px] font-normal">
            {features_list.map(item => (
              <span className="text-[#FFFFFF99] text-[14px] pl-[10px] hover:text-[#FFFFFF]">
                <a href="">{item}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-[20px]">
          <h2 className="text-[#FFFFFF] text-[16px] mb-[20px]">About us</h2>
          <div className="flex flex-col leading-[25px] font-normal">
            {about_list.map(item => (
              <span className="text-[#FFFFFF99] text-[14px] pl-[10px] hover:text-[#FFFFFF]">
                <a href="">{item}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="px-[15px] mt-[20px]">
          <h2 className="text-[#FFFFFF] text-[16px] mb-[20px]">Powered By</h2>
          <div>
            <img src="../../assets/img/footerlogo.png" />
          </div>
          <h1 className="text-[#FFFFFF] text-[14px]">
            Linux Security - Your source for Top Linux News, Advisories, HowTo's
            and Feature Release.
          </h1>
        </div>
      </section>
      <section className="flex flex-col justify-items-center px-[15px]  h-[96px] py-[20px] bg-[#0b1e50] scr990:min-w-[1024px] scr990:flex-row scr990:justify-between ">
        <div className="flex justify-center items-center pl-[43px] scr768:justify-start">
          <span className="text-[14px] text-[#CCCCCCB3] mt-1">
            © 2022 Guardian Digital, Inc All Rights Reserved
          </span>
        </div>
        <div className="pr-[40px] flex flex-row justify-end justify-items-center items-center mt-[10px] mr-2">
          <span className="mr-[10px]">
            <Facebook_svg />
          </span>
          <span className="mr-[10px]">
            <Twitter_svg />
          </span>
          <span className="mr-[10px]">
            <Linkdin_svg />
          </span>
        </div>
      </section>
    </main>
  );
}
