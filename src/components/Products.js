import { useEffect, useState } from "react"
import { PRODUCT_API } from "../utils/constants"
import ProductItems from "./ProductItems"
import { Link } from "react-router-dom"


const Products = () => {
  const [items,setItems] = useState([])
  useEffect(()=>{
    fetchProducts()
  },[])
  const fetchProducts = async()=>{
    const data = await fetch(PRODUCT_API)
    const response = await data.json()
    // console.log(response)
    setItems(response?.products)
  }
  return (
      <div className="flex flex-wrap justify-center gap-4 p-4"> 
        {items.map((item)=><Link to={`/itemList?c=${item.category}`} key={item.id} ><ProductItems data={item}/></Link>)}
      </div>
  )
}

export default Products;
