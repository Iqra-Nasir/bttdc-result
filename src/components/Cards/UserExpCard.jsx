import { API_URL } from "../../../utils/url_config";
import SectionSkeleton from "../Skeleton/SectionSkeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserExpCard = () => {
  const [loading, setLoading] = useState(true);
  const [expartMessage, setExpartMessage] = useState([]);

  const getExpartMessage = async () => {
    const response = await fetch(`${API_URL}/api/messages`);
    const data = await response.json();
    setExpartMessage(data);
    setLoading(false);
  };

  useEffect(() => {
    getExpartMessage();
  }, []);
  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex flex-col md:flex-row gap-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <SectionSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {expartMessage?.data?.slice(0, 2)?.map((card, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default UserExpCard;
