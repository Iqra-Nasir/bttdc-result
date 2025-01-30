import { API_URL } from "../../../../utils/url_config";

const NewsSubCart = ({ data }) => {
  return (
    <div k className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="col-span-1 lg:col-span-2 flex justify-center items-center h-40">
        <img
          src={`${API_URL}/uploads/news/${data?.news_attachment}`}
          alt={data?.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-1 lg:col-span-3 flex flex-col space-y-4">
        <h3 className="font-bold text-lg text-gray-800">{data?.title}</h3>
        <p className="text-gray-600">{data?.description}</p>
      </div>
    </div>
  );
};

export default NewsSubCart;
