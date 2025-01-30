// CustomPagination.js

const CustomPagination = ({ total, current, onPageChange }) => {
  return (
    <div className="custom-pagination flex justify-center mt-4">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={`pagination-dot ${current === index ? "active" : ""}`}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
