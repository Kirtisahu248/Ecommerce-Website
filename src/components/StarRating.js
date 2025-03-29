const StarRating = ({ rating }) => {
    // Calculate the number of full stars
    const fullStars = Math.floor(rating);
  
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="text-xl">⭐</span>
        ))}
        <span className="ml-2 text-lg text-gray-600">
        {rating.toFixed(1)}
        </span>
      </div>
    );
  };
  
  export default StarRating;