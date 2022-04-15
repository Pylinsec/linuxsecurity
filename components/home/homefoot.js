import react from "react";
// svg components
import Facebook_svg from "../../assets/svg/footerfacebook";
import Twitter_svg from "../../assets/svg/twitterfooter";
import Linkdin_svg from "../../assets/svg/linkedinfooter";
export default function Home_footer() {
  return (
    <main className=" min-w-[410px] h-[96px] py-[20px] bg-[#0b1e50]">
      <div className="flex justify-center">
        <span className="text-[14px] text-[#CCCCCCB3] mt-1">
          © 2022 Guardian Digital, Inc All Rights Reserved
        </span>
      </div>
      <div className="flex flex-row justify-end items-center mt-[10px] mr-2">
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
