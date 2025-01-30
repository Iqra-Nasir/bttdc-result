import { API_URL } from "../../../utils/url_config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionSkeleton from "../Skeleton/SectionSkeleton";

const SingleAuthorityAphorism = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [expartMessageSingle, setExpartMessageSingle] = useState([]);

  useEffect(() => {
    const getExpartMessageSingle = async () => {
      const response = await fetch(`${API_URL}/api/messages/${id}`);
      const data = await response.json();
      console.log(data);
      setExpartMessageSingle(data);
      setLoading(false);
    };
    getExpartMessageSingle();
  }, [id]);

  return (
    <div className="container mx-auto ">
      {loading ? (
        <SectionSkeleton />
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10  py-10 bg-white px-5 xl:px-0">
          {/* Image and Name Section */}
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[#0B7DCE] text-3xl font-semibold mb-5">
              {expartMessageSingle?.data?.message_title}
            </h1>
            <img
              src={`${API_URL}/uploads/messages/${expartMessageSingle?.data?.messenger_image}`}
              className="w-80 h-80 rounded-xl mb-4"
              alt="Director"
            />
            <p className="text-xl font-semibold text-gray-800">
              {expartMessageSingle?.data?.messenger_name}
            </p>
            <p className="text-lg font-thin text-gray-600">
              {expartMessageSingle?.data?.messenger_designation}
            </p>
          </div>

          {/* Content Section */}
          <div className="max-w-lg text-justify">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {expartMessageSingle?.data?.message_title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {expartMessageSingle?.data?.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleAuthorityAphorism;
