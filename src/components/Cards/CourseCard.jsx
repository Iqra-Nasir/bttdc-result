/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Rating from "./Rating";

const CourseCard = ({ title, courseList }) => {
  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold capitalize text-gray-800">
          {title}
        </h2>
        <button className="bg-[#0C7DCE] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#0A5B9A] transition duration-300">
          <span>See All</span> <FaArrowRight />
        </button>
      </div>
      {/* Carousel */}
      <Splide
        options={{
          type: "loop",
          autoStart: true,
          pauseOnHover: true,
          rewind: true,
          perPage: 3,
          perMove: 1,
          autoScroll: {
            speed: 1,
          },
          arrows: false,
          gap: "1rem",
          pagination: true, // Enables pagination dots
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
          },
        }}
        aria-label="Courses Carousel"
      >
        {courseList?.map((card, index) => (
          <SplideSlide key={index}>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col space-y-4 p-4">
              <div className="w-full h-48">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-lg font-semibold text-gray-800">
                {card.title}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <Rating rating={card.rating} />
                <div>{card.student} students</div>
              </div>
              <button className="bg-[#0C7DCE] text-white w-full py-2 rounded-md hover:bg-[#0A5B9A] transition duration-300">
                Add to Cart
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CourseCard;
