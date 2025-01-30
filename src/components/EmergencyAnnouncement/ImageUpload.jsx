import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({StudentImageSet,CurrentImages}) => {

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        StudentImageSet((prevImages) => [...prevImages, reader.result]);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    maxFiles: 3,
    multiple: false,
  });

  useEffect(() => {
    console.log(CurrentImages);
  }, [CurrentImages]);

  return (
    <div className="rounded-md flex flex-col justify-center items-center">
      <div
        {...getRootProps()}
        className="flex justify-center items-center  xl:w-40 h-44 border-2 bg-white  border-dashed rounded-lg cursor-pointer"
      >
        <input {...getInputProps()} />
        <div
          id="drop-area"
          className="w-full h-full border-primary rounded-lg flex justify-center items-center"
        >
          {CurrentImages?.length > 0 ? (
            <>
              {CurrentImages?.map((image, index) => (
                <div
                  key={index}
                  className="col-span-1 w-full h-full border-borderColor border-dashed border-[1px] rounded-lg"
                >
                  {typeof image === "string" && (
                    <img
                      src={image}
                      className="w-full h-full rounded-md object-cover"
                      alt={`uploaded-${index}`}
                    />
                  )}
                </div>
              ))}
            </>
          ) : (
            <h1 className="text-center text-sm ">
              Click or drag to this area to upload
            </h1>
          )}
        </div>
      </div>
      <p className="text-xs text-red-500 mt-2">Maximum image size 1 MB</p>
    </div>
  );
};

export default ImageUpload;
