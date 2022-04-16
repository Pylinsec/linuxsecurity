import react from "react";
// svg components
import Facebook_svg from "../../assets/svg/footerfacebook";
import Twitter_svg from "../../assets/svg/twitterfooter";
import Linkdin_svg from "../../assets/svg/linkedinfooter";
export default function Home_footer() {
  return (
    <main className="flex flex-col justify-items-center px-[15px] min-w-[410px] h-[96px] py-[20px] bg-[#0b1e50] scr990:min-w-[1024px] scr990:flex-row scr990:justify-between ">
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
    </main>
  );
}
