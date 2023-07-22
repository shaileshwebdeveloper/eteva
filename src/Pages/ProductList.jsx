import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../Component/Redux/app/action";
import { SimpleGrid } from "@chakra-ui/react";
import styles from "../Css/products.module.css";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const navigate = useNavigate();

  const products = useSelector((state) => state.AppReducer.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, []);

  return (
    <>
      <SimpleGrid columns={4} spacing={10} mt="2%">
        {products?.map((item) => (
          <div
            className={styles.card}
            key={item.id}
            onClick={() => navigate(`/productdetail/${item.id}`)}
          >
            <img src={item.image} alt={item.title} style={{ width: "80%" }} />
            <h1>{item.title}</h1>
            <p className={styles.price}>₹ {item.price}</p>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
};
