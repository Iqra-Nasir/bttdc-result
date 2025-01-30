const Checkbox = ({ id, label, register, value, name, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        value={value}
        {...register(`${name}.${id}`)}
        className="mr-2"
        onChange={onChange}
      />
      <label htmlFor={id} className="text-base text-black">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
