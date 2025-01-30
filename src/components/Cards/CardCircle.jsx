import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API_URL } from "../../../utils/url_config";




const CardCircle = () => {
  const [loading, setLoading] = useState(true);
  const [featuredCourses, setFeaturedCourses] = useState([]);

  const getFeaturedCourses = async () => {
    const response = await fetch(`${API_URL}/api/featured-courses`);
    const data = await response.json();
    setFeaturedCourses(data);
    setLoading(false);
  };

  console.log(featuredCourses);
  useEffect(() => {
    getFeaturedCourses();
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-6 bg-white rounded-t-md">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
          আমরা যে কোর্সগুলি অফার করি
        </h2>
        <Link to={"/courses"}>
          <button className="bg-[#0C7DCE] text-xs lg:text-base text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#0A5B9A] transition duration-300">
            <span>সব দেখুন</span> <FaArrowRight />
          </button>
        </Link>
      </div>
      <Splide
        options={{
          type: "loop",
          autoStart: true,
          autoplay: true,
          pauseOnHover: true,
          rewind: true,
          perPage: 4,
          perMove: 1,
          interval:2000,
          speed:1000,
          // autoScroll: {
          //   speed: 0.5,
          // },
          gap: "1rem",
          pagination: false,
          arrows: false,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
            1280: {
              perPage: 3,
            },
            1536: {
              perPage: 4,
            },
          },
        }}
        aria-label="Courses Carousel"
      >
        {featuredCourses?.data?.map((card, index) => (
          <SplideSlide key={index}>
            <Link to={"/courses"}>
              <div className="w-full md:w-64 h-[350px] flex flex-col items-center bg-white rounded-3xl shadow-sm mb-24 border border-gray-300 hover:border-[#0B7DCE]">
                <div className="w-full h-2/3 bg-[#0B7DCE] rounded-t-3xl p-2">
                  <img
                    src={`${API_URL}/uploads/course/${card?.course_image}`}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-3xl shadow-md"
                  />
                </div>
                <div className="h-1/3 flex flex-col justify-between items-stretch p-5">
                  <p className="text-center">{card?.course_description}</p>
                  <div className="flex-1 flex justify-center items-end ">
                    <button className="bg-[#0B7DCE] px-3 rounded-xl py-1 text-white">
                      {card?.course_title}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CardCircle;
