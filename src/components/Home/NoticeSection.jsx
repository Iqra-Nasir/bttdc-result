import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// updated to better icon
import notices from "../../data/notice";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NoticeSection = () => {
  return (
    <div className="container mx-auto py-12 px-4 bg-white shadow-md rounded-lg my-12">
      {/* Header */}
      <div className="flex justify-center items-center mb-8">
        <div className="text-3xl font-bold text-[#0C7DCE]">নোটিশ বোর্ড</div>
      </div>

      {/* Splide Carousel */}
      <div className="relative">
        <Splide
          options={{
            type: "loop",
            autoStart: true,
            pauseOnHover: true,
            rewind: true,
            perPage: 3,
            autoScroll: {
              speed: 2,
            },
            gap: "1.5rem",
            height: "20rem",
            direction: "ltr",
            pagination: false, // Remove dots for cleaner look
            arrows: false,
            drag: "free",
            snap: true,
            breakpoints: {
              1024: {
                perPage: 2,
                height: "18rem",
              },
              768: {
                perPage: 1,
                height: "16rem",
              },
            },
          }}
          aria-label="Notice Board"
          extensions={{ AutoScroll }}
        >
          {notices.map((card, index) => (
            <SplideSlide key={index}>
              <Link to="/notice" className="hover:cursor-pointer">
                <div className="p-6 bg-[#F5F5F5] border rounded-lg transition transform hover:scale-105 shadow-md h-full flex flex-col justify-between">
                  <div className="text-lg font-medium text-gray-800 mb-4">
                    <h1 className="text-xl font-semibold mb-4">{card.title}</h1>
                    <p className="text-base">{card.description}</p>
                  </div>

                  <div className="text-sm text-gray-600 italic">
                    {card.date}
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Footer with Icon */}
      <div className="mt-6 text-right">
        <Link
          to={"/notice"}
          className="text-[#0C7DCE] text-lg font-medium flex items-center justify-end"
        >
          সমস্ত নোটিশ দেখুন <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default NoticeSection;
