

const FileInput = ({ label, accept, onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <label className="text-base text-black">
        {label} <span className="text-red-600">*</span>
      </label>
      <div className=" flex items-center justify-center cursor-pointer">
        <input
          type="file"
          accept={accept}
          className="w-full h-full cursor-pointer"
          onChange={handleFileChange}
        />
       
      </div>
    </div>
  );
};

export default FileInput;
