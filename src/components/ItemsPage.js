import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { PRODUCT_ITEMS } from "../utils/constants";
import ProductItems from "./ProductItems";
const ItemsPage = () => {
    const [searchParams] = useSearchParams();
    const [itemsList,setItemList]= useState([])
    const categoryName = searchParams.get('c')
    useEffect(()=>{
        fetchData();
    },[categoryName])
    const fetchData= async()=>{
      const data = await fetch(PRODUCT_ITEMS+categoryName)
      const response = await data.json();
    //   console.log(response.products)
    setItemList(response.products)
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
       {
        itemsList.map((i)=><Link key={i?.id} to={`/itemDetails?id=${i.id}`}><ProductItems data={i}/></Link>)
       }
    </div>
  )
}

export default ItemsPage;
