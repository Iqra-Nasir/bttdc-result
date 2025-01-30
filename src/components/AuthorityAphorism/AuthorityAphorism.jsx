import { API_URL } from "../../../utils/url_config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionSkeleton from "../Skeleton/SectionSkeleton";

const AuthorityAphorism = () => {
  const [loading, setLoading] = useState(true);
  const [expartMessage, setExpartMessage] = useState([]);

  const getExpartMessage = async () => {
    const response = await fetch(`${API_URL}/api/messages`);
    const data = await response.json();
    console.log(data);
    setExpartMessage(data);
    setLoading(false);
  };

  useEffect(() => {
    getExpartMessage();
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <SectionSkeleton key={index} />
          ))
        ) : (
          expartMessage?.data?.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Title */}
              <div className="bg-[#0C7DCE] text-white text-xl font-semibold text-center py-3">
                {card?.message_title}
              </div>
              {/* Card Content */}
              <div className="p-6">
                {/* Card Image and Text */}
                <div className="">
                  {/* Floating Image */}
                  <img
                    src={`${API_URL}/uploads/messages/${card.messenger_image}`}
                    alt={card?.message_title}
                    className="float-left w-48 h-48 object-cover mr-4 mb-4"
                  />
                  {/* Text Content */}
                  <div className="text-gray-700 text-justify">
                    <span>{card?.content}</span>
                    <Link
                      to={`/about-us/authority-aphorism/${card.id}`}
                      className="text-[#0C7DCE] hover:underline"
                    >
                      বিস্তারিত…
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AuthorityAphorism;
