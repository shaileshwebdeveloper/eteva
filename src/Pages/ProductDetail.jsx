import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Css/products.module.css";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((r) => setProduct(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={styles.card} key={product.id}>
      <img src={product.image} alt={product.title} style={{ width: "80%" }} />
      <h1>{product.title}</h1>
      <p className={styles.price}>₹ {product.price}</p>

      <Flex>
        <div style={{ width: "80%", margin: "auto", padding: "1rem" }}>
          Quantity
        </div>

        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 1}
          style={{ width: "20%", marginBottom: "1rem" }}
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => setQuantity(quantity + 1)}
          style={{ width: "20%", marginBottom: "1rem" }}
        >
          +
        </button>
      </Flex>

      <button>Add to Cart</button>
    </div>
  );
};
