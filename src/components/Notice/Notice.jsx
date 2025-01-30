import { API_URL } from "../../../utils/url_config";
import ListSkeleton from "../Skeleton/ListSkeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Notices = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);

  const getNotices = async () => {
    const response = await fetch(`${API_URL}/api/notices`);
    const data = await response.json();
    console.log(data);
    setNotices(data);
    setLoading(false);
  };

  useEffect(() => {
    getNotices();
  }, []);
  return (
    <div className="container mx-auto py-10 bg-white">
      <h1 className="text-3xl font-bold text-center  text-[#0B7DCE] mb-8">
        নোটিশ বোর্ড
      </h1>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-full h-40 bg-gray-200 rounded-lg my-4">
            <ListSkeleton />
          </div>
        ))
      ) : (
        <div className="space-y-8">
          {notices?.data?.map((notice) => (
            <Link to={`/notice/${notice.id}`} key={notice.id}>
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-black">
                  {notice.title}
                </h2>
                <p className="text-sm text-gray-600">{notice.date}</p>
                <p className="text-base text-black mt-2">
                  {notice.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notices;
