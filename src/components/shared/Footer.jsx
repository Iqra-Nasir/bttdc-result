import { organizationStore } from "../../store/store";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const { footerInfo } = organizationStore.useState();
  return (
    <div className="bg-[#0D1022] py-8 no-print">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5">
        {/* About Us */}
        <div>
          <h1 className="text-white text-base  font-bold">আমাদের সম্পর্কে</h1>
          <p className="mt-4 sm:mt-6 text-white text-sm sm:text-sm">
           {footerInfo?.footer_text}
          </p>

          <div className="flex gap-4 items-center mt-4 sm:mt-6">
            <Link to={footerInfo?.facebook_link} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl sm:text-2xl md:text-3xl text-white" />
            </Link>
            <Link to={footerInfo?.twitter_link} target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle className="text-xl sm:text-2xl md:text-3xl text-white" />
            </Link>
            <Link to={footerInfo?.instagram_link} target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="text-xl sm:text-2xl md:text-3xl text-white" />
            </Link>
            <Link to={footerInfo?.linkedin_link} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-white" />
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h1 className="text-white text-base  font-bold">যোগাযোগ করুন</h1>
          <div className="mt-4 sm:mt-6 text-white text-sm sm:text-base space-y-4">
            <div className="flex gap-4 items-start">
              <IoCallOutline className="text-xl " />
              <div className="text-sm flex flex-col">
                <p>
                  <a href={`tel:${footerInfo?.optional_phone_number1}`} className="hover:underline text-sm">
                    {footerInfo?.optional_phone_number1}
                  </a>
                </p>
                <p>
                  <a href={`tel:${footerInfo?.optional_phone_number2}`} className="hover:underline text-sm">
                    {footerInfo?.optional_phone_number2}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href={`tel:${footerInfo?.optional_phone_number3}`} className="hover:underline text-sm">
                    {footerInfo?.optional_phone_number3}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href={`tel:${footerInfo?.optional_phone_number4}`} className="hover:underline text-sm">
                    {footerInfo?.optional_phone_number4}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <CiLocationOn className="text-sm" />

              <a
                href={`${footerInfo?.map_link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm text-white"
              >
                {footerInfo?.footer_address}
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <MdOutlineEmail className="text-sm" />

              <a
                href="mailto:bttdcbd@gmail.com"
                className="hover:underline text-sm text-white-600"
              >
                {footerInfo?.footer_email}
              </a>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-white text-base  font-bold">শীর্ষ ডিপ্লোমা</h2>
          <ul className="mt-4 space-y-2 sm:space-y-3 text-white text-sm sm:text-sm">
            <li>
              <Link to={footerInfo?.course_link1}> {footerInfo?.course_name1}</Link>
            </li>
            <li>
              <Link to={footerInfo?.course_link2}>{footerInfo?.course_name2}</Link>
            </li>
            <li>
              <Link to={footerInfo?.course_link3}>{footerInfo?.course_name3}</Link>
            </li>
            <li>
              <Link to={footerInfo?.course_link4}>{footerInfo?.course_name4}</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-white text-base font-bold">দ্রুত লিঙ্ক</h1>
          <ul className="mt-4 space-y-2 sm:space-y-3 text-white text-sm sm:text-sm">
            <li>
              <Link to={"/news"}>সর্বশেষ সংবাদ</Link>
            </li>
            <li>
              <Link to={"/online-admission"}>এখনই আবেদন করুন</Link>
            </li>
            <li>
              <Link to={"/v-doctor-information"}>ভি ডাক্তাররা</Link>
            </li>
            <li>
              <Link to={"/result"}>ফলাফল চেক</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 text-white text-center text-xs sm:text-sm">
        <p>© সর্বস্বত্ব সংরক্ষিত বিটিটিডিসি দ্বারা</p>
        <div className="flex justify-center space-x-2 sm:space-x-4 mt-2 sm:mt-4 text-sm">
          <p>শর্তাবলী</p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=43+Uttar+Kalabagan,+Dhanmondi,+Dhaka+1205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline "
          >
            মানচিত্রে অবস্থান
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=43+Uttar+Kalabagan,+Dhanmondi,+Dhaka+1205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline "
          >
            সাইটম্যাপ
          </a>
          <Link to={"/contact-us"}>যোগাযোগ করুন</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
