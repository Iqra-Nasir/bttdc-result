import { API_URL } from "../../../utils/url_config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionSkeleton from "../Skeleton/SectionSkeleton";

const SingleNewsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [singleNews, setSingleNews] = useState([]);

  useEffect(() => {
    const getSingleNews = async () => {
      const response = await fetch(`${API_URL}/api/news/${id}`);
      const data = await response.json();
      console.log(data);
      setSingleNews(data);
      setLoading(false);
    };
    getSingleNews();
  }, [id]);
  return (
    <div className="container mx-auto px-4 py-10 bg-white">
      <div className="flex justify-center items-center">
        {loading ? (
          <SectionSkeleton />
        ) : (
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-center md:text-start text-black">
              {singleNews?.data?.title}
            </h1>
            <div className="mt-5">
              <img
                src={`${API_URL}/uploads/news/${singleNews?.data?.news_attachment}`}
                alt={singleNews?.data?.title}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full mt-5">
              <p className="text-start text-base text-black opacity-65">
                {singleNews?.data?.description}
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Simple Footer */}
      {/* <footer className="mt-12 text-center border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-600">
          © 2024 Your Website Name. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default SingleNewsPage;
