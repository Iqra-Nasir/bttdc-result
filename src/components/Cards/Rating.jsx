/* eslint-disable react/prop-types */

const Rating = ({ rating }) => {
  // Ensure the rating is between 1 and 5
  const stars = Math.min(Math.max(rating, 0), 5);

  // Create an array with filled and unfilled stars
  const fullStars = "★".repeat(stars);
  const emptyStars = "☆".repeat(5 - stars);

  return (
    <div style={{ fontSize: "24px", color: "#f1c40f" }}>
      {fullStars}
      {emptyStars}
    </div>
  );
};

export default Rating;
