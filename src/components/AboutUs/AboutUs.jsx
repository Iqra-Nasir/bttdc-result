import { API_URL } from "../../../utils/url_config";
import { organizationStore } from "../../store/store";
import SectionSkeleton from "../Skeleton/SectionSkeleton";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const [imageGallery, setImageGallery] = useState([]);
  const [aboutUsLoading, setAboutUsLoading] = useState(true);
  const [imageGalleryLoading, setImageGalleryLoading] = useState(true);
  const { globalMapLink } = organizationStore.useState();
  const getImageGallery = async () => {
    const response = await fetch(
      `${API_URL}/api/custom-sections/image_gallery`
    );
    const data = await response.json();
    setImageGallery(data);
    setImageGalleryLoading(false);
  };
  const getAboutUsDetails = async () => {
    const response = await fetch(`${API_URL}/api/custom-sections/about_us`);
    const data = await response.json();
    console.log(data);
    setAboutUs(data);
    setAboutUsLoading(false);
  };

  useEffect(() => {
    getAboutUsDetails();
    getImageGallery();
  }, []);

  return (
    <div className="container mx-auto bg-white">
      {/* About Us Sections */}
      {aboutUsLoading ? (
        <SectionSkeleton />
      ) : (
        <div>
          {aboutUs?.data?.map((details, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between max-h-auto my-10 md:my-16 lg:my-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
                <h2 className="font-bold text-2xl md:text-3xl text-[#0C7DCE] mb-4 text-center md:text-left">
                  {details.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify md:text-left">
                  {window.innerWidth < 768
                    ? details?.description?.length > 100
                      ? `${details?.description?.slice(0, 100)}...`
                      : details?.description
                    : details?.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <img
                  src={`${API_URL}/uploads/custom_section/${details?.attachment}`}
                  alt={details?.title}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Campus List */}
      {imageGalleryLoading ? (
        <SectionSkeleton/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 px-5 xl:px-0">
          {imageGallery?.data?.map((campus, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={`${API_URL}/uploads/custom_section/${campus?.attachment}`}
                alt={campus.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md">
                {campus.title}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Embedded Google Map */}
      <div className="map-container my-12 px-5 lg:px-0">
        <iframe
          src={globalMapLink}
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
