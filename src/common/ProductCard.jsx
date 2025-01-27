import React from "react";
import styled from "styled-components";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductColor from "./ProductColor";
import { v4 as uuid4 } from "uuid";

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  height: 350px;
  cursor: pointer;
`;

const Colors = styled.div`
  width: 100%;
  display: flex;
  gap: 0.3rem;
`;

export default function ProductCard({ product }) {
  return (
    <Product>
      <ProductImage imgs={product.images} />
      <ProductInfo product={product} />
      <Colors>
        {productColor.map((color) => (
          <ProductColor key={uuid4()} color={color} />
        ))}
      </Colors>
    </Product>
  );
}

const productColor = ["red", "blue", "green"];
