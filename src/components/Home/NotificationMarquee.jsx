import { API_URL } from "../../../utils/url_config";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const NotificationMarquee = () => {
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
    <div
      className="py-2
   bg-[#0B7DCE] relative transition-all duration-300"
    >
      <div
        className={`${
          loading ? "opacity-0 transition-all duration-300" : "opacity-100"
        } absolute w-16 lg:w-20 h-full bg-green-500 text-white top-0 z-20 flex justify-center items-center`}
      >
      নোটিশ
      </div>
      <Marquee>
        {notices?.data?.map((notice, index) => (
          <a href={`/notice/${notice.id}`} className="px-5 text-white" key={index}>
            {notice.title} |
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default NotificationMarquee;
