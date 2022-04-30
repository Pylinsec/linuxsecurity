import react from "react";
import Menu_list from "./menu";
//import hook
import { useState } from "react";

//import svg components
import Rss_svg from "../../assets/svg/rss";
import Menu_svg from "../../assets/svg/menu";
import Facebook_svg from "../../assets/svg/footerfacebook";
import Twitter_svg from "../../assets/svg/twitterfooter";
import Linkdin_svg from "../../assets/svg/linkedinfooter";

export default function Home_header() {
  const [Menu, Set_menu] = useState(false);

  //local function
  const Handel_menu = () => {
    Set_menu(prev => !prev);
  };
  return (
    <main className=" flex flex-row px-[15px] min-w-[410px] h-[106px] py-[15px] border-t-[5px] border-solid border-[#1d55c1] ">
      <section className="w-[163px]  flex flex-row  justify-items-center items-center">
        <button onClick={Handel_menu}>
          <Menu_svg />
        </button>
        <div className=" z-10">
          {Menu && <Menu_list close_menu={Set_menu} />}
        </div>
        <div>
          <img
            className="pt-[-50px] h-[101px] w-[92px] mt-[10px] ml-[5px]"
            src="penguin.png"
            alt="penguin"
          />
        </div>
      </section>
      <section className="w-[266px] flex gap-[5px] justify-items-center items-center ">
        <ul className="flex flex-row  w-[107px] justify-between mr-[10px]">
          <li>
            <Facebook_svg />
          </li>
          <li>
            <Twitter_svg />
          </li>
          <li>
            <Linkdin_svg />
          </li>
          <li>
            <Rss_svg />
          </li>
        </ul>
        <div className="w-[41px] mr-[17px]">
          <a className="w-[41px] h-[21px]" href="">
            Login
          </a>
        </div>
        <div className="w-[90px] h-[26px] flex justify-items-center items-center ">
          <a
            className=" rounded-[100px] border-[1px] border-solid px-[14px] py-[3px] font-medium cursor-pointer text-[14px]
           border-[#1d55c1] text-[#1d55c1] bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#1d55c1] "
          >
            contribute
          </a>
        </div>
      </section>
    </main>
  );
}
