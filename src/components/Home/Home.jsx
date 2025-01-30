import CardCircle from "../Cards/CardCircle";
import UserExpCard from "../Cards/UserExpCard";
import EmergencyContacts from "../News/EmergencyContacts";
import NoticeBoard from "../Notice/NoticeBoard";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import LatestNews from "./LatestNews/LatestNews";
import NotificationMarquee from "./NotificationMarquee";
import SupportForm from "./SupportForm";
import { Link } from "react-router-dom";

export const courseCs1 = "images/home/course-cs-1.png";
export const courseCs2 = "images/home/course-cs-2.png";
export const courseCs3 = "images/home/course-cs-3.png";

export const courseLive1 = "images/home/course-live-1.png";
export const courseLive2 = "images/home/course-live-2.png";
export const courseLive3 = "images/home/course-live-3.png";

export const courseMedi1 = "images/home/course-medical-1.png";
export const courseMedi2 = "images/home/course-medical-2.png";
export const courseMedi3 = "images/home/course-medical-3.png";

const Home = () => {
  
  return (
    <div className="container mx-auto">
      <HeroCarousel />
      <NotificationMarquee />
      {/* <hr className="w-full h-[3px] bg-white" /> */}
      {/* random card 1 start */}
      <div className="flex flex-col mx-auto justify-center items-center px-5 my-12 space-y-6 text-center">
        {/* Section Title */}
        <div className="font-bold text-3xl text-[#0C7DCE]">
          আপনার সম্ভাবনা খোলার জন্য বিশেষজ্ঞ নির্দেশনা
        </div>

        {/* Subtitle */}
        <div className="font-semibold text-lg text-gray-700">
          শিল্প পেশাদারদের কাছ থেকে শিখুন
        </div>

        {/* Description */}
        <div className="text-md text-gray-600 leading-relaxed">
          শিক্ষার্থীদের একটি সম্প্রদায়ে যোগ দিন এবং আপনার ক্যারিয়ারে এগিয়ে
          যাওয়ার জন্য প্রয়োজনীয় দক্ষতা অর্জন করুন। আপনি প্রযুক্তি, ব্যবসা, বা
          সৃজনশীল শিল্পে আপনার জ্ঞান উন্নত করতে চান না কেন, আমাদের সবার জন্য
          কিছু আছে। আমাদের কোর্সগুলি ব্যবহারিক, হাতে-কলমে এবং বছরের পর বছর শিল্প
          অভিজ্ঞতার সাথে বিশেষজ্ঞদের দ্বারা শেখানো হয়।
        </div>

        {/* CTA Button */}
        <div>
          <Link to={"/academic"}>
            {" "}
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              আরও জানুন
            </button>
          </Link>
        </div>
      </div>

      {/* random card 1 end */}

      <UserExpCard />

      {/* random card 2 start */}
      <div className="flex flex-col mx-auto justify-center items-center w-2/3 my-12 space-y-4 text-center">
        <div>
          <Link to={"/about-us/authority-aphorism"}>
            {" "}
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              আরও জানুন
            </button>
          </Link>
        </div>
        <Link to={"/apply-for-institution"}>
          <div className="relative w-60 h-16 hover:scale-105  mt-10">
            <div className="bg-[#2D7DCE] absolute top-0 left-0 h-[93%] w-[97%] rounded-2xl flex justify-center items-center text-white shadow-md hover:shadow-lg hover:scale-102 transition-shadow duration-200 ease-in-out z-10">
              ইনস্টিটিউটের জন্য এপলাই করুন
            </div>
            <div className="bg-[#1e5389] absolute bottom-0 left-0 h-[96%] w-[98%] rounded-2xl flex justify-center items-center text-white shadow-md hover:shadow-lg hover:scale-102 transition-shadow duration-200 ease-in-out"></div>
          </div>
        </Link>
      </div>
      {/* random card 2 end */}
      <CardCircle />

      {/* <div className="px-5">
        {courseSellList.map((category, index) => {
          const categoryName = Object.keys(category)[0];
          const categoryCourses = category[categoryName];

          return (
            <CourseCard
              key={index}
              title={categoryName}
              courseList={categoryCourses}
            />
          );
        })}
      </div> */}

      <LatestNews />
      <div className="w-full flex flex-col lg:flex-row justify-between items-center bg-white py-10">
        <div className="w-full lg:w-1/2">
          <NoticeBoard />
        </div>
        <div className="w-full lg:w-1/2">
          <EmergencyContacts />
        </div>
      </div>
      <SupportForm />

      {/* <NoticeSection /> */}
    </div>
  );
};

export default Home;
