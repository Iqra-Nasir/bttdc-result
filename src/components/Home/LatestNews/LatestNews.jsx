import { API_URL } from "../../../../utils/url_config";
import { latestNewsData } from "../../../data/latestNews";
import NewsSubCart from "./NewsSubCart";
import SectionSkeleton from "../../Skeleton/SectionSkeleton";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [loading, setLoading] = useState(true);
  const [latestNews, setLatestNews] = useState([]);

  const getNews = async () => {
    const response = await fetch(`${API_URL}/api/news`);
    const data = await response.json();
    setLatestNews(data);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="container mx-auto px-4 py-6 bg-white pb-10 ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl lg:text-2xl font-semibold capitalize text-gray-800">
          সর্বশেষ খবর
        </h2>
        <Link to={"/news"}>
          <button className="bg-[#0C7DCE] text-white text-xs lg:text-base px-2 lg:px-4 py-2 rounded flex items-center gap-2 hover:bg-[#0A5B9A] transition duration-300">
            <span className="flex items-center">
              সব দেখুন <FaArrowRight className="ml-1" />
            </span>
          </button>
        </Link>
      </div>
      {loading ? (
        <SectionSkeleton />
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* First card on the left */}
          <Link to={`/news/${latestNews?.data[0]?.id}`} className="md:w-1/2 ">
            <div className="space-y-4">
              <img
                src={`${API_URL}/uploads/news/${latestNews?.data[0]?.news_attachment}`}
                alt={latestNews?.data[0]?.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="font-bold text-xl text-gray-800">
                {latestNewsData[0].title}
              </h3>
              <p className="text-gray-600">{latestNews?.data[0]?.description}</p>
            </div>
          </Link>

          {/* Right side card list */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {latestNews?.data?.slice(1, 3).map((data, index) => (
              <Link key={index} to={`/news/${data?.id}`}>
                {" "}
                <NewsSubCart data={data} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
