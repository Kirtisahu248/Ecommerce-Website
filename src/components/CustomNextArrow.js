import next from "../assets/Images/next.png"
  // Custom Next Arrow Component
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-1/4 right-4 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all duration-300"
        onClick={onClick}
      >
        <img 
          src={next} 
          alt="Next" 
          className="w-16 h-12 object-contain"
        />
      </div>
    );
  };

export default CustomNextArrow;
