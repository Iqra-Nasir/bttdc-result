import { API_URL } from "../../../utils/url_config";
import ListSkeleton from "../Skeleton/ListSkeleton";
import NewsCart from "./NewsCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await fetch(`${API_URL}/api/news`);
    const data = await response.json();
    console.log(data);
    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="container mx-auto  px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold text-center text-[#0C7DCE]">সংবাদ</h1>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-full h-40 bg-gray-200 rounded-lg my-4">
            <ListSkeleton />
          </div>
        ))
      ) : (
        <div className="w-full space-y-5 mt-10">
          {news?.data?.map((news, index) => (
            <Link key={index} to={`/news/${news?.id}`}>
              <NewsCart data={news} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
