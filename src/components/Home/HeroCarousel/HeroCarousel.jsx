import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { API_URL } from "../../../../utils/url_config";
import LargeContentSkeleton from "../../Skeleton/LargeContentSkeleton";



const HeroCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [sliders, setSliders] = useState([]);

  const getSliders = async () => {
    const response = await fetch(`${API_URL}/api/sliders`);
    const data = await response.json();
    setSliders(data);
    setLoading(false);
  };

  useEffect(() => {
    getSliders();
  }, []);
  return (
    <div className="container mx-auto border-b-2 z-0">
      {loading ? (
        <LargeContentSkeleton />
      ) : (
        <Splide
          options={{
          type: "loop",
          autoplay: true, // Enable autoplay
          interval: 2000, // Set interval for autoplay in milliseconds (e.g., 3000ms = 3 seconds)
          pauseOnHover: true,
          rewind: true,
          perPage: 1,
          pagination: false, // Disable default pagination
          arrows: false,
        }}
        aria-label="Bangla Splide Carousel"

        // Update to use Splide instance
      >
        {sliders?.data?.map((page, index) => (
          <SplideSlide key={index}>
            <div className="px-4 md:px-12 h-full relative bg-white min-h-[200px] md:min-h-250px] lg:min-h-[280px] ">
              <div className="relative flex flex-col md:flex-row justify-between items-center min-h-max">
                <div className="flex flex-col max-w-lg mb-4 md:mb-0 py-5 xl:py-0">
                  <h2 className="text-xl md:text-5xl font-semibold text-gray-800 mb-4 leading-snug md:leading-tight">
                    {page?.title}
                  </h2>
                  <p>{page.content}</p>
                  <div className="mt-5">
                    <Link to={page?.button_url}>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#0C7DCE] text-white font-semibold rounded shadow-md transition-transform transform hover:scale-105">
                        <span>{page?.button_text}</span>
                        <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={`${API_URL}/uploads/slider/${page?.image}`}
                    loading="lazy"
                    alt="slide"
                    className="object-cover my-8 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default HeroCarousel;
