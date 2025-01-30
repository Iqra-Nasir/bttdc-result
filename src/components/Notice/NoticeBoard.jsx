import { API_URL } from "../../../utils/url_config";
import ListSkeleton from "../Skeleton/ListSkeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);

  const getNotices = async () => {
    const response = await fetch(`${API_URL}/api/notices`);
    const data = await response.json();
    setNotices(data);
    setLoading(false);
  };

  useEffect(() => {
    getNotices();
  }, []);
  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-4 text-center">নোটিশ বোর্ড </h2>
      <div className="h-64 overflow-y-auto border border-gray-300 rounded-md p-2">
        {loading ? (
          <ListSkeleton />
        ) : (
          <ul className="list-disc list-inside">
            {notices?.data?.map((notice, index) => (
              <li key={index} className="bg-white p-3 mb-2 shadow-sm rounded">
                <Link to={`notice/${notice.id}`} className="w-full">
                  {notice.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
