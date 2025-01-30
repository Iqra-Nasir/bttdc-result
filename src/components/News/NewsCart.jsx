import { API_URL } from "../../../utils/url_config";

const NewsCart = ({ data }) => {
  return (
    <div k className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 my-5">
      <div className="col-span-1 flex justify-center items-center h-40">
        <img
          src={`${API_URL}/uploads/news/${data?.news_attachment}`}
          alt={data?.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-1 lg:col-span-4 flex flex-col space-y-4">
        <h3 className="font-bold text-lg text-gray-800">{data?.title}</h3>
        <p className="text-gray-600">{data?.description?.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default NewsCart;
