import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import returnProduct from "../assets/Images/return.png";
import payOnDelivery from "../assets/Images/POD.png";
import freeDelivery from "../assets/Images/freeDelivery.png";
import warranty from "../assets/Images/warranty.png";
import Slider from "react-slick";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemDetail = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get("id");
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetchSingleProduct();
  }, []);
  const fetchSingleProduct = async () => {
    const data = await fetch("https://dummyjson.com/products/" + itemId);
    const response = await data.json();
    setItem(response);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    pauseOnFocus: true,
  };
  const handleOnClick = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.description,
        price: item.price,
        image: item.thumbnail,
      })
    );
  };
  const {
    description,
    images,
    price,
    rating,
    returnPolicy,
    warrantyInformation,
  } = item;
  if (item.length === 0) return <div>Loading...</div>;
  return (
    <div className="flex p-4 mx-auto">
      <div className="w-1/2 pr-8">
        {images.length === 1 ? (
          <img className="w-full  object-contain" src={images[0]} />
        ) : (
          <Slider {...settings}>
            {images.map((image, indx) => (
              <img
                key={indx}
                className="w-full h-96 object-contain"
                src={image}
                alt="image"
              />
            ))}
          </Slider>
        )}
      </div>

      <div className="w-1/2 py-4">
        <div className="mb-4 border-b pb-4 border-gray-300">
          <h1 className="text-2xl font-bold whitespace-normal break-words mb-4 border-b pb-4 border-gray-300">
            {description}
          </h1>
          <p className="py-2 font-semibold text-xl">${price}</p>
          <p className="text-xl py-2">
            <StarRating rating={rating} />
          </p>
        </div>
        <div className="flex items-center mb-4 border-b pb-4 border-gray-300">
          <img className="w-10 h-10" src={returnProduct} />
          <span className="text-sm font-bold text-gray-600 mr-2">
            {returnPolicy}
          </span>
          <img className="w-10 h-10" src={warranty} />
          <span className="text-sm font-bold text-gray-600 mr-2">
            {warrantyInformation}
          </span>
          <img className="w-10 h-10" src={payOnDelivery} />
          <span className="text-sm font-bold text-gray-600 mr-2">
            Pay On Delivery
          </span>
          <img className="w-10 h-10" src={freeDelivery} />
          <span className="text-sm font-bold text-gray-600 mr-2">
            Free Delivery
          </span>
        </div>
        <button
          className="w-6/12 bg-yellow-400 py-2 rounded-md font-medium mb-4"
          onClick={handleOnClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
