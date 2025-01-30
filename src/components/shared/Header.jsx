import { organizationStore } from "../../store/store";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
import { API_URL } from "../../../utils/url_config";
import { Link } from "react-router-dom";

const bgHeader = "/assets/frame.png";

const Header = () => {
  const { organization } = organizationStore.useState();
  return (
    <div className="w-full no-print">
      <div className="bg-red-500 text-white py-2">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 px-3 2xl:px-0">
          <div className="flex flex-col justify-start items-start md:flex-row gap-2 text-xs lg:text-base">
            <span className="flex gap-1 items-center text-[10px] lg:text-sm">
              <FaPhone />
              <a href={`tel:${organization?.primary_phone_number}`} className="hover:underline">
                {organization?.primary_phone_number}
              </a>
            </span>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <span className="hidden lg:flex gap-1 items-center text-[8px] lg:text-sm">
              <HiOutlineMail />
              <a
                href={`mailto:${organization?.email}`}
                className="hover:underline text-white-600"
              >
                {organization?.email}
              </a>
            </span>
          </div>
          <div className="flex justify-end gap-1 ">
            <span className="flex gap-1 items-center text-[10px] lg:text-xs">
              <FaLocationDot />
              <a
                href="https://www.google.com/maps/place/Bangladesh+Technical+Training+%26+Development+Center+(BTTDC)/@23.7494231,90.3805005,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b94e524f2a35:0x59059cf59ab925a7!8m2!3d23.7494231!4d90.3830754!16s%2Fg%2F11qnrz_6jv?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                {organization?.address}
              </a>
            </span>
          </div>
          <div className="flex justify-end gap-1 ">
            <span className="flex gap-1 text-white items-center text-[10px] lg:text-base">
            <IoLogIn />
              <Link
                to={organization?.login_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgHeader})`,
        }}
      >
        <div className="w-full container mx-auto flex justify-center items-center">
          {/* < className="flex justify-center items-center"> */}
            <div className="flex justify-center items-center p-2 md:p-4">
              <img src={`${API_URL}/uploads/organization_logo/${organization?.logo_bttdc}`} alt="Estd Logo" className="w-10 md:w-16 lg:w-24 xl:w-28 2xl:w-32" />
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className="bg-white px-2 py-1 rounded-b-full text-[6px] md:text-[10px] lg:text-sm">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত , সরকারি রেজিঃ নং
                :{organization?.gov_reg_no}, আরএজেএস --{organization?.rajs_no}
              </div>
              <div className="text-white mt-1 md:mt-2 lg:mt-3 text-[8px] md:text-xs lg:text-base">
                Alpha h & E development & Universal Foundation এর একটি
                প্রতিষ্ঠান
              </div>
              <div className="text-[#EB008F] text-base md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl logo-font font-bold mt-1 md:mt-3 lg:mt-4">
                {organization?.organization_name_bttdc}
              </div>
              <div className="text-[#292F33] text-base md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold logo-font mt-1 md:mt-3 lg:mt-4 mb-1 md:mb-3 lg:mb-7">
                {organization?.organization_name_amt}
              </div>
            </div>
            <div className="flex justify-center items-center p-2 md:p-4">
              <img src={`${API_URL}/uploads/organization_logo/${organization?.logo_amt}`} alt="Alpha Medical" className="w-10 md:w-16 lg:w-24 xl:w-28 2xl:w-32" />
            </div>
          {/* </> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
