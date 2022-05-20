import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataProducts from "../data/data";
import { useParams } from "react-router-dom";
import {
  getProductsByCategoryFirebase,
  getProductsFirebase,
} from "../helpers/getItems";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const db = getFirestore();
    categoryName
      ? getProductsByCategoryFirebase(
          db,
          setProducts,
          categoryName,
          collection,
          getDocs,
          query,
          where
        )
      : getProductsFirebase(db, setProducts, collection, getDocs);
  }, [categoryName]);

  return (
    <>
      <h1 className='text-5xl text-center text-gray-700 p-8'>
        Camisetas a la venta
      </h1>
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
