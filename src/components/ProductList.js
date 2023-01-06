import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/ProductSlice";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector(state => state.productReducer.status)

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);


  if(status === 'loading'){
    return <Loading/>
  }
  return (
    <div className="product-list">
      {products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
}
