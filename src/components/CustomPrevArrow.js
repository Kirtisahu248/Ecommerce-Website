import prev from "../assets/Images/back.png"
const CustomPrevArrow = (props) => {
    const {onClick } = props;
    return (
      <div
        className="absolute top-1/4 left-4 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all duration-300"
        onClick={onClick}
      >
        <img 
          src={prev}
          alt="Previous" 
          className="w-16 h-12 object-contain"
        />
      </div>
    );
  };

  export default CustomPrevArrow;