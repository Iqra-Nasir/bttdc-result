import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/url_config";
import ListSkeleton from "../Skeleton/ListSkeleton";
import { Link } from "react-router-dom";

const EmergencyContacts = () => {
  const [loading, setLoading] = useState(true);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const getEmergencyContacts = async () => {
    const response = await fetch(`${API_URL}/api/emergency-numbers`);
    const data = await response.json();
    setEmergencyContacts(data);
    setLoading(false);
  };
  useEffect(() => {
    getEmergencyContacts();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">বাংলাদেশ জরুরি যোগাযোগ</h2>
      <div className="h-64 overflow-y-auto border border-gray-300 rounded-md p-2">
        {loading ? (
          <ListSkeleton />
        ) : (
          <ul className="list-none">
            {emergencyContacts?.data?.map((contact, index) => (
            <li key={index} className="bg-white p-3 mb-2 shadow-sm rounded grid grid-cols-5">
              <div className="col-span-2 font-semibold">{contact?.title}</div>
              <div className="col-span-2">নাম্বার: {contact?.number}</div>
              <div>
                <Link
                  to={contact?.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline"
                >
                  লিংক
                </Link>
              </div>
            </li>
          ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmergencyContacts;
