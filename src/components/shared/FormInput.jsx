const FormInput = ({
  name,
  type,
  placeholder,
  register,
  validation,
  error,
}) => {
  return (
    <div className="mb-4">
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="w-full text-base px-2 py-2 border rounded-md focus:outline-none"
      />
      {error && <p className="text-red-500 text-sm pl-2">{error.message}</p>}
    </div>
  );
};

export default FormInput;
