import { API_URL } from "../../../utils/url_config";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionSkeleton from "../Skeleton/SectionSkeleton";

const SingleNoticePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [singleNotice, setSingleNotice] = useState([]);

  useEffect(() => {
    const getSingleNews = async () => {
      const response = await fetch(`${API_URL}/api/notices/${id}`);
      const data = await response.json();
      console.log(data);
      setSingleNotice(data);
      setLoading(false);
    };
    getSingleNews();
  }, [id]);

  const downloadFile = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notices/download/${singleNotice?.data?.attachment}`, {
        method: "GET",
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      // Extract the blob from the response
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = singleNotice?.data?.attachment || "file";
      document.body.appendChild(a);

      // Trigger the download
      a.click();

      // Cleanup the temporary URL and anchor element
      a.remove();
      window.URL.revokeObjectURL(url);

      console.log("File downloaded successfully");
    } catch (error) {
      console.error("Error downloading file:", error.message);
    }
  };


  return (
    <div className="container mx-auto px-4 py-10 bg-white ">
      {loading ? (
        <SectionSkeleton />
      ) : (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-black">
            {singleNotice?.data?.title}
          </h1>
          <p className="text-center text-gray-500 mt-2">
            {singleNotice?.data?.date}
          </p>
          <div className="mt-5">
            <p className="text-start text-base text-black opacity-75">
              {singleNotice?.data?.description}
            </p>
          </div>
          <div className="mt-5 text-center">
            <Link
              // to={`${API_URL}/uploads/notice/${singleNotice?.data?.attachment}`}
              // target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              download={singleNotice?.data?.attachment}
              onClick={()=>{downloadFile()}}
            >
              ডাউনলোড করুন
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleNoticePage;
