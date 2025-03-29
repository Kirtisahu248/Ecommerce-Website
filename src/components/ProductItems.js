
const ProductItems = ({data}) =>{
    const {category,thumbnail,price,title} = data
    return (
        <div className="w-64 border rounded-lg shadow-md overflow-hidden bg-white ">
            <h1 className="text-xl font-bold p-2">{category}</h1>
            <img className="w-auto h-48 object-cover " src={thumbnail}/>
            <div className="p-4">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-green-600">${price}</p>
      </div>
        </div>
    )
}

export default ProductItems;